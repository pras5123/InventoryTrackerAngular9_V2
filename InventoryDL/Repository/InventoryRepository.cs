using InventoryDL.InventoryContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryDL.Repository
{
    public class InventoryRepository : Repository<Product>, IInventoryRepository
    {
        public InventoryRepository(InventoryDB context)
           : base(context)
        {

        }
    }
}
