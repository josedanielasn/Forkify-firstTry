//==============================================================>
//==============================================================>
//==============================================================>
//  data control
let dataControl = (() => {
  let NewRecipe = class {
    constructor(
      foodName,
      author,
      image,
      linkRecipe,
      timeToCook,
      linkDirection,
      recipeItem
    ) {
      (this.foodName = foodName),
        (this.author = author),
        (this.image = image),
        (this.linkRecipe = linkRecipe),
        (this.timeToCook = timeToCook),
        (this.linkDirection = linkDirection),
        (this.recipeItem = recipeItem),
        (this.liked = false);
    }
  };

  let RecipeItem = class {
    constructor(amount, unit, item) {
      this.amount1 = parseFloat(amount) * 0.25;
      this.amount2 = parseFloat(amount) * 0.5;
      this.amount3 = parseFloat(amount) * 0.75;
      this.amount4 = parseFloat(amount);
      this.unit = unit;
      this.item = item;
    }
  };
  let currentRecipe = {
    currentServing: 4,
    curRecipe: [],
    servings: [],
  };

  let recipeArray = [
    new NewRecipe(
      'Pasta with Tomato Cream Sauce',
      'The Pioneer Woman',
      'test-1.jpg',
      '23456',
      45,
      'https://www.foodnetwork.com/recipes/ree-drummond/pasta-with-tomato-cream-sauce-2532878',
      [
        new RecipeItem('1000', 'g', 'pasta'),
        new RecipeItem('1', 'cup', 'Ricotta Cheese'),
        new RecipeItem('1', 'can', 'tomatoes, whole or crushed'),
        new RecipeItem('1', 'can', 'tuna packed in olive oil'),
        new RecipeItem('4', 'tbsp', 'fresh basil, chopped or torn'),
        new RecipeItem('1', 'cup', 'grated parmesean cheese'),
      ]
    ),
    new NewRecipe(
      'Pasta Salad with tuna',
      'Spicy Perspective',
      'test-2.jpg',
      '76767',
      30,
      'https://tastesbetterfromscratch.com/tuna-pasta-salad/',
      [
        new RecipeItem('8', 'ounces', 'small shell pasta'),
        new RecipeItem(
          '7',
          'ounces',
          'canned albacore white tune, packed in water'
        ),
        new RecipeItem('2', 'ribs', 'celery'),
        new RecipeItem('100', 'g', 'red onion'),
        new RecipeItem('1', 'cup', 'green peas'),
        new RecipeItem('200', 'g', 'mayonnaise'),
        new RecipeItem('200', 'g', 'Greek yogurt'),
      ]
    ),
    new NewRecipe(
      'Homemade Tomato and beef sauce',
      'All Recipes',
      'test-3.jpg',
      '85354',
      '85354',
      75,
      'https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/',
      [
        new RecipeItem('1', 'pound', 'ground beef'),
        new RecipeItem('1', 'piece', 'onion'),
        new RecipeItem('4', 'cloves', 'garlic'),
        new RecipeItem('1', 'piece', 'small green bell pepper'),
        new RecipeItem('1', 'can', 'diced tomatoes'),
        new RecipeItem('1', 'can', 'tomato paste'),
      ]
    ),
    new NewRecipe(
      'Pasta with Tomato and pesto',
      'The Pioneer Woman',
      'test-4.jpg',
      '43563',
      30,
      'https://www.bettycrocker.com/recipes/pesto-pasta-with-chicken-and-tomatoes/0164437a-04d6-49e9-94f6-5500f91db82e',
      [
        new RecipeItem('1', 'cup', 'firmly packed basil leaves'),
        new RecipeItem('1', 'clove', 'Garlic'),
        new RecipeItem('2', 'tbsp', 'sliced almonds, toasted'),
        new RecipeItem('12', 'ounces', 'uncooked penne pasta'),
        new RecipeItem('2', 'cups', 'shredded chicken'),
        new RecipeItem('3', 'tbsp', 'grated parmasan cheese'),
      ]
    ),
    new NewRecipe(
      'Greek Pasta salad',
      'Chow',
      'test-5.jpg',
      '2256665',
      25,
      'https://www.spendwithpennies.com/easy-greek-pasta-salad/',
      [
        new RecipeItem('16', 'ounces', 'short pasta'),
        new RecipeItem('1', 'piece', 'cucumber'),
        new RecipeItem('1', 'pint', 'grapes'),
        new RecipeItem('1', 'piece', 'bell pepper'),
        new RecipeItem('1', 'cup', 'bottled greek vinaigrette'),
        new RecipeItem('1', 'tsp', 'oregano'),
      ]
    ),
    new NewRecipe(
      'Cherry tomato, kale, ricotta, and pesto pasta',
      'BBC Good Food',
      'test-9.jpg',
      '7567567',
      25,
      'https://www.bbcgoodfood.com/recipes/cherry-tomato-kale-ricotta-pesto-pasta',
      [
        new RecipeItem('2', 'tbsp', 'olive oil'),
        new RecipeItem('3', 'cloves', 'garlic, chopped'),
        new RecipeItem('800', 'g', 'cherry tomatoes'),
        new RecipeItem('500', 'g', 'penne pasta'),
        new RecipeItem('200', 'g', 'kale'),
        new RecipeItem('4', 'tbsp', 'ricotta'),
      ]
    ),
    new NewRecipe(
      'Pasta with Fresh tomato and basil sauce',
      'Chow',
      'test-7.jpg',
      '5676577',
      40,
      'https://cooking.nytimes.com/recipes/8663-spaghetti-with-fresh-tomato-and-basil-sauce',
      [
        new RecipeItem('3', 'pounds', 'fresh plum tomatoe'),
        new RecipeItem('3', 'ounces', 'olive oil'),
        new RecipeItem('1', 'pound', 'dry spaghetti'),
        new RecipeItem('1', 'tbsp', 'butter'),
        new RecipeItem('6', 'leaves', 'fresh basil'),
        new RecipeItem('2', 'tbsp', 'freshly grated parmigiano-reggiano chees'),
      ]
    ),
    new NewRecipe(
      'Pesto Pasta Salad',
      'Eats Well With Others',
      'test-10.jpg',
      '987999',
      25,
      'https://cookieandkate.com/pesto-pasta-salad-recipe/',
      [
        new RecipeItem('1', 'pound', 'whole grain pasta'),
        new RecipeItem('1', 'pint', 'cherry tomatoes'),
        new RecipeItem('1', 'pound', 'baby arugula or spinach'),
        new RecipeItem('300', 'g', 'kalamata olives'),
        new RecipeItem('1', 'can', 'chickpeas'),
        new RecipeItem('1', 'clove', 'garlic'),
        new RecipeItem('100', 'g', 'fresh basil leaves'),
      ]
    ),
    new NewRecipe(
      'Pasta with Roasted vegetables sauce',
      'Two Peas and Their Pod',
      'test-6.jpg',
      '5464646456',
      40,
      'https://www.foodnetwork.com/recipes/food-network-kitchen/roasted-vegetable-pasta-recipe-2121114',
      [
        new RecipeItem('2', 'piece', 'zucchini'),
        new RecipeItem('1', 'piece', 'asparagus'),
        new RecipeItem('3', 'tbsp', 'olive oil'),
        new RecipeItem('1', 'piece', 'small onion'),
        new RecipeItem('9', 'ounces', 'fresh linguine'),
        new RecipeItem('1', 'pound', 'pasta'),
      ]
    ),
    new NewRecipe(
      'Buttery Tomato Pasta Sauce',
      'Simply Recipes',
      'test-8.jpg',
      '98798',
      25,
      'https://www.simplyrecipes.com/recipes/buttery_tomato_pasta/',
      [
        new RecipeItem('1', 'pound', 'fusili pasta'),
        new RecipeItem('14', 'ounces', 'tomatoes'),
        new RecipeItem('2', 'tbps', 'butter'),
        new RecipeItem('2', 'tsp', 'sugar'),
        new RecipeItem('1', 'tsp', 'salt'),
        new RecipeItem('1', 'tsp', 'pepper'),
      ]
    ),
    // ==========================================================================
    // ==========================================================================
    // ==========================================================================
    // ==========================================================================
    // ==========================================================================
    new NewRecipe(
      '(copy) Pasta with Tomato Cream Sauce',
      'The Pioneer Woman',
      'test-1.jpg',
      '23456',
      45,
      'https://www.foodnetwork.com/recipes/ree-drummond/pasta-with-tomato-cream-sauce-2532878',
      [
        new RecipeItem('1000', 'g', 'pasta'),
        new RecipeItem('1', 'cup', 'Ricotta Cheese'),
        new RecipeItem('1', 'can', 'tomatoes, whole or crushed'),
        new RecipeItem('1', 'can', 'tuna packed in olive oil'),
        new RecipeItem('4', 'tbsp', 'fresh basil, chopped or torn'),
        new RecipeItem('1', 'cup', 'grated parmesean cheese'),
      ]
    ),
    new NewRecipe(
      '(copy) Pasta Salad with tuna',
      'Spicy Perspective',
      'test-2.jpg',
      '76767',
      30,
      'https://tastesbetterfromscratch.com/tuna-pasta-salad/',
      [
        new RecipeItem('8', 'ounces', 'small shell pasta'),
        new RecipeItem(
          '7',
          'ounces',
          'canned albacore white tune, packed in water'
        ),
        new RecipeItem('2', 'ribs', 'celery'),
        new RecipeItem('100', 'g', 'red onion'),
        new RecipeItem('1', 'cup', 'green peas'),
        new RecipeItem('200', 'g', 'mayonnaise'),
        new RecipeItem('200', 'g', 'Greek yogurt'),
      ]
    ),
    new NewRecipe(
      '(copy) Homemade Tomato and beef sauce',
      'All Recipes',
      'test-3.jpg',
      '85354',
      '85354',
      75,
      'https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/',
      [
        new RecipeItem('1', 'pound', 'ground beef'),
        new RecipeItem('1', 'piece', 'onion'),
        new RecipeItem('4', 'cloves', 'garlic'),
        new RecipeItem('1', 'piece', 'small green bell pepper'),
        new RecipeItem('1', 'can', 'diced tomatoes'),
        new RecipeItem('1', 'can', 'tomato paste'),
      ]
    ),
    new NewRecipe(
      '(copy) Pasta with Tomato and pesto',
      'The Pioneer Woman',
      'test-4.jpg',
      '43563',
      30,
      'https://www.bettycrocker.com/recipes/pesto-pasta-with-chicken-and-tomatoes/0164437a-04d6-49e9-94f6-5500f91db82e',
      [
        new RecipeItem('1', 'cup', 'firmly packed basil leaves'),
        new RecipeItem('1', 'clove', 'Garlic'),
        new RecipeItem('2', 'tbsp', 'sliced almonds, toasted'),
        new RecipeItem('12', 'ounces', 'uncooked penne pasta'),
        new RecipeItem('2', 'cups', 'shredded chicken'),
        new RecipeItem('3', 'tbsp', 'grated parmasan cheese'),
      ]
    ),
    new NewRecipe(
      '(copy) Greek Pasta salad',
      'Chow',
      'test-5.jpg',
      '2256665',
      25,
      'https://www.spendwithpennies.com/easy-greek-pasta-salad/',
      [
        new RecipeItem('16', 'ounces', 'short pasta'),
        new RecipeItem('1', 'piece', 'cucumber'),
        new RecipeItem('1', 'pint', 'grapes'),
        new RecipeItem('1', 'piece', 'bell pepper'),
        new RecipeItem('1', 'cup', 'bottled greek vinaigrette'),
        new RecipeItem('1', 'tsp', 'oregano'),
      ]
    ),
    new NewRecipe(
      '(copy) Cherry tomato, kale, ricotta, and pesto pasta',
      'BBC Good Food',
      'test-9.jpg',
      '7567567',
      25,
      'https://www.bbcgoodfood.com/recipes/cherry-tomato-kale-ricotta-pesto-pasta',
      [
        new RecipeItem('2', 'tbsp', 'olive oil'),
        new RecipeItem('3', 'cloves', 'garlic, chopped'),
        new RecipeItem('800', 'g', 'cherry tomatoes'),
        new RecipeItem('500', 'g', 'penne pasta'),
        new RecipeItem('200', 'g', 'kale'),
        new RecipeItem('4', 'tbsp', 'ricotta'),
      ]
    ),
    new NewRecipe(
      '(copy) Pasta with Fresh tomato and basil sauce',
      'Chow',
      'test-7.jpg',
      '5676577',
      40,
      'https://cooking.nytimes.com/recipes/8663-spaghetti-with-fresh-tomato-and-basil-sauce',
      [
        new RecipeItem('3', 'pounds', 'fresh plum tomatoe'),
        new RecipeItem('3', 'ounces', 'olive oil'),
        new RecipeItem('1', 'pound', 'dry spaghetti'),
        new RecipeItem('1', 'tbsp', 'butter'),
        new RecipeItem('6', 'leaves', 'fresh basil'),
        new RecipeItem('2', 'tbsp', 'freshly grated parmigiano-reggiano chees'),
      ]
    ),
    new NewRecipe(
      '(copy) Pesto Pasta Salad',
      'Eats Well With Others',
      'test-10.jpg',
      '987999',
      25,
      'https://cookieandkate.com/pesto-pasta-salad-recipe/',
      [
        new RecipeItem('1', 'pound', 'whole grain pasta'),
        new RecipeItem('1', 'pint', 'cherry tomatoes'),
        new RecipeItem('1', 'pound', 'baby arugula or spinach'),
        new RecipeItem('300', 'g', 'kalamata olives'),
        new RecipeItem('1', 'can', 'chickpeas'),
        new RecipeItem('1', 'clove', 'garlic'),
        new RecipeItem('100', 'g', 'fresh basil leaves'),
      ]
    ),
    new NewRecipe(
      '(copy) Pasta with Roasted vegetables sauce',
      'Two Peas and Their Pod',
      'test-6.jpg',
      '5464646456',
      40,
      'https://www.foodnetwork.com/recipes/food-network-kitchen/roasted-vegetable-pasta-recipe-2121114',
      [
        new RecipeItem('2', 'piece', 'zucchini'),
        new RecipeItem('1', 'piece', 'asparagus'),
        new RecipeItem('3', 'tbsp', 'olive oil'),
        new RecipeItem('1', 'piece', 'small onion'),
        new RecipeItem('9', 'ounces', 'fresh linguine'),
        new RecipeItem('1', 'pound', 'pasta'),
      ]
    ),
    new NewRecipe(
      '(copy) Buttery Tomato Pasta Sauce',
      'Simply Recipes',
      'test-8.jpg',
      '98798',
      25,
      'https://www.simplyrecipes.com/recipes/buttery_tomato_pasta/',
      [
        new RecipeItem('1', 'pound', 'fusili pasta'),
        new RecipeItem('14', 'ounces', 'tomatoes'),
        new RecipeItem('2', 'tbps', 'butter'),
        new RecipeItem('2', 'tsp', 'sugar'),
        new RecipeItem('1', 'tsp', 'salt'),
        new RecipeItem('1', 'tsp', 'pepper'),
      ]
    ),
    //=====================================================================>
    new NewRecipe(
      '(copy1) Pasta with Tomato Cream Sauce',
      'The Pioneer Woman',
      'test-1.jpg',
      '23456',
      45,
      'https://www.foodnetwork.com/recipes/ree-drummond/pasta-with-tomato-cream-sauce-2532878',
      [
        new RecipeItem('1000', 'g', 'pasta'),
        new RecipeItem('1', 'cup', 'Ricotta Cheese'),
        new RecipeItem('1', 'can', 'tomatoes, whole or crushed'),
        new RecipeItem('1', 'can', 'tuna packed in olive oil'),
        new RecipeItem('4', 'tbsp', 'fresh basil, chopped or torn'),
        new RecipeItem('1', 'cup', 'grated parmesean cheese'),
      ]
    ),
    new NewRecipe(
      '(copy1) Pasta Salad with tuna',
      'Spicy Perspective',
      'test-2.jpg',
      '76767',
      30,
      'https://tastesbetterfromscratch.com/tuna-pasta-salad/',
      [
        new RecipeItem('8', 'ounces', 'small shell pasta'),
        new RecipeItem(
          '7',
          'ounces',
          'canned albacore white tune, packed in water'
        ),
        new RecipeItem('2', 'ribs', 'celery'),
        new RecipeItem('100', 'g', 'red onion'),
        new RecipeItem('1', 'cup', 'green peas'),
        new RecipeItem('200', 'g', 'mayonnaise'),
        new RecipeItem('200', 'g', 'Greek yogurt'),
      ]
    ),
    new NewRecipe(
      '(copy1) Homemade Tomato and beef sauce',
      'All Recipes',
      'test-3.jpg',
      '85354',
      '85354',
      75,
      'https://www.allrecipes.com/recipe/158140/spaghetti-sauce-with-ground-beef/',
      [
        new RecipeItem('1', 'pound', 'ground beef'),
        new RecipeItem('1', 'piece', 'onion'),
        new RecipeItem('4', 'cloves', 'garlic'),
        new RecipeItem('1', 'piece', 'small green bell pepper'),
        new RecipeItem('1', 'can', 'diced tomatoes'),
        new RecipeItem('1', 'can', 'tomato paste'),
      ]
    ),
    new NewRecipe(
      '(copy1) Pasta with Tomato and pesto',
      'The Pioneer Woman',
      'test-4.jpg',
      '43563',
      30,
      'https://www.bettycrocker.com/recipes/pesto-pasta-with-chicken-and-tomatoes/0164437a-04d6-49e9-94f6-5500f91db82e',
      [
        new RecipeItem('1', 'cup', 'firmly packed basil leaves'),
        new RecipeItem('1', 'clove', 'Garlic'),
        new RecipeItem('2', 'tbsp', 'sliced almonds, toasted'),
        new RecipeItem('12', 'ounces', 'uncooked penne pasta'),
        new RecipeItem('2', 'cups', 'shredded chicken'),
        new RecipeItem('3', 'tbsp', 'grated parmasan cheese'),
      ]
    ),
    new NewRecipe(
      '(copy1) Greek Pasta salad',
      'Chow',
      'test-5.jpg',
      '2256665',
      25,
      'https://www.spendwithpennies.com/easy-greek-pasta-salad/',
      [
        new RecipeItem('16', 'ounces', 'short pasta'),
        new RecipeItem('1', 'piece', 'cucumber'),
        new RecipeItem('1', 'pint', 'grapes'),
        new RecipeItem('1', 'piece', 'bell pepper'),
        new RecipeItem('1', 'cup', 'bottled greek vinaigrette'),
        new RecipeItem('1', 'tsp', 'oregano'),
      ]
    ),
    new NewRecipe(
      '(copy1) Cherry tomato, kale, ricotta, and pesto pasta',
      'BBC Good Food',
      'test-9.jpg',
      '7567567',
      25,
      'https://www.bbcgoodfood.com/recipes/cherry-tomato-kale-ricotta-pesto-pasta',
      [
        new RecipeItem('2', 'tbsp', 'olive oil'),
        new RecipeItem('3', 'cloves', 'garlic, chopped'),
        new RecipeItem('800', 'g', 'cherry tomatoes'),
        new RecipeItem('500', 'g', 'penne pasta'),
        new RecipeItem('200', 'g', 'kale'),
        new RecipeItem('4', 'tbsp', 'ricotta'),
      ]
    ),
    new NewRecipe(
      '(copy1) Pasta with Fresh tomato and basil sauce',
      'Chow',
      'test-7.jpg',
      '5676577',
      40,
      'https://cooking.nytimes.com/recipes/8663-spaghetti-with-fresh-tomato-and-basil-sauce',
      [
        new RecipeItem('3', 'pounds', 'fresh plum tomatoe'),
        new RecipeItem('3', 'ounces', 'olive oil'),
        new RecipeItem('1', 'pound', 'dry spaghetti'),
        new RecipeItem('1', 'tbsp', 'butter'),
        new RecipeItem('6', 'leaves', 'fresh basil'),
        new RecipeItem('2', 'tbsp', 'freshly grated parmigiano-reggiano chees'),
      ]
    ),
    new NewRecipe(
      '(copy1) Pesto Pasta Salad',
      'Eats Well With Others',
      'test-10.jpg',
      '987999',
      25,
      'https://cookieandkate.com/pesto-pasta-salad-recipe/',
      [
        new RecipeItem('1', 'pound', 'whole grain pasta'),
        new RecipeItem('1', 'pint', 'cherry tomatoes'),
        new RecipeItem('1', 'pound', 'baby arugula or spinach'),
        new RecipeItem('300', 'g', 'kalamata olives'),
        new RecipeItem('1', 'can', 'chickpeas'),
        new RecipeItem('1', 'clove', 'garlic'),
        new RecipeItem('100', 'g', 'fresh basil leaves'),
      ]
    ),
    new NewRecipe(
      '(copy1) Pasta with Roasted vegetables sauce',
      'Two Peas and Their Pod',
      'test-6.jpg',
      '5464646456',
      40,
      'https://www.foodnetwork.com/recipes/food-network-kitchen/roasted-vegetable-pasta-recipe-2121114',
      [
        new RecipeItem('2', 'piece', 'zucchini'),
        new RecipeItem('1', 'piece', 'asparagus'),
        new RecipeItem('3', 'tbsp', 'olive oil'),
        new RecipeItem('1', 'piece', 'small onion'),
        new RecipeItem('9', 'ounces', 'fresh linguine'),
        new RecipeItem('1', 'pound', 'pasta'),
      ]
    ),
    new NewRecipe(
      '(copy1) Buttery Tomato Pasta Sauce',
      'Simply Recipes',
      'test-8.jpg',
      '98798',
      25,
      'https://www.simplyrecipes.com/recipes/buttery_tomato_pasta/',
      [
        new RecipeItem('1', 'pound', 'fusili pasta'),
        new RecipeItem('14', 'ounces', 'tomatoes'),
        new RecipeItem('2', 'tbps', 'butter'),
        new RecipeItem('2', 'tsp', 'sugar'),
        new RecipeItem('1', 'tsp', 'salt'),
        new RecipeItem('1', 'tsp', 'pepper'),
      ]
    ),
  ];

  let searchRecipe = (searchValue) => {
    let filteredRecipe = recipeArray.filter((el) => {
      return el.foodName.toLowerCase().includes(searchValue);
    });
    console.log(filteredRecipe);
    return filteredRecipe;
  };

  let nextBtnData = {
    useActivateBtn: false,
    useArrayLength: 1,
  };

  let htmlForResult = (filteredRecipe) => {
    let arraysResult = [],
      htmlString = ' ',
      nextPageString = ' ';
    for (let i = 0; i < filteredRecipe.length; i += 10) {
      let data = filteredRecipe.slice(i, i + 10);
      arraysResult.push(data);
    }
    console.log(arraysResult);
    arraysResult.forEach((el) => {
      let htmlString1 = el
        .map((el) => {
          let indexSpace = el.foodName.indexOf(
            ' ',
            el.foodName.indexOf(' ') + 1
          );
          let indexSpace2 = el.foodName.indexOf(' ', indexSpace + 1);
          let htmlSub = el.foodName.slice(0, indexSpace2);
          return `<li id='daniel'> <a class="results__link" id="${el.linkRecipe}" href='#random'> <figure class="results__fig"> <img src="img/${el.image}" alt="Test" /> </figure> <div class="results__data"> <h4 class="results__name">${htmlSub}...</h4> <p class="results__author">${el.author}</p> </div> </a> </li>`;
        })
        .join(' ');
      htmlString1 = `<li id='page${
        arraysResult.indexOf(el) + 1
      }'></li> ${htmlString1}`;
      // console.log(htmlString1);
      htmlString = htmlString + htmlString1;
    });

    if (arraysResult.length > 1) {
      nextPageString = `</a> <a href="#page2" id='pageBtn2'> <button class="btn-inline results__btn--next"> <span>Page 2</span> <svg class="search__icon"> <use href="img/icons.svg#icon-triangle-right"></use> </svg> </button></a>`;
      nextBtnData.useActivateBtn = true;
    }
    nextBtnData.useArrayLength = arraysResult.length;
    return {
      htmlStringUse: htmlString,
      nextPageStringUse: nextPageString,
      // activateBtnsUse: activateBtns,
      // arrayLength: arraysResult.length,
    };
  };

  let findRecipe = (idString) => {
    let recipe = recipeArray.filter((el) => {
      return el.linkRecipe.includes(idString);
    });
    return recipe;
  };

  let htmlRecipe = (recipe) => {
    const htmlStringItems = recipe.recipeItem
      .map((el) => {
        let amount;
        if (currentRecipe.currentServing === 4) {
          amount = el.amount4;
        } else if (currentRecipe.currentServing === 3) {
          amount = el.amount3;
        } else if (currentRecipe.currentServing === 2) {
          amount = el.amount2;
        } else {
          amount = el.amount1;
        }
        return ` <li class="recipe__item"> <svg class="recipe__icon"> <use href="img/icons.svg#icon-check"></use></svg><div class="recipe__count">${amount} </div>
        <div class="recipe__ingredient"><span class="recipe__unit">${el.unit} </span>
        <span class="recipe__ingredient1">${el.item}</span></div> </li>`;
      })
      .join(' ');

    let likedButton;
    if (recipe.liked === true) {
      likedButton = '#icon-heart';
    } else if (recipe.liked === false) {
      likedButton = '#icon-heart-outlined';
    }
    return ` <figure class="recipe__fig"> <img src="img/${recipe.image}" alt="Tomato" class="recipe__img" /> <h1 class="recipe__title"> <span>${recipe.foodName}</span> </h1> </figure> <div class="recipe__details"> <div class="recipe__info"> <svg class="recipe__info-icon"> <use href="img/icons.svg#icon-stopwatch"></use> </svg> <span class="recipe__info-data recipe__info-data--minutes">${recipe.timeToCook}</span> <span class="recipe__info-text"> minutes</span> </div> <div class="recipe__info"> <svg class="recipe__info-icon"> <use href="img/icons.svg#icon-man"></use> </svg> <span class="recipe__info-data recipe__info-data--people" id='recipe__info-data'>4</span> <span class="recipe__info-text"> servings</span> <div class="recipe__info-buttons"> <button class="btn-tiny" id="btn-tiny-minus"> <svg> <use href="img/icons.svg#icon-circle-with-minus"></use> </svg> </button> <button class="btn-tiny" id="btn-tiny-plus"> <svg> <use href="img/icons.svg#icon-circle-with-plus"></use> </svg> </button> </div> </div> <button class="recipe__love" id='recipe__love'> <svg class="header__likes" id='header__likes'> <use href="img/icons.svg${likedButton}"></use> </svg> </button> </div> <div class="recipe__ingredients"> <ul class="recipe__ingredient-list"> ${htmlStringItems} </ul> <button class="btn-small recipe__btn"> <svg class="search__icon"> <use href="img/icons.svg#icon-shopping-cart"></use> </svg> <span  id='recipe__btn'>Add to shopping list</span> </button> </div> <div class="recipe__directions"> <h2 class="heading-2">How to cook it</h2> <p class="recipe__directions-text"> This recipe was carefully designed and tested by <span class="recipe__by">The Pioneer Woman</span>. Please check out directions at their website. </p> <a class="btn-small recipe__btn" href="${recipe.linkDirection}" target="_blank"> <span>Directions</span> <svg class="search__icon"> <use href="img/icons.svg#icon-triangle-right"></use> </svg> </a> </div>`;
  };

  let newCurrentRecipe = (recipe) => {
    currentRecipe.curRecipe = recipe;
    currentRecipe.servings = [
      recipe[0].recipeItem.map((el) => {
        return el.amount1;
      }),
      recipe[0].recipeItem.map((el) => {
        return el.amount2;
      }),
      recipe[0].recipeItem.map((el) => {
        return el.amount3;
      }),
      recipe[0].recipeItem.map((el) => {
        return el.amount4;
      }),
    ];
  };

  let htmlShopping = () => {
    const htmlStringShopping = currentRecipe.curRecipe[0].recipeItem
      .map((el) => {
        return ` <li class="shopping__item"> <div class="shopping__count"> <input type="number" value='${el.amount4}'/> <p>${el.unit}</p> </div> <p class="shopping__description">${el.item}</p> <button class="shopping__delete btn-tiny"> <svg> <use href="img/icons.svg#icon-circle-with-cross"></use> </svg> </button> </li>`;
      })
      .join(' ');
    return htmlStringShopping;
  };
  let htmlLike = () => {
    let likedRecipe = recipeArray.filter((el) => {
      return el.liked === true;
    });
    let list = likedRecipe
      .map((el) => {
        return `<li> <a class="likes__link" href="#23456" id='${el.linkRecipe}'> <figure class="likes__fig"> <img src="img/${el.image}" alt="Test" /> </figure> <div class="likes__data"> <h4 class="likes__name">${el.foodName}</h4> <p class="likes__author">${el.author}</p> </div> </a> </li>`;
      })
      .join(' ');
    let htmlStringLiked = `<div class="likes__field"> <svg class="likes__icon"> <use href="img/icons.svg#icon-heart"></use> </svg> </div> <div class="likes__panel">  <ul class="likes__list"> ${list} </ul> </div>`;
    if (list.length === 0) {
      htmlStringLiked = `<div class="likes__field"> <svg class="likes__icon"> <use href="img/icons.svg#icon-heart"></use> </svg> </div>`;
    }
    return htmlStringLiked;
  };

  let saveLiked = () => {
    let likedRecipe = recipeArray.filter((el) => {
      return el.liked.includes(true);
    });
    console.log(likedRecipe);
  };

  let likeARecipe = () => {
    let index = recipeArray.findIndex(
      (el) => el.linkRecipe === currentRecipe.curRecipe[0].linkRecipe
    );
    if (recipeArray[index].liked === true) {
      recipeArray[index].liked = false;
    } else if (recipeArray[index].liked === false) {
      recipeArray[index].liked = true;
    }
    console.log(recipeArray[index]);
    return recipeArray[index].liked;
  };

  let incServing = () => {
    currentRecipe.currentServing += 1;
  };

  let decServing = () => {
    currentRecipe.currentServing -= 1;
  };

  return {
    useSearchRecipe: (searchInput) => {
      return searchRecipe(searchInput);
    },
    useHtmlForResult: (filteredRecipe) => {
      return htmlForResult(filteredRecipe);
    },
    useFindRecipe: (idString) => {
      return findRecipe(idString);
    },
    useHtmlRecipe: (recipe) => {
      return htmlRecipe(recipe);
    },
    useNewCurrentRecipe: (recipe) => {
      return newCurrentRecipe(recipe);
    },
    useHtmlShopping: () => {
      return htmlShopping();
    },
    useHtmlLike: () => {
      return htmlLike();
    },
    useSelectRecipe: () => {
      return NewRecipe.selectRecip();
    },
    useCurrentRecipe: () => {
      return currentRecipe;
    },
    useDecServing: () => {
      return decServing();
    },
    useIncServing: () => {
      return incServing();
    },
    useSaveliked: () => {
      return saveLiked();
    },
    useLikeARecipe: () => {
      return likeARecipe();
    },
    useNextBtnData: () => {
      return nextBtnData;
    },
    testing: () => {
      console.log(currentRecipe);
      return currentRecipe;
    },
  };
})();

//==============================================================>
//==============================================================>
//==============================================================>
//  UI control
let uiControl = (() => {
  let domStrings = {
    container: '.container',
    searchBtn: '.btn',
    resultsList: '.results__list',
    searchField: '.search__field',
    recipe: '.recipe',
    shoppingList: '.shopping__list',
    likesList: '.likes',
    amountRecipe: '.recipe__count',
    recipeLove: '.recipe__love',
    shoppingButton: '.btn-small',
    shopping: '.shopping',
    plusServing: '#btn-tiny-plus',
    minusServing: '#btn-tiny-minus',
    recipeCount: '.recipe__count',
    resultsLink: '.results__link',
    shoppingDelete: '.shopping__delete',
    recipeIng: '.recipe__ingredient1',
    recipeUnit: '.recipe__unit',
    servingNumber: '#recipe__info-data',
    likesLink: '.likes__link',
    pagesResults: '.results__pages',
  };

  let nodeListForEach = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    printSearchResult: (htmlString) => {
      document.querySelector(domStrings.resultsList).innerHTML = htmlString;
    },

    getSearchInput: () => {
      return document.querySelector(domStrings.searchField).value;
    },

    getDomStrings: () => {
      return domStrings;
    },
    printRecipe: (htmlString) => {
      document.querySelector(domStrings.recipe).innerHTML = htmlString;
    },
    printShopping: (htmlString) => {
      document
        .querySelector(domStrings.shoppingList)
        .insertAdjacentHTML('beforeend', htmlString);
    },
    printLike: (htmlString) => {
      document.querySelector(domStrings.likesList).innerHTML = htmlString;
    },
    printNewServing: (arrayServing) => {
      let nodeListForRecipe = document.querySelectorAll(domStrings.recipeCount);
      nodeListForEach(nodeListForRecipe, function (current, index) {
        current.textContent = arrayServing[index];
      });
    },
    printServingNumber: (number) => {
      document.querySelector(domStrings.servingNumber).textContent = number + 1;
    },
    nextPageeBtn: (string) => {
      document.querySelector(domStrings.pagesResults).innerHTML = string;
    },
    printPageBtns: (idNumber, length, pageNumber) => {
      let htmlString1, htmlString2;
      if (pageNumber === 1) {
        htmlString2 = ' ';
        htmlString1 = `</a> <a href="#page2" id='pageBtn2'> <button class="btn-inline results__btn--next"> <span>Page 2</span> <svg class="search__icon"> <use href="img/icons.svg#icon-triangle-right"></use> </svg> </button></a>`;
      } else if (pageNumber === length) {
        htmlString1 = `<a href="#page${length - 1}" id='pageBtn${
          length - 1
        }'> <button class="btn-inline results__btn--prev"> <span>Page ${
          length - 1
        }</span> <svg class="search__icon"> <use href="img/icons.svg#icon-triangle-left"></use> </svg>
              </button> </a>`;
        htmlString2 = ' ';
      } else {
        htmlString1 = `<a href="#page${idNumber - 1}" id='pageBtn${
          idNumber - 1
        }'> <button class="btn-inline results__btn--prev"> <span>Page ${
          idNumber - 1
        }</span> <svg class="search__icon"> <use href="img/icons.svg#icon-triangle-left"></use> </svg>
            </button> </a>`;
        htmlString2 = `<a href="#page${idNumber + 1}" id='pageBtn${
          idNumber + 1
        }'> <button class="btn-inline results__btn--next"> <span>Page ${
          idNumber + 1
        }</span> <svg class="search__icon"> <use href="img/icons.svg#icon-triangle-right"></use> </svg>
            </button> </a>`;
      }
      console.log(htmlString1 + htmlString2);
      document.querySelector(domStrings.pagesResults).innerHTML =
        htmlString1 + htmlString2;
    },
    changeLikeBtn: (argument) => {
      console.log('here');
      if (argument === false) {
        document.querySelector('.header__likes').innerHTML =
          '<use href="img/icons.svg#icon-heart-outlined"></use>';
      } else if (argument === true) {
        document.querySelector('.header__likes').innerHTML =
          '<use href="img/icons.svg#icon-heart"></use>';
      }
    },
  };
})();

//==============================================================>
//==============================================================>
//==============================================================>
// GLOBAL APP CONTROLLER
let control = ((uiControl, dataControl) => {
  let domStrings = uiControl.getDomStrings();
  let setupEventListeners = () => {
    document
      .querySelector(domStrings.searchBtn)
      .addEventListener('click', searchItem);
    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        searchItem();
      }
    });

    selectRecipe();
  };

  let eventListeners2 = () => {
    document
      .querySelector(domStrings.recipeLove)
      .addEventListener('click', loveButton, true);
    document
      .querySelector(domStrings.shoppingButton)
      .addEventListener('click', shoppingListButton, true);
    document
      .querySelector(domStrings.minusServing)
      .addEventListener('click', changeServing, true);
    document
      .querySelector(domStrings.plusServing)
      .addEventListener('click', changeServing, true);
  };

  // let evenListenerLikeBtn = () => {
  //   document
  //     .querySelector(domStrings.likesLink)
  //     .addEventListener('click', displayRecipe, true);
  // };

  let selectRecipe = () => {
    let resultsLink = document.querySelectorAll(domStrings.resultsLink);
    for (let i = 0; i < resultsLink.length; i++) {
      resultsLink[i].addEventListener('click', displayRecipe);
    }
  };

  let selectLiked = () => {
    let likes = document.querySelectorAll(domStrings.likesLink);
    for (let i = 0; i < likes.length; i++) {
      likes[i].addEventListener('click', displayRecipe, true);
    }
  };

  let eventDeleteShopItem = () => {
    let deleteBtns = document.querySelectorAll(domStrings.shoppingDelete);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener('click', deleteShoppingItem);
    }
  };

  let searchItem = () => {
    let searchInput = uiControl.getSearchInput().toLowerCase();
    let filteredResult = dataControl.useSearchRecipe(searchInput);
    let dataUseHtmlForResult = dataControl.useHtmlForResult(filteredResult);
    let htmlString = dataUseHtmlForResult.htmlStringUse;
    let nextPageString = dataUseHtmlForResult.nextPageStringUse;
    uiControl.printSearchResult(htmlString);
    uiControl.nextPageeBtn(nextPageString);
    // nextBtnPage(argument, dataUseHtmlForResult.arrayLength);
    evenListenerNextPage();
    selectRecipe();
  };

  let displayRecipe = (e) => {
    let selectedRecipe = e.currentTarget.id;
    let recipe = dataControl.useFindRecipe(selectedRecipe);
    let htmlString = dataControl.useHtmlRecipe(recipe[0]);
    dataControl.useNewCurrentRecipe(recipe);
    uiControl.printRecipe(htmlString);
    eventListeners2();
  };

  let loveButton = () => {
    let trueOrFalse = dataControl.useLikeARecipe();
    let htmlString = dataControl.useHtmlLike();
    console.log(trueOrFalse);
    uiControl.printLike(htmlString);
    uiControl.changeLikeBtn(trueOrFalse);
    // evenListenerLikeBtn();
    selectLiked();
  };

  let shoppingListButton = () => {
    let htmlString = dataControl.useHtmlShopping();
    uiControl.printShopping(htmlString);
    // uiControl.usePrintToShopping();
    eventDeleteShopItem();
  };

  let deleteShoppingItem = (e) => {
    let currentTarget = e.currentTarget.parentNode;
    currentTarget.remove();
  };

  let changeServing = (e) => {
    let currentTarget, numServing, currentAmount;
    currentTarget = e.currentTarget.id;
    numServing = dataControl.useCurrentRecipe().currentServing;
    if (currentTarget === 'btn-tiny-plus' && numServing < 3) {
      dataControl.useIncServing();
    } else if (currentTarget === 'btn-tiny-minus' && numServing !== 0) {
      dataControl.useDecServing();
    }
    numServing = dataControl.useCurrentRecipe().currentServing;
    currentAmount = dataControl.useCurrentRecipe().servings[numServing];
    uiControl.printNewServing(currentAmount);
    uiControl.printServingNumber(numServing);
  };

  let evenListenerNextPage = () => {
    if (dataControl.useNextBtnData().useActivateBtn === true) {
      console.log('jose');
      document
        .querySelector(domStrings.pagesResults)
        .addEventListener('click', nextBtnPage, true);
    }
  };

  let nextBtnPage = (e) => {
    console.log(e.target);
    let idName, array, idNumber, length, pageIdentifier, pageArray, pageNumber;
    length = dataControl.useNextBtnData().useArrayLength;
    idName = document.querySelector(domStrings.pagesResults).children[0].id;
    pageIdentifier = e.target.textContent;
    pageArray = pageIdentifier.split(' ');
    pageNumber = parseInt(pageArray[1]);
    console.log(pageNumber);
    array = idName.split('n');
    idNumber = parseInt(array[1]);

    uiControl.printPageBtns(idNumber, length, pageNumber);
    evenListenerNextPage();
  };

  return {
    init: () => {
      setupEventListeners();
    },
  };
})(uiControl, dataControl);

control.init();
