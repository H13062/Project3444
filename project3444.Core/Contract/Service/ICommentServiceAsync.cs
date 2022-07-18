using project3444.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Core.Contract.Service
{
    public interface ICommentServiceAsync
    {
        Task<IEnumerable<CommentModel>> GetAllAsync();
        Task<int> AddCommentAsync(CommentModel comment);
        Task<CommentModel> GetByIdAsync(int id);
        Task<CommentModel> GetCommentForEditAsync (int id);
        Task<int> UpdateCommentAsync(CommentModel comment);
        Task<int> DeleteCommentAsync(int id);
    }
}
