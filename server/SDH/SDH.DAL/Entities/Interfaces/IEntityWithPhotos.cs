using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SDH.DAL.Entities.Interfaces
{
    public interface IEntityWithPhotos : IEntity
    {
        public List<PhotoEntity> Photos { get; set; }
    }
}
