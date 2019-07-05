using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeBook.Models
{
    public static class RecipeInitializer
    {
        public static void Initialize(IApplicationBuilder app)
        {
            
            var context= app.ApplicationServices.GetRequiredService<RecipeContext>();
            if (context.Recipes.Any())
            {
                return;   // DB has been seeded
            }
            var recipes = new Recipe[]
            {
                new Recipe{Name="Salad"},
                new Recipe{Name="Borsh"}
            };
            foreach (var item in recipes)
            {
                context.Recipes.Add(item);
            }
            context.SaveChanges();

            var ingridients = new Ingredient[]
            {
                new Ingredient{Name="Beef",Recipe=recipes[1]},
                new Ingredient{Name="Cucumber",Recipe=recipes[0]},
                new Ingredient{Name="Carrot",Recipe=recipes[1]},
                new Ingredient{Name="Onion",Recipe=recipes[1]},
                new Ingredient{Name="Cabbadge",Recipe=recipes[0]},
            };
            foreach (var item in ingridients)
            {
                context.Ingredients.Add(item);
            }
            context.SaveChanges();

            var steps = new Step[]
            {
                new Step{Name="Prepare", Recipe=recipes[0]},
                new Step{Name="Boil", Recipe=recipes[1]},
                new Step{Name="Cut", Recipe=recipes[1]},
                new Step{Name="Add potato", Recipe=recipes[0]}
            };

            foreach (var item in steps)
            {
                context.Steps.Add(item);
            }
            context.SaveChanges();
        }
    }
}
