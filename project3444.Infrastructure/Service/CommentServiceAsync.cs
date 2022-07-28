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
    public class CommentServiceAsync : ICommentServiceAsync
    {
        private readonly ICommentRepositoryAsync commentRepositoryAsync;
        public CommentServiceAsync(ICommentRepositoryAsync commentRepositoryAsync)
        {
            this.commentRepositoryAsync = commentRepositoryAsync;
        }

        public async Task<int> AddCommentAsync(CommentModel comment)
        {
            Comment comm = new Comment();
            comm.DateTime = comment.DateTime;
            comm.Description = comment.Description;
            return await commentRepositoryAsync.InsertAsync(comm);
        }

        public async Task<int> DeleteCommentAsync(int id)
        {
            return await commentRepositoryAsync.DeleteAsync(id);
        }

        public async Task<IEnumerable<CommentModel>> GetAllAsync()
        {
            var collection = await commentRepositoryAsync.GetAllAsync();
            if (collection != null)
            {
                List<CommentModel> result = new List<CommentModel>();
                foreach(var item in collection)
                {
                    CommentModel model = new CommentModel();
                    model.Id = item.Id;
                    model.DateTime = item.DateTime;
                    model.Description = item.Description;
                    result.Add(model);
                }
                return result;
            }
            return null;
        }

        public async Task<CommentModel> GetByIdAsync(int id)
        {
            var item = await commentRepositoryAsync.GetByIdAsync(id);
            if(item != null)
            {
                CommentModel model = new CommentModel();
                model.Id = item.Id;
                model.DateTime = item.DateTime;
                model.Description = item.Description;
                return model;
            }
            return null;
        }

        public async Task<CommentModel> GetCommentForEditAsync(int id)
        {
            var item = await commentRepositoryAsync.GetByIdAsync(id);
            if(item != null)
            {
                CommentModel model = new CommentModel();
                model.Id = item.Id;
                model.DateTime = item.DateTime;
                model.Description = item.Description;
                return model;
            }
            return null;
        }

        public async Task<int> UpdateCommentAsync(CommentModel comment)
        {
            Comment comm = new Comment();
            comm.Id = comment.Id;
            comm.DateTime = comment.DateTime;
            comm.Description = comment.Description;
            return await commentRepositoryAsync.UpdateAsync(comm);
        }
    }
}
