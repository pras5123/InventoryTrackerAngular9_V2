using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryDL.InventoryContext
{
    public  class Product
    {
        private DateTime _productCreatedDate = DateTime.Now;
        public int productId { get; set; }
        
        public string productName { get; set; }
        public decimal productPrice { get; set; }
        public int productQuantity { get; set; }
        public DateTime productCreatedDate
        {
            get
            {
                return _productCreatedDate;
            }
            set
            {
                _productCreatedDate = value;
            }
        }
    }
}
