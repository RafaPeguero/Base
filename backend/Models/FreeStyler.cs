using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class FreeStyler
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName="nvarchar(60)")]
        public string nombre { get; set; }
        [Column(TypeName="int")]
        public int edad { get; set; }
        [Column(TypeName="int")]
        public int competicionesGanadas { get; set; }
        public Nacionality nacionality {get; set;}
    }
}