using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SDH.DAL.Entities.Interfaces;

namespace SDH.DAL.Entities
{
    public class EquipmentEntity : IEntityWithPhotos
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<EquipmentParameterEntity> Parameters = new ();
        public List<PhotoEntity> Photos { get; set; }
    }
}
