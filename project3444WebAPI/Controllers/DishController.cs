using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project3444.Core.Contract.Service;
using project3444.Core.Model;

namespace project3444WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DishController : ControllerBase
    {
        private readonly IDishServiceAsync dishServiceAsync;
        public DishController(IDishServiceAsync dishServiceAsync)
        {
            this.dishServiceAsync = dishServiceAsync;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await dishServiceAsync.GetAllAsync();
            return Ok(result);
        }
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await dishServiceAsync.GetByIdAsync(id);
            if (result == null)
            {
                return NotFound($"Dish with Id = {id} is not available");
            }
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> Post(DishModel model)
        {
            var result = await dishServiceAsync.AddDishAsync(model);
            if (result != 0)
            {
                return Ok(model);
            }
            return BadRequest();
        }
        [HttpPut]
        public async Task<IActionResult> Put(DishModel model)
        {
            var result = await dishServiceAsync.UpdateDishAsync(model);
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
            var result = await dishServiceAsync.DeleteDishAsync(id);
            if (result == null)
            {
                return BadRequest();
            }
            return Ok("Dish Deleted Sucessfully");

        }
    }
}
