using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace API.GraphQL
{
    public class Query
    {
        [UseFiltering]
        public IQueryable<Customer> GetCustomers([Service] ICustomerService customerService)
        {
            return customerService.GetCustomersAndOrders();
        }
        [UseFiltering]
        public IQueryable<Order> GetOrders([Service] IOrderService orderService)
        {
            return orderService.GetOrders();
        }

        public async Task<StatsModel> GetStats([Service] ICustomerService customerService)
        {
            return await customerService.GetCustomersAndOrderStats();
        }
    }
}