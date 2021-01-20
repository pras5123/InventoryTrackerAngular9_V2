using InventoryDL.InventoryContext;
using InventoryDL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryDL.UnitofWork
{
    public class UnitOfWork : IUnitOfWork
    {
        //InventoryContext inventoryContext = new InventoryContext();
        private readonly InventoryDB _context;
        public IInventoryRepository Products { get; private set; }
        public UnitOfWork(InventoryDB context)
        {
            _context = context;
            Products = new InventoryRepository(_context);
        }

        public int Complete()
        {
            return _context.SaveChanges();
        }
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
