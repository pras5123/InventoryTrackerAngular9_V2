using InventoryDL.InventoryContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace InventoryBL
{
    interface IBLLayer
    {
        List<Product> GetAllProduct();
        Product GetProductById(int productId);
        bool AddUpdateProduct(Product product);

        List<Product> GetProductByName(string searchText);
    }
}
