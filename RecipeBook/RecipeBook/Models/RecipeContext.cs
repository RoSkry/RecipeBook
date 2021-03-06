﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RecipeBook.Models
{
    public class RecipeContext:DbContext
    {
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Step> Steps { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }

        public RecipeContext(DbContextOptions<RecipeContext> options)
           : base(options)
        {
            
        }
    }
}
