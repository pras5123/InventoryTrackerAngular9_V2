using InventoryDL.InventoryContext;
using InventoryDL.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryDL.Repository
{
    public interface IInventoryRepository : IRepository<Product>
    {
        List<Product> GetProductByName(string searchText);
    }
}
