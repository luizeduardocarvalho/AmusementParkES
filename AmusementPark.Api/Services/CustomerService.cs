using AmusementPark.Api.Services.Abstractions;
using AmusementPark.Data;
using AmusementPark.Data.Entities;
using System.Collections.Generic;
using System.Linq;

namespace AmusementPark.Api.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly AmusementParkContext context;

        public CustomerService(AmusementParkContext context)
        {
            this.context = context;
        }

        public Customer AddCustomer(Customer customer)
        {
            context.Customers.Add(customer);
            context.SaveChanges();
            return customer;
        }

        public List<Customer> GetCustomers()
        {
            var customers = context.Customers.ToList();
            return customers;
        }
    }
}
