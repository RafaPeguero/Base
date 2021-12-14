using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Nacionality
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName="nvarchar(60)")]
        public string name { get; set; }
    }
}