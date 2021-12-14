using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class FreestyleDbContext:DbContext
    {
        public FreestyleDbContext(DbContextOptions<FreestyleDbContext> options): base(options)
        {

        }

        public DbSet<FreeStyler> FreeStyler { get; set; }
        public DbSet<Nacionality> Nacionality { get; set; }

        
    }
}