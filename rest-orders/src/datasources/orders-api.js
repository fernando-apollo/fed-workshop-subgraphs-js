const { RESTDataSource } = require('@apollo/datasource-rest');

class OrdersAPI extends RESTDataSource {
  // @WORKSHOP 2.2.1: Apply the base URL here
  baseURL = 'https://rest-api-j3nprurqka-uc.a.run.app/api';

  async getOrder(id) {
    // @WORKSHOP 2.2.2: Make HTTP Get call to endpoint
    return this.get(`orders/${encodeURIComponent(id)}`);
  }
}

module.exports = OrdersAPI;
