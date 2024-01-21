import axios from 'axios';
import { goerli } from '../models/Chain';



export class TransactionService {

  static API_URL =  'https://deep-index.moralis.io/api/v2';
  //enter your own api key for moralis.
  static API_KEY =  'abcdefghijkl';

  static async getTransactions(address: string) {
    const options = {
        method: 'GET',
        url: `${TransactionService.API_URL}/${address}`,
        params: {chain: goerli.name.toLowerCase()},
        headers: {accept: 'application/json', 'X-API-Key': TransactionService.API_KEY}
      };

    const response = await axios.request(options);
    return response;
  }

}
