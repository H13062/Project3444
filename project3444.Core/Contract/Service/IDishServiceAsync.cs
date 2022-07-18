using project3444.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Core.Contract.Service
{
    public interface IDishServiceAsync
    {
        Task<IEnumerable<DishModel>> GetAllAsync();
        Task<int> AddDishAsync (DishModel dishModel);
        Task<int> UpdateDishAsync (DishModel dishModel);
        Task<DishModel> GetByIdAsync (int id);
        Task<DishModel> GetDishForEditAsync (int id);
        Task<int> DeleteDishAsync(int id);
    }
}
