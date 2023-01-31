const resolvers = {
  Query: {
    order: (_, { id }, { dataSources }) => dataSources.ordersAPI.getOrder(id),
  },
  Order: {
    __resolveReference: (order, { dataSources }) =>
      dataSources.ordersAPI.getOrder(order.id),
    buyer: (root) => ({ id: root.customerId }),
    items: (root) => root.variantIds.map((variantId) => ({ id: variantId })),
  },
};

module.exports = resolvers;
