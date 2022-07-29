using project3444.Core.Contract.Repository;
using project3444.Core.Entity;
using project3444.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Infrastructure.Repository
{
    public class CommentRepositoryAsync : BaseRepositoryAsync<Comment>, ICommentRepositoryAsync
    {
        public CommentRepositoryAsync(ProjectDbContext _dbContext) : base(_dbContext)
        {

        }
    }
}
