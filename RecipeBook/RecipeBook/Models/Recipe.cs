using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeBook.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<string> Ingredients { get; set; }
        public IEnumerable<string> Steps { get; set; }
    }
}
