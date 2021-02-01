
using InventoryDL.InventoryContext;
using InventoryDL.UnitofWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryDL
{
    public class DBLayer
    {
        public List<Product> GetAllProduct()
        {
            try
            {
                var unitOfWork = new UnitOfWork(new InventoryDB());
                return unitOfWork.Products.GetAll();
            }
            catch (Exception ex)
            {
                //Log exception here
            }
            finally
            {

            }
            return null;
        }

        public Product GetProductById(int productId)
        {
            try
            {
                var unitOfWork = new UnitOfWork(new InventoryDB());
                return unitOfWork.Products.GetEntityById(productId);
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


        public bool AddUpdateProduct(Product product)
        {
            var unitOfWork = new UnitOfWork(new InventoryDB());
            try
            {
                if (product.productId == 0)
                {
                    unitOfWork.Products.Add(product);
                    unitOfWork.Complete();
                    return true;
                }
                else
                {
                    unitOfWork.Products.Update(product);
                    unitOfWork.Complete();
                    return true;
                }

                
            }
            catch (Exception)
            {

                return false;
            }
            
           
        }


        public List<Product> GetProductByName(string searchText)
        {
           try
            {
                var unitOfWork = new UnitOfWork(new InventoryDB());
                return unitOfWork.Products.GetProductByName(searchText);
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
