using Microsoft.AspNetCore.Mvc;
using RecipeBook.Models;
using System.Collections.Generic;
using System.Linq;

namespace RecipeBook.Controllers
{
    [Route("api/[controller]")]
    public class RecipeController:Controller
    {
        private IRepository _repository;
        public RecipeController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            return _repository.Recipes.ToList();
        }

        [HttpGet("{id}")]
        public Recipe Get(int id)
        {
           return _repository.GetRecipe(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Recipe recipe)
        {
            if (ModelState.IsValid)
            {
                _repository.AddRecipe(recipe);
                return Ok(recipe);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Recipe recipe)
        {
            if (ModelState.IsValid)
            {
                _repository.UpdateRecipe(recipe);
                return Ok(recipe);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _repository.Delete(id);
            return Ok();
        }

    }
}
