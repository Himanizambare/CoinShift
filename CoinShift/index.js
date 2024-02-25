import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_QAPZ00e3t3S7WI3XaV0qnilzoyZNomsHSHmcMOwf');


export async function convertCurrency(fromcurrency,tocurrency,units){
const res=await freecurrencyapi.latest({
    base_currency: fromcurrency,
    currencies: tocurrency
});
const multiplier=res.data[tocurrency];
return multiplier*units;
};

