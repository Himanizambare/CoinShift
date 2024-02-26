import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { configDotenv } from 'dotenv';

configDotenv();

const freecurrencyapi = new Freecurrencyapi(process.env.FREECURRENCYAPI_API_KEY);


export async function convertCurrency(fromcurrency,tocurrency,units){
const res=await freecurrencyapi.latest({
    base_currency: fromcurrency,
    currencies: tocurrency
});
const multiplier=res.data[tocurrency];
return multiplier*units;
};

