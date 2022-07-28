using project3444.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Core.Contract.Service
{
    public interface IUserServiceAsync
    {
        Task<IEnumerable<UserResponseModel>> GetAllAsync();
        Task<int> AddUserAsync(UserRequestModel userRequest);
        Task<UserResponseModel> GetByIdAsync(int id);
        Task<UserRequestModel> GetUserForEditAsync(int id);
        Task<int> UpdateUserAsync(UserRequestModel userRequest);
        Task<int> DeleteUserAsync(int id);
    }
}
