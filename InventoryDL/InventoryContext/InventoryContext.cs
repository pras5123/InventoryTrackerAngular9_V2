using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryDL.InventoryContext
{
    public class InventoryContext : DbContext
    {        public DbSet<Product> Products { get; set; }
    }
}
