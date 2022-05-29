using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SDH.DAL.Entities.Interfaces;

namespace SDH.DAL.Entities
{ 
    public class FiremanEntity : IEntity
    {
        public Guid Id { get; set; }
        public string Vorname { get; set; }
        public string Surname { get; set; }
        public string Rank { get; set; }
        public string Note { get; set; }
    }
}
