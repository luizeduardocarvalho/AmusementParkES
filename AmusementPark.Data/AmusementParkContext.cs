using AmusementPark.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace AmusementPark.Data
{
    public class AmusementParkContext : DbContext
    {
        public AmusementParkContext(DbContextOptions<AmusementParkContext> options) 
            : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }
    }
}
