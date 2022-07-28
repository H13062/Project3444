using project3444.Core.Contract.Repository;
using project3444.Core.Contract.Service;
using project3444.Core.Entity;
using project3444.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Infrastructure.Service
{
    public class DishServiceAsync : IDishServiceAsync
    {
        private readonly IDishRepositoryAsync dishRepositoryAsync;
        public DishServiceAsync(IDishRepositoryAsync dishRepositoryAsync)
        {
            this.dishRepositoryAsync = dishRepositoryAsync;
        }

        public async Task<int> AddDishAsync(DishModel dishModel)
        {
            Dish dish = new Dish();
            dish.Name = dishModel.Name;
            dish.Description = dishModel.Description;
            dish.Price = dishModel.Price;
            return await dishRepositoryAsync.InsertAsync(dish);
        }

        public async Task<int> DeleteDishAsync(int id)
        {
            return await dishRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<DishModel>> GetAllAsync()
        {
            var collection = await dishRepositoryAsync.GetAllAsync();

            if (collection != null)
            {
                List<DishModel> result = new List<DishModel>();
                foreach (var item in collection)
                {
                    DishModel model = new DishModel();
                    model.Id = item.Id;
                    model.Name = item.Name;
                    model.Description = item.Description;
                    model.Price = item.Price;
                    result.Add(model);
                }
                return result;
            }
            return null;
        }

        public async Task<DishModel> GetByIdAsync(int id)
        {
            var item = await dishRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                DishModel model = new DishModel();
                model.Id = item.Id;
                model.Name = item.Name;
                model.Description = item.Description;
                model.Price = item.Price;
                return model;
            }
            return null;
        }

        public async Task<DishModel> GetDishForEditAsync(int id)
        {
            var item = await dishRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                DishModel model = new DishModel();
                model.Id = item.Id;
                model.Name = item.Name;
                model.Description = item.Description;
                model.Price = item.Price;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateDishAsync(DishModel dishModel)
        {
            Dish dish = new Dish();
            dish.Id = dishModel.Id;
            dish.Description = dishModel.Description;
            dish.Name = dishModel.Name;
            dish.Price = dishModel.Price;
            return await dishRepositoryAsync.UpdateAsync(dish);
        }
    }
}
