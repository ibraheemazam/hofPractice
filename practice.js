// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function (element) {
    if (element % 5 === 0) {
      count ++;
    }
  });
  return count;

};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var result = _.filter(fruits, function (fruit) {
    return fruit === targetFruit;
  });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var result = _.filter(fruits, function (fruit) {
    return fruit[0] === letter;
  });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    return dessert['type'] === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var total = _.reduce(products, function(memo, num) {
    var curPrice = parseFloat(num.price.substring(1));
    return memo + curPrice;
  }, 0);
  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  // create result object
  // iterate through object
  var result = _.reduce(desserts, function (acc, cur) {
    acc[cur.type] = acc[cur.type] + 1 || 1;
    return acc;
  }, {});
  return result;

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
/*
I: array of movie objects
O: array of movies that came out from 90 - 2000
C: have to use reduce, should create new array
E:

var movies = [
  {
    title: 'Back to the Future',
    releaseYear: 1985,
    rating: 8.5,
    genre: ['Adventure', 'Comedy', 'Sci-fi'],
    runtime: 116
  },
  {
    title: 'Star Wars',
    releaseYear: 1977,
    rating: 8.6,
    genre: ['Action', 'Adventure', 'Fantasy'],
    runtime: 121
  },

*/
var ninetiesKid = function(movies) {
  var result = _.reduce(movies, function (arr, movie) {
    if (movie.releaseYear <= 2000 && movie.releaseYear >= 1990) {
      arr.push(movie.title);
    }
    return arr;
  }, []);
  return result;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
/*
I: array of movie objects, timelimit (integer)
O: single boolean if there ia a movie with shorter runtime than limit
C: should not create new array, should not use for loop
E:

start with boolean equal to false
iterate through movie objects
  if time is less than limit
    change boolean to true
return boolean
*/
var movieNight = function(movies, timeLimit) {
  var result = _.reduce(movies, function (bool, movie) {
    if (movie.runtime < timeLimit) {
      bool = true;
    }
    return bool;
  }, false);
  return result;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
/*
I: array of strings
O: array of strings with all uppercase letters
C:
*/
var upperCaseFruits = function(fruits) {
  var upper = _.map(fruits, function(fruit, index) {
    return fruit.toUpperCase();
  });
  return upper;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
/*
I: array of dessert objects
O: array of objects with 'glutenFree' property which is boolean. (doesnt have flour)
C:
E:
var desserts = [
  {
    name: 'Chocolate Cake',
    ingredients: ['cocoa', 'flour', 'sugar', 'eggs', 'milk', 'butter' ],
    type: 'cake'
  },
  {
    name: 'Snickerdoodles',
    ingredients: ['flour', 'milk', 'butter', 'eggs', 'sugar', 'cinnamon', 'cream of tartar'],
    type: 'cookie'
  },
*/
var glutenFree = function(desserts) {
  var result = _.map(desserts, function (dessert) {
    if (dessert.ingredients.includes('flour')) {
      dessert.glutenFree = false;
    } else {
      dessert.glutenFree = true;
    }
    return dessert;
  });
  return result;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];
var groceries = [
  {
    id: 1,
    product: 'Olive Oil',
    price: '$' + 12.1
  },
  {
    id: 2,
    product: 'Tomato Soup',
    price: '$' + 3.48
  },
*/
var applyCoupon = function(groceries, coupon) {
  var result = _.map(groceries, function(item) {
    var salePrice = parseFloat(item.price.substring(1)) * (1 - coupon);
    salePrice = Math.round(salePrice * 100) / 100;
    item.salePrice = '$' + salePrice;
    return item;
  });
  console.log(result);
  return result;
};
