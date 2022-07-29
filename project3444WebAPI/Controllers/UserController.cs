using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project3444.Core.Contract.Service;
using project3444.Core.Model;

namespace project3444WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserServiceAsync userServiceAsync;
        public UserController(IUserServiceAsync userServiceAsync)
        {
            this.userServiceAsync = userServiceAsync;
        }

        //Get All
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await userServiceAsync.GetAllAsync();
            return Ok(result);
        }

        //Get by ID
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await userServiceAsync.GetByIdAsync(id);
            if (result == null)
                return NotFound($"User with Id = {id} is not available");
            return Ok(result);
        }

        //Add or Insert
        [HttpPost]
        public async Task<IActionResult> Post(UserRequestModel model)
        {
            var result = await userServiceAsync.AddUserAsync(model);
            if (result != 0)
                return Ok(model);
            return BadRequest();
        }

        //Update
        [HttpPut]
        public async Task<IActionResult> Put(UserRequestModel model)
        {
            var result = await userServiceAsync.UpdateUserAsync(model);
            if (result != 0)
                return Ok(model);
            return BadRequest();
        }

        //Delete
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await userServiceAsync.DeleteUserAsync(id);
            if (result != 0)
                return Ok("User Deleted Successfully");
            return BadRequest();
        }
    }
}
