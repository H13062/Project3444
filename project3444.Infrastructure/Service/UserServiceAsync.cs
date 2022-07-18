using project3444.Core.Contract.Repository;
using project3444.Core.Contract.Service;
using project3444.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Infrastructure.Service
{
    public class UserServiceAsync : IUserServiceAsync
    {
        private readonly IUserRepositoryAsync userRepositoryAsync;
        private readonly ICommentRepositoryAsync commentRepositoryAsync;
        public UserServiceAsync(IUserRepositoryAsync userRepositoryAsync, ICommentRepositoryAsync commentRepositoryAsync)
        {
            this.userRepositoryAsync = userRepositoryAsync;
            this.commentRepositoryAsync = commentRepositoryAsync;
        }

        public Task<int> AddUserAsync(UserRequestModel userRequest)
        {
            throw new NotImplementedException();
        }

        public Task<int> DeleteUserAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<UserResponseModel>> GetAllAsync()
        {
            var collection = await userRepositoryAsync.GetAllAsync();
            if (collection != null)
            {
                List<UserResponseModel> result = new List<UserResponseModel>();
                foreach(var item in collection)
                {
                    UserResponseModel responseModel = new UserResponseModel();
                    responseModel.Id = item.Id;
                    responseModel.UserName = item.UserName;
                    responseModel.Email = item.Email;
                    var comment = await commentRepositoryAsync.GetByIdAsync(item.CommentId);
                    responseModel.Comment = comment;
                    result.Add(responseModel);

                }
                return result;
            }
            return null;


        }

        public Task<UserResponseModel> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<UserRequestModel> GetUserForEditAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<int> UpdateUserAsync(UserRequestModel userRequest)
        {
            throw new NotImplementedException();
        }
    }
}
