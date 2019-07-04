using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeBook.Models
{
    public interface IRepository
    {
        IEnumerable<Recipe> Recipes { get; }
        Recipe GetRecipe(int Id);

        void AddRecipe(Recipe recipe);

        void UpdateRecipe(Recipe recipe);

        void Delete(int Id);
    }
}
