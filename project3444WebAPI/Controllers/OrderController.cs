using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project3444.Core.Contract.Service;
using project3444.Core.Model;

namespace project3444WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderServiceAsync orderServiceAsync;
        public OrderController(IOrderServiceAsync orderServiceAsync)
        {
            this.orderServiceAsync = orderServiceAsync;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await orderServiceAsync.GetAllAsync();
            return Ok(result);
        }
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await orderServiceAsync.GetByIdAsync(id);
            if (result == null)
            {
                return NotFound($"Order with Id = {id} is not available");
            }
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> Post(OrderModel model)
        {
            var result = await orderServiceAsync.AddOrderAsync(model);
            if (result != 0)
            {
                return Ok(model);
            }
            return BadRequest();
        }
        [HttpPut]
        public async Task<IActionResult> Put(OrderModel model)
        {
            var result = await orderServiceAsync.UpdateOrderAsync(model);
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
            var result = await orderServiceAsync.DeleteOrderAsync(id);
            if (result == null)
            {
                return BadRequest();
            }
            return Ok("Order Deleted Sucessfully");

        }
    }
}
