using Core.Entities;
using Core.Enums;
using Core.Interfaces;
using Core.Models;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly IDbContextFactory<OMAContext> _contextFactory;
        public CustomerService(IDbContextFactory<OMAContext> contextFactory)
        {
            _contextFactory = contextFactory;

        }

        public IQueryable<Customer> GetCustomersAndOrders()
        {
            var context = _contextFactory.CreateDbContext();

            return context.Customers
                    .Where(c => !c.IsDeleted)
                    .Include(c => c.Orders.Where(o => !o.IsDeleted))
                    .Include(c => c.Address);
        }

        public async Task<Customer> AddOrUpdateCustomerAsync(CustomerModel customerModel)
        {
            var context = _contextFactory.CreateDbContext();
            Customer customer;
            if (customerModel.Id == null)
            {
                customer = new Customer
                {
                    FirstName = customerModel.FirstName,
                    LastName = customerModel.LastName,
                    ContactNumber = customerModel.ContactNumber,
                    Email = customerModel.Email,
                    Address = new Address
                    {
                        AddressLine1 = customerModel.AddressLine1,
                        AddressLine2 = customerModel.AddressLine2,
                        City = customerModel.City,
                        State = customerModel.State,
                        Country = customerModel.Country
                    }
                };
                await context.Customers.AddAsync(customer);
            }
            else
            {
                customer = await context.Customers
                            .Where(c => c.Id == customerModel.Id)
                            .Include(c => c.Address)
                            .FirstOrDefaultAsync();
                if (customer == null)
                {
                    throw new Exception($"Customer with id {customerModel.Id} was not found");
                }

                customer.FirstName = customerModel.FirstName;
                customer.LastName = customerModel.LastName;
                customer.ContactNumber = customerModel.ContactNumber;
                customer.Email = customerModel.Email;
                customer.Address.AddressLine1 = customerModel.AddressLine1;
                customer.Address.AddressLine2 = customerModel.AddressLine2;
                customer.Address.City = customerModel.City;
                customer.Address.State = customerModel.State;
                customer.Address.Country = customerModel.Country;

                context.Customers.Update(customer);
            }

            await context.SaveChangesAsync();

            return customer;
        }

        public async Task<bool> DeleteCustomerAsync(int customerId)
        {
            var context = _contextFactory.CreateDbContext();

            var customer = await context.Customers
                                .Where(c => c.Id == customerId)
                                .Include(c => c.Orders)
                                .FirstOrDefaultAsync();
            if (customer == null)
            {
                throw new Exception($"Customer with id {customer} was not found");
            }

            customer.IsDeleted = true;
            foreach (var order in customer.Orders)
            {
                order.IsDeleted = true;
            }

            return await context.SaveChangesAsync() > 0;
        }

        public async Task<StatsModel> GetCustomersAndOrderStats()
        {
            var context = _contextFactory.CreateDbContext();
            var totalCustomers = await context.Customers.Where(c => !c.IsDeleted).CountAsync();
            var orders = await context.Orders
                            .Where(o => !o.IsDeleted)
                            .ToListAsync();

            return new StatsModel
            {
                TotalCustomers = totalCustomers,
                TotalOrders = orders.Count,
                PendingOrders = orders.Count(o => o.Status == Status.PENDING),
                DraftOrders = orders.Count(o => o.Status == Status.DRAFT),
                CompletedOrders = orders.Count(o => o.Status == Status.COMPLETED),
                ShippedOrders = orders.Count(o => o.Status == Status.SHIPPED),
            };
        }
    }
}