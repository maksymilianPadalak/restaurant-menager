import axios from "axios";

/**
*  let oneEur = await curr.convert(1, 'EUR', 'PLN')
* */
export default class CurrencyService {

  convert = async (amount, fromCurrency, toCurrency) => {
    let apiKey = '3649cc3a74efa29e4e89';

    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    let query = fromCurrency + '_' + toCurrency;

    let url = 'https://free.currconv.com/api/v7/convert?q=' + query + '&compact=ultra&apiKey=' + apiKey;
    const response = await axios.get(url)

    let val = response.data[query];
    let total = val * amount;
    return Math.round(total * 100) / 100
  }
}

