using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Core.Model
{
    public class CommentModel
    {
        public int Id { get; set; }
        [Required]
        public DateTime DateTime { get; set; }
        [Required, Column(TypeName = "varchar")]
        public string Description { get; set; }
    }
}
