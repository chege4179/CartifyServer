FROM node:20-alpine3.17 as builder

ARG DATABASE_URL
ARG NODE_ENV
ARG PORT
ARG CLOUD_NAME
ARG CLOUDINARY_API_KEY
ARG CLOUDINARY_API_SECRET

ENV DATABASE_URL=${DATABASE_URL}
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV CLOUD_NAME=${CLOUD_NAME}
ENV CLOUDINARY_API_KEY=${CLOUDINARY_API_KEY}
ENV CLOUDINARY_API_SECRET=${CLOUDINARY_API_SECRET}


WORKDIR /app

COPY package*.json ./

RUN npm install npm@latest
RUN npm install --target_arch=x64 --target_platform=linux --target_libc=glibc

EXPOSE ${PORT}
COPY . .

RUN npm run generate

RUN npm run build


FROM node:20-alpine3.17 AS production

# Arguments for environment variables
ARG PORT

# Set environment variables
ENV NODE_ENV=production
ENV PORT=${PORT}

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist


# Expose the necessary port
EXPOSE ${PORT}

# Start the application
CMD ["npm", "start"]