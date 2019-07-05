using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeBook.Models
{
    public class DataRepository : IRepository
    {
        private RecipeContext _recipeContext;
        public DataRepository(RecipeContext recipeContext)
        {
            _recipeContext = recipeContext;
        }
        public IEnumerable<Recipe> Recipes => _recipeContext.Recipes.Include("Ingredients").Include("Steps");

        public void AddRecipe(Recipe recipe)
        {
            _recipeContext.Add(recipe);
            _recipeContext.SaveChanges();
        }

        public void Delete(int Id)
        {
            var recipe = _recipeContext.Recipes.FirstOrDefault(p=>p.Id==Id);
            _recipeContext.Recipes.Remove(recipe);
            _recipeContext.SaveChanges();
        }

        public Recipe GetRecipe(int Id)
        {
            return _recipeContext.Recipes.Include("Ingredients").Include("Steps").FirstOrDefault(p=>p.Id==Id);
        }

        public void UpdateRecipe(Recipe recipe)
        {
            Recipe p = _recipeContext.Recipes.Find(recipe.Id);
            _recipeContext.Update(p);
            _recipeContext.SaveChanges();
        }
    }
}
