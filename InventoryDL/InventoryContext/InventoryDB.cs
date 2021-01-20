using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryDL.InventoryContext
{
    public class InventoryDB : DbContext
    {
        public InventoryDB() : base("name=InventoryDB")
        {
        }
        public virtual DbSet<Product> Products { get; set; }
    }
}
