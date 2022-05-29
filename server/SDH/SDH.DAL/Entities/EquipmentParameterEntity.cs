using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SDH.DAL.Entities.Interfaces;

namespace SDH.DAL.Entities
{
    public class EquipmentParameterEntity : IEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string Category { get; set; }
        public Guid EquipmentId { get; set; }
    }
}
