using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SDH.DAL.Entities.Interfaces;

namespace SDH.DAL.Entities
{
    public class PhotoEntity : IEntity
    {
        public Guid Id { get; set; }
        public string ImagePath { get; set; }
        public string EntityId { get; set; }
        public Common.Enums.Entities Entity { get; set; }
    }
}
