const algoliasearch = require("algoliasearch")
const Mpesa = require("mpesa-api").Mpesa

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);
const productsIndex = client.initIndex('products');

const credentials = {
	clientKey: process.env.MPESA_API_CONSUMER_KEY,
	clientSecret: process.env.MPESA_API_CONSUMER_SECRET,
	initiatorPassword: 'Safaricom986!',
	securityCredential: '',
	certificatePath: null
};
const environment = "sandbox"

const mpesa = new Mpesa(credentials, environment)

module.exports = { productsIndex,mpesa }

// var unirest = require("unirest");
// var req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate");
//
// req.query({
// 	"grant_type": "client_credentials"
// });
//
// req.headers({
// 	"Authorization": "Basic SWZPREdqdkdYM0FjWkFTcTdSa1RWZ2FTSklNY001RGQ6WUp4ZVcxMTZaV0dGNFIzaA=="
// });
//
// req.end(res => {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });


// let unirest = require('unirest');
// let req = unirest('GET', 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
// .headers({ 'Authorization': 'Bearer cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ==' })
// .send()
// .end(res => {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.raw_body);
// });
