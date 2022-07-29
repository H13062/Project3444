using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Core.Entity
{
    public class Dish
    {
        public int Id { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required, Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string Description { get; set; }
        [Required]
        public decimal Price { get; set; }
    }
}
