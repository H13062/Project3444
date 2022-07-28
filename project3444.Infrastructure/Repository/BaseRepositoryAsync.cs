using Microsoft.EntityFrameworkCore;
using project3444.Core.Contract.Repository;
using project3444.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace project3444.Infrastructure.Repository
{
    public class BaseRepositoryAsync<T> : IRepositoryAsync<T> where T : class
    {
        private readonly ProjectDbContext db;
        public BaseRepositoryAsync(ProjectDbContext _db)
        {
            db = _db;
        }
        public async Task<int> DeleteAsync(int id)
        {
            var result = await db.Set<T>().FindAsync(id);
            db.Set<T>().Remove(result);
            return await db.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await db.Set<T>().ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await db.Set<T>().FindAsync(id);
        }

        public async Task<int> InsertAsync(T entity)
        {
            await db.Set<T>().AddAsync(entity);
            return await db.SaveChangesAsync();
        }

        public async Task<int> UpdateAsync(T entity)
        {
            db.Entry(entity).State = EntityState.Modified;
            return await db.SaveChangesAsync();
        }
    }
}
