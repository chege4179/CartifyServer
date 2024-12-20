export const ErrorMapping = {
    INVALID_DEVICE_APPCODE: {
        message: `Kindly provide a valid deviceID to continue.`,
        code: 'INVALID_DEVICE_APPCODE',
    },
    MISSING_DEVICE_INFO:{
        message: "Missing Device Info",
        code: 'MISSING_DEVICE_INFO',
    },
    INVALID_APP_ENCRYPTION: {
        message: `Invalid encryption system, Kindly disable your biometric on self service menu and enable on login.`,
        code: 'INVALID_APP_ENCRYPTION',
    },
    INTERNAL_SERVER_ERROR: {
        message:
            'We are currently experiencing technical difficulties processing your request. Please try again shortly.',
        code: 'INTERNAL_SERVER_ERROR',
    },
    MISSING_IMAGES:{
        message: 'We need atleast 10 images to create a listing',
        code: 'IMAGES_REQUIRED',
    },
    INVALID_CREDENTIALS:{
        message: 'These credentials do not look familiar to us',
        code: 'INVALID_CREDENTIALS',
    }
};