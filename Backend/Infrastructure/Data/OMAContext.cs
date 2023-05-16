using Core.Entities;
using Core.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class OMAContext : DbContext
    {
        public OMAContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasData(
                new Customer
                {
                    Id = 1,
                    FirstName = "James",
                    LastName = "Bond",
                    ContactNumber = "123456",
                    IsDeleted = false,
                    Email = "jamesbond@gmail.com"
                },
                new Customer
                {
                    Id = 2,
                    FirstName = "John",
                    LastName = "Cena",
                    ContactNumber = "123423256",
                    IsDeleted = false,
                    Email = "johncena@gmail.com"
                },
                new Customer
                {
                    Id = 3,
                    FirstName = "Conor",
                    LastName = "McGregor",
                    ContactNumber = "3245098734",
                    IsDeleted = false,
                    Email = "cmcgregor@gmail.com"
                }
            );
            modelBuilder.Entity<Address>().HasData(
                new Address
                {
                    Id = 1,
                    CustomerId = 1,
                    AddressLine1 = "SomePlace",
                    AddressLine2 = "there",
                    City = "melbourne",
                    State = "victoria",
                    Country = "AU"
                },
                new Address
                {
                    Id = 2,
                    CustomerId = 2,
                    AddressLine1 = "SomePlace2",
                    AddressLine2 = "there2",
                    City = "melbourne2",
                    State = "victoria2",
                    Country = "AU"
                },
                new Address
                {
                    Id = 3,
                    CustomerId = 3,
                    AddressLine1 = "123 Twin House Lane",
                    AddressLine2 = "",
                    City = "Verona",
                    State = "MO",
                    Country = "US"
                }
            );
            modelBuilder.Entity<Order>().HasData(
                new Order
                {
                    Id = 1,
                    CustomerId = 1,
                    OrderDate = new DateTime(2022, 10, 20).ToUniversalTime(),
                    Description = "New Item",
                    TotalAmount = 500,
                    DepositAmount = 10,
                    IsDelivery = true,
                    Status = Status.PENDING,
                    OtherNotes = "Something new",
                    IsDeleted = false,
                },
                new Order
                {
                    Id = 2,
                    CustomerId = 2,
                    OrderDate = new DateTime(2022, 11, 10).ToUniversalTime(),
                    Description = "Another Item",
                    TotalAmount = 5000,
                    DepositAmount = 250,
                    IsDelivery = true,
                    Status = Status.PENDING,
                    OtherNotes = "Something new",
                    IsDeleted = false
                },
                new Order
                {
                    Id = 3,
                    CustomerId = 3,
                    OrderDate = new DateTime(2023, 3, 10).ToUniversalTime(),
                    Description = "Another Item",
                    TotalAmount = 3000,
                    DepositAmount = 1400,
                    IsDelivery = true,
                    Status = Status.SHIPPED,
                    OtherNotes = "Something new",
                    IsDeleted = false
                }
            );
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Address> Addresses { get; set; }

    }
}