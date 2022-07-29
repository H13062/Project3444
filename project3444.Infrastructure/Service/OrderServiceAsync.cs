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
    public class OrderServiceAsync : IOrderServiceAsync
    {
        private readonly IOrderRepositoryAsync orderRepositoryAsync;
        private readonly IDishRepositoryAsync dishRepositoryAsync;
        private readonly IUserRepositoryAsync userRepositoryAsync;
        public OrderServiceAsync(IOrderRepositoryAsync _orderRepositoryAsync, IDishRepositoryAsync _dishRepositoryAsync, IUserRepositoryAsync _userRepositoryAsync)
        {
            orderRepositoryAsync = _orderRepositoryAsync;
            dishRepositoryAsync = _dishRepositoryAsync;
            userRepositoryAsync = _userRepositoryAsync;
        }

        public async Task<int> AddOrderAsync(OrderModel order)
        {
            Order or = new Order();
            or.UserId = order.UserId;
            or.Quantity = order.Quantity;
            or.DishId = order.DishId;
            or.Id = or.Id;
            return await orderRepositoryAsync.InsertAsync(or);
        }

        public async Task<int> DeleteOrderAsync(int id)
        {
            return await orderRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<OrderModel>> GetAllAsync()
        {
            var collection = await orderRepositoryAsync.GetAllAsync();

            if (collection != null)
            {
                List<OrderModel> result = new List<OrderModel>();
                foreach(var item in collection)
                {
                    OrderModel model = new OrderModel();
                    model.Id = item.Id;
                    model.Quantity = item.Quantity;
                    var dish = await dishRepositoryAsync.GetByIdAsync(item.DishId);
                    model.DishId = dish.Id;
                    var user = await userRepositoryAsync.GetByIdAsync(item.UserId);
                    model.UserId = user.Id;
                    result.Add(model);
                }
                return result;
            }
            return null;
        }

        public async Task<OrderModel> GetByIdAsync(int id)
        {
            var item = await orderRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                OrderModel model = new OrderModel();
                model.Id = item.Id;
                model.Quantity = item.Quantity;
                var dish = await dishRepositoryAsync.GetByIdAsync(item.Id);
                model.DishId = dish.Id;
                var user = await userRepositoryAsync.GetByIdAsync(item.Id);
                model.UserId = user.Id;
                return model;
            }
            return null;
        }

        public async Task<OrderModel> GetOrderForEditAsync(int id)
        {
            var item = await orderRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                OrderModel model = new OrderModel();
                model.Id = item.Id;
                model.Quantity = item.Quantity;
                model.UserId = item.UserId;
                model.DishId = item.DishId;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateOrderAsync(OrderModel order)
        {
            Order ord = new Order();
            ord.Id = order.Id;
            ord.UserId = order.UserId;
            ord.Quantity = order.Quantity;
            ord.DishId = order.DishId;
            return await orderRepositoryAsync.UpdateAsync(ord);
        }
    }
}
