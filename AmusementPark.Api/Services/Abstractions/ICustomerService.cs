using AmusementPark.Data.Entities;
using System.Collections.Generic;

namespace AmusementPark.Api.Services.Abstractions
{
    public interface ICustomerService
    {
        List<Customer> GetCustomers();

        Customer AddCustomer(Customer customer);
    }
}
