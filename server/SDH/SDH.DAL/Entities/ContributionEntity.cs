using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SDH.DAL.Entities.Interfaces;

namespace SDH.DAL.Entities
{
    public class ContributionEntity : IEntityWithPhotos
    {
        public Guid Id { get; set; }
        public string Author { get; set; }
        public string Message { get; set; }
        public List<PhotoEntity> Photos { get; set; }
    }
}
