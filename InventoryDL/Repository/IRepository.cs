using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InventoryDL.IRepository
{
    public interface IRepository<TEntity> where TEntity : class    
    {
        TEntity GetEntityById(int id);
        List<TEntity> GetAll();
        void Add(TEntity entity);

        void Update(TEntity entity);

    }
}
