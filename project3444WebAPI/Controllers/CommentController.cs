using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project3444.Core.Contract.Service;
using project3444.Core.Model;

namespace project3444WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentServiceAsync commentServiceAsync;
        public CommentController(ICommentServiceAsync commentServiceAsync)
        {
            this.commentServiceAsync = commentServiceAsync;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await commentServiceAsync.GetAllAsync();
            return Ok(result);
        }
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await commentServiceAsync.GetByIdAsync(id);
            if (result == null)
            {
                return NotFound($"Comment with Id = {id} is not available");
            }
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> Post(CommentModel model)
        {
            var result = await commentServiceAsync.AddCommentAsync(model);
            if (result != 0)
            {
                return Ok(model);
            }
            return BadRequest();
        }
        [HttpPut]
        public async Task<IActionResult> Put(CommentModel model)
        {
            var result = await commentServiceAsync.UpdateCommentAsync(model);
            if (result != 0)
            {
                return Ok(model);
            }
            return BadRequest();
        }
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await commentServiceAsync.DeleteCommentAsync(id);
            if (result == null)
            {
                return BadRequest();
            }
            return Ok("Comment Deleted Sucessfully");

        }
    }
}
