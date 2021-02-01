using InventoryDL;
using InventoryDL.InventoryContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace InventoryBL
{
    public class BLLayer : IBLLayer
    {
        DBLayer objDB = new DBLayer();

        public bool AddUpdateProduct(Product product)
        {
           bool indicator = objDB.AddUpdateProduct(product);
           return indicator;
        }  

        public List<Product> GetAllProduct()
        {
           return objDB.GetAllProduct();
        }

        public Product GetProductById(int productId)
        {
            return objDB.GetProductById(productId);
        }


        public List<Product> GetProductByName(string searchText)
        {
            return objDB.GetProductByName(searchText);
        }
    }
}
