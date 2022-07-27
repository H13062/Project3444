using project3444.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Core.Contract.Service
{
    public interface IOrderServiceAsync
    {
        Task<IEnumerable<OrderModel>> GetAllAsync();
        Task<int> AddOrderAsync(OrderModel order);
        Task<OrderModel> GetByIdAsync(int id);
        Task<OrderModel> GetOrderForEditAsync(int id);
        Task<int> UpdateOrderAsync(OrderModel order);
        Task<int> DeleteOrderAsync(int id);
    }
}
