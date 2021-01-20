using InventoryBL;
using InventoryDL;
using InventoryDL.InventoryContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
//using System.Web.Mvc;

namespace InventoryTrackerApp.Controllers
{
    public class InventoryController : ApiController
    {
        BLLayer BLLayer = new BLLayer();

        [HttpGet]
        [Route("api/Inventory/GetProduct")]
        //https://localhost:44306/Api/Inventory/GetProduct
        public List<Product> GetProduct()
        {
            try
            {
                return BLLayer.GetAllProduct();
            }
            catch (Exception)
            {
                // Add logs here
            }
            return null;
        }


        [HttpGet]
        [Route("api/Inventory/GetProductById")]
        //https://localhost:44306/Api/Inventory/GetProductById
        public Product GetProductById(int productId)
        {
            try
            {
                return BLLayer.GetProductById(productId);
            }
            catch (Exception ex)
            {
                // Log exception here
            }
            finally
            {

            }
            return null;
        }

        [HttpPost]
        [Route("api/Inventory/AddUpdateProduct")]
        //https://localhost:44306/Api/Inventory/AddUpdateProduct
        public IHttpActionResult AddUpdateProduct(Product product)
        {
            try
            {
                if(BLLayer.AddUpdateProduct(product))
                { 
                return Ok();
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                //log exceptio here.
                return null;
            }
            finally
            {

            }
        }

    }
}
