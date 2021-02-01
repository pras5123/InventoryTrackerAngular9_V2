using InventoryDL.InventoryContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryDL.Repository
{
    public class InventoryRepository : Repository<Product>, IInventoryRepository
    {
        private InventoryDB dbContext;
        public InventoryRepository(InventoryDB context)
           : base(context)
        {
            dbContext = context;


        }


        public List<Product> GetProductByName(string searchText)
        {
            try
            {           
                List<Product> objProduct = dbContext.Products.Where(k => k.productName.Contains(searchText)).ToList();
                 return objProduct;
            }
            catch (Exception)
            {
                //Log exception here
            }
            finally
            {

            }
            return null;
        }

      
    }
}
