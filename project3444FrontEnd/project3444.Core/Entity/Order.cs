using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Core.Entity
{
    public class Order
    {
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        public int DishId { get; set; }
        public int UserId { get; set; }
        public Dish Dish { get; set; }
        public User User { get; set; }
    }
}
