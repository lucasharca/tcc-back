import { Spot } from '@binance/connector';


export class GetDataFromBinanceService {
  async execute({ apiKey, apiSecret }) {
    return await this.getData(apiKey, apiSecret);
  }

  async getData(apiKey: string, apiSecret: string) {
    const client = new Spot(apiKey, apiSecret);
    try {
      const result = await client.account().then(response => {
        let data = response.data
        if (data && data.balances) {
          const filtered = data.balances.filter(item => item.free > 0)
          data.balances = filtered
        }
        return data;
      })
      return result;
    } catch (error) {
      return error;
    }
  }
}

