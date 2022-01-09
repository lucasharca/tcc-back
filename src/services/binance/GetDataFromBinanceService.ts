import { Spot } from '@binance/connector';

const apiKey = 'jMGs52wjKnHWqg52YhqFRsMRKSC64LjlY3HXL8XLhc9Nbf7jgUibzV3wo8c6krcg';
const apiSecret = 'gSjLRqzcdjn4iHC4xBKWxKQwedvYgKt7bpmDAYfMsRVCIvpuD2vbPFeZg6k4d5cd';
const client = new Spot(apiKey, apiSecret);

export class GetDataFromBinanceService {
  async execute () {
    return await this.getData();
  }

  async getData() {
    const result = await client.account().then( response => {
      let data = response.data
      if (data && data.balances) {
        const filtered = data.balances.filter(item => item.free > 0)
        data.balances = filtered
      }
      return data;
    })

    return result;
  } 
}

