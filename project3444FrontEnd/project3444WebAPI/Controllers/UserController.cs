using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project3444.Core.Contract.Service;

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

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await userServiceAsync.GetAllAsync();
            return Ok(result);
        }

    }
}
