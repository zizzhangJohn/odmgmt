using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Core.Models;

namespace API.GraphQL
{
    public class Mutation
    {
        public async Task<Customer> AddOrUpdateCustomer([Service] ICustomerService customerService, CustomerModel customerModel)
        {
            return await customerService.AddOrUpdateCustomerAsync(customerModel);
        }
        public async Task<Order> AddOrUpdateOrder([Service] IOrderService orderService, OrderModel orderModel)
        {
            return await orderService.AddOrUpdateOrderAsync(orderModel);
        }

        public async Task<bool> DeleteCustomer([Service] ICustomerService customerService, int customerId)
        {
            return await customerService.DeleteCustomerAsync(customerId);
        }
        public async Task<bool> DeleteOrder([Service] IOrderService orderService, int orderId)
        {
            return await orderService.DeleteOrderAsync(orderId);
        }
    }
}