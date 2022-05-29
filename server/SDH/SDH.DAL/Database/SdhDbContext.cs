using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SDH.DAL.Entities;

namespace SDH.DAL.Database
{
    public class SdhDbContext : DbContext
    {
        public SdhDbContext(DbContextOptions contextOptions) : base(contextOptions)
        {
        }

        public DbSet<ContributionEntity> Contributions { get; set; }
        public DbSet<EquipmentEntity> Equipments { get; set; }
        public DbSet<EquipmentParameterEntity> EquipmentParameters { get; set; }
        public DbSet<EventEntity> Events { get; set; }
        public DbSet<FiremanEntity> Firemen { get; set; }
        public DbSet<InterventionEntity> Interventions { get; set; }
        public DbSet<PhotoEntity> Photos { get; set; }




        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);

            /*modelBuilder.ApplyConfiguration(new GameConfiguration());

            modelBuilder.ApplyConfiguration(new PlayerConfiguration());

            modelBuilder.ApplyConfiguration(new TeamConfiguration());

            modelBuilder.ApplyConfiguration(new TournamentVenueConfiguration());*/

        }

    }
}
