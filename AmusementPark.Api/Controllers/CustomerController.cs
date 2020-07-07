using AmusementPark.Api.Services.Abstractions;
using AmusementPark.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace AmusementPark.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ILogger<CustomerController> logger;
        private readonly ICustomerService customerService;

        public CustomerController(ILogger<CustomerController> logger, ICustomerService customerService)
        {
            this.logger = logger;
            this.customerService = customerService;
        }

        [HttpGet("/api/customers")]
        public ActionResult<List<Customer>> GetProducts()
        {
            return customerService.GetCustomers();
        }

        [HttpPost("/api/customer")]
        public ActionResult<Customer> AddCustomer(Customer customer)
        {
            customerService.AddCustomer(customer);
            return customer;
        }
    }
}
