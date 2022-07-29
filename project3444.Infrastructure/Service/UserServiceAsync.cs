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
    public class UserServiceAsync : IUserServiceAsync
    {
        private readonly IUserRepositoryAsync userRepositoryAsync;
        private readonly ICommentRepositoryAsync commentRepositoryAsync;
        public UserServiceAsync(IUserRepositoryAsync userRepositoryAsync, ICommentRepositoryAsync commentRepositoryAsync)
        {
            this.userRepositoryAsync = userRepositoryAsync;
            this.commentRepositoryAsync = commentRepositoryAsync;
        }

        public async Task<int> AddUserAsync(UserRequestModel userRequest)
        {
            User userEntity = new User();
            userEntity.Name = userRequest.Name;
            userEntity.UserName = userRequest.UserName;
            userEntity.Email = userRequest.Email;
            userEntity.Password = userRequest.Password;
            userEntity.CommentId = userRequest.CommentId;
            return await userRepositoryAsync.InsertAsync(userEntity);
        }

        public async Task<int> DeleteUserAsync(int id)
        {
            return await userRepositoryAsync.DeleteAsync(id);
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
                    responseModel.Name = item.Name;
                    responseModel.UserName = item.UserName;
                    responseModel.Email = item.Email;
                    var comment = await commentRepositoryAsync.GetByIdAsync(item.CommentId);
                    responseModel.CommentId = comment.Id;
                    result.Add(responseModel);

                }
                return result;
            }
            return null;


        }

        public async Task<UserResponseModel> GetByIdAsync(int id)
        {
            var item = await userRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                UserResponseModel responseModel = new UserResponseModel();
                responseModel.Id = item.Id;
                responseModel.Name = item.Name;
                responseModel.UserName = item.UserName;
                responseModel.Email = item.Email;
                var comment = await commentRepositoryAsync.GetByIdAsync(item.CommentId);
                responseModel.Comment = comment;
                return responseModel;
            }
            return null;
        }

        public async Task<UserRequestModel> GetUserForEditAsync(int id)
        {
            var item = await userRepositoryAsync.GetByIdAsync(id);
            if (item != null)
            {
                UserRequestModel model = new UserRequestModel();
                model.Id = item.Id;
                model.Name = item.Name;
                model.UserName = item.UserName;
                model.Email = item.Email;
                model.Password = item.Password;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateUserAsync(UserRequestModel userRequest)
        {
            User user = new User();
            user.Id = userRequest.Id;
            user.UserName = userRequest.UserName;
            user.Email = userRequest.Email;
            user.Password = userRequest.Password;
            user.Name = userRequest.Name;
            user.CommentId = userRequest.CommentId;
            return await userRepositoryAsync.UpdateAsync(user);
        }
    }
}
