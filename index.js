'use strict';

// YOU KNOW WHAT TO DO //

// /**
//  * each: Designed to loop over a collection, Array or Object, and applies the 
//  * action Function to each value in the collection.
//  * 
//  * @param { Array or Object } collection: The collection over which to iterate.
//  * @param { Function } action: The Function to be applied to each value in the 
//  * collection
//  */
// function each(collection, action) {
//     if(Array.isArray(collection)) {
//         for(var i = 0; i < collection.length; i++) {
//             action(collection[i], i, collection);
//         }
//     } else {
//         for (var key in collection) {
//             action(collection[key], key, collection);
//         }
//     }
// }
// module.exports.each = each;

/**
 * identity: Function takes in an input value and returns it unchanged.
 * 
 * @param { Value }: Function takes in any input value.
 * @return { Value }: Function returns input value unchanged.
 */

 function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to determine the type of a given value taken as an argument.
 * 
 * @param { Value }: Function takes any input value to determine it's type.
 * @return { String }: Function returns string of input value's datatype.
 */

function typeOf(value){
    if (Array.isArray(value)){
        return 'array';
    } else if (value === null){
        return 'null';
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to determine if we are given an array and a number. 
 * If an array is not given we return an empty array, if a number is not 
 * given we return the first element of the given array. If they are both 
 * given we return every element of the array up to the given number index 
 * or an empty array if number is negative.
 * 
 * @param { Array }: Function takes an array.
 * @param { Number }: Funciton takes a number to determine what part of the array to return.
 * @return { Array }: Function returns an empty array if no array is given or if num is negative. Returns first element of array if no num is given. Returns every elemnt of the array up to the given number index if array and num are provided.
 */

function first(array, num){
        if (!Array.isArray(array)){
            return [];
        } else if (!num){
            return array[0];
        } else {
             if (num > 0){
                return array.slice(0, num);
             } else if (num < 0){
                return [];
             }
        }
    }
module.exports.first = first;

/**
 * last: Designed to determine if we are given an array and a number. 
 * If an array is not given we return an empty array, if a number is not 
 * given we return the last element of the given array. If they are both 
 * given we return every element of the array from the end to the given 
 * number index or an empty array if number is negative.
 * 
 * @param { Array }: Function takes an array.
 * @param { Number }: Function takes a number to determine what part of the arrya to return.
 * @return { Array }: Function returns an empty array if no array is given of if num is negative. Returns last element of array if no num is given. Returns every element from the end to the given num if both num and aray are provided.
 */

function last(array, num){
    if (!Array.isArray(array)){
        return [];
    } else if (!num){
        return array[array.length - 1];
    } else {
        if (num > array.length){
            return array;
        } else if (num > 0){
            return array.slice(-num);
         } else if (num < 0){
            return [];
         }
    }
}
 
        
module.exports.last = last;

/**
 * indexOf: Designed to iterate over a given array and determine if a 
 * given value is in a given array and if it is return it's index. If 
 * it's not return -1.
 * 
 * @param { Array }: Function takes an array to iterate over.
 * @param { Value }: Function takes a value to determine if it's in the given array.
 * @return { Number }: Function returns 1 if value is located in array. Returns -1 if value is not located in array.
 */

function indexOf(array, value){
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to iterate over a given array and determine if a given value is in it.
 * 
 * @param { Array }: Funciton takes an array to iterate over.
 * @param { Value }: Function takes value to determine if it's in the array.
 * @return { Boolean }: Function returns true in value is contained in array. Returns false if value is not contained in array.
 */

function contains(array, value){
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
    return false;
}
module.exports.contains = contains;

/**
 * each: Designed to determine if given collection is an array or an object
 * and then iterate over collection and call a func for each element/property
 * 
 * @param { Array or Object }: collection: Function takes an array or an object to iterate over.
 * @param { Function }: Function takes a function to call on each iteration.
 */

function each(collection, func){
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection){
            func(collection[key], key, collection)
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to iterate over an array and return a new array without any
 * duplicates.
 * 
 * @param { Array }: Function takes an array to iterate over.
 * @return { Array }: Function returns a new array with no duplicates.
 */

function unique(array){
    var myArray = [];
    for (var i = 0; i < array.length; i++){
        if (_.indexOf(myArray, array[i]) === -1) {
            myArray.push(array[i]);
        }
    }
    return myArray;
}
module.exports.unique = unique;

/**
 * filter: Designed to iterate over an array and call a function for each element returning
 * a new array with the elements that return true.
 * 
 * @param { Array }: Function takes an array to iterate over.
 * @param { Function }: Function takes a function to call on each element.
 * @return { Array }: Function returns a new array with only elements that return true after being passed through the given function.
 */

function filter(array, func){
    var myArray = [];
    for (var i = 0; i < array.length; i++){
        if (func(array[i], i, array)){
            myArray.push(array[i])
        };
    }
    return myArray;
}
module.exports.filter = filter;

/**
 * reject: Designed to iterate over an array and call a function for each element returning
 * a new array with the elements that don't return true.
 * 
 * @param { Array }: Function takes an array to iterate over.
 * @param { Function }: Function takes a function to call on each element.
 * @return { Array }: Function returns a new array with elements that don't return true after being passed through the given function.
 */

function reject(array, func){
    var myArray = [];
    for (var i = 0; i < array.length; i++){
        if (!func(array[i], i, array)){
            myArray.push(array[i])
        }
    }
    return myArray;
}
module.exports.reject = reject;

/**
 * partition: Designed to iterate through an array and call a function for each element returning
 * a new array with two sub-arrays. If the function returns truthy push element to first array
 * and if falsey push element to second array.
 * 
 * @param { Array }: Function takes an array to iterate over.
 * @param { Function }: Function takes a function to call on each element.
 * @return { Array }: Function returns a new array of arrays with one being the true value of passing the given arrays element through the given function and the other array with the elements that returned false.
 */

function partition(array, func){
    var myArray = [[],[]];
    for (var i = 0; i < array.length; i++){
        if (func(array[i], i, array)) {
            myArray[0].push(array[i])
        } else {
            myArray[1].push(array[i])
        }
    }
    return myArray;
}
module.exports.partition = partition;

/**
 * map: Designed to determine if given collection is an array or object and then iterate over
 * that collection. Returns a new array with the results of calling given function on each
 * collection element.
 * 
 * @param { Array or Object } collection: Function takes an array or object to iterate over.
 * @param { Function }: Function takes a function to call on each element.
 * @return { Array }: Function returns a new array with the results of calling the given function on each collection element.
 */

function map(collection, func){
    var myArray = [];
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            myArray.push(func(collection[i], i, collection))            
        }
    } else {
        for (var key in collection) {
            myArray.push(func(collection[key], key, collection))
        }
    }
    return myArray;
}
module.exports.map = map;

/**
 * pluck: Designed to return the value of a given property for each object in an array.
 * 
 * @param { Array of objects }: Function takes an array of objects to iterate over.
 * @param { Property }: Function takes a property to return it's values from array of objects.
 * @return { Array }: Function returns the value at the given property for each object in the given array in an array.
 */

function pluck(array, property) {
    return _.map(array, function(e){
        return e[property];
    })
}
module.exports.pluck = pluck;

/**
 * every: Designed to determine if given collection is an array or object. Iterates over collection
 * and returns false if every element does not return true after being called in the given function
 * Returns true if all function calls are true.
 * @param { Array or Object } collection: Function takes an array or object to iterate over.
 * @param { Function }: Function takes a function to call on each element.
 * @return { Boolean }: Function returns false if every element/property of the given array/object does not return true when passed through the given function. Returns true if ALL array/object elements/properties return true when being passed through the given funciton.
 */

function every(collection, func){
    if (func === undefined){
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (!collection[i]){
                    return false
                }
            }
        } else {
            for (var key in collection){
                if (!collection[key]){
                    return false;
                }
            }
        }
    }
    if (func){
        if (Array.isArray(collection)){ 
            for (let i = 0; i < collection.length; i++){
                if (func(collection[i], i, collection) === false){
                    return false;
                }
            }
        } else {
            for (var key in collection){
                if (func(collection[key], key, collection) === false){
                    return false;
                }
            }
        }
    }
    return true;
}
module.exports.every = every;

/**
 * some: Designed to determine if given collection is an array or object. Iterates over collection
 * and calls given function on each element. Determines if ANY function call returns true and returns true.
 * Returns falls if NO function calls return true
 * 
 * @param { Array or Object } collection: Function takes an array or object to iterate over.
 * @param { Function }: Function takes a function to call on each element.
 * @return { Boolean }: Returns true if ANY element/property returns true when passed through the given function. Returns false if NO function call returns true.
 */

function some(collection, func){
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            if (func === undefined) {
                if (collection[i]){
                    return true;
                }
            } else {
                if (func(collection[i], i, collection)){
                    return true;
                }
            }
        }
    } else {
        for (var key in collection){
            if (func === undefined){
                if (collection[key]){
                    return true;
                }
            } else {
                if (func(collection[key], key, collection)){
                    return true;
                }
            }
        }
    }
    return false;
}
module.exports.some = some;

/**
 * reduce: Designed to iterate through an array and call a function on every element starting at the given seed.
 * Store the result of the function call and use it in the next function call returning the final result at the end
 * following the complete iteration of the array.
 * 
 * @param { Array }: Function takes an array to iterate over.
 * @param { Function }: Function takes a function to call on each element.
 * @param { Seed }: Function takes an optional seed that determines the starting 'result' of the given function.
 * @return { Any Datatype }: Function will return single result after running a function on every element of an array and re-injecting the result of the function call back into the function for the next function call.
 */

function reduce(array, func, seed){
    var result;
    if (seed === undefined){
        result = array[0];
        for(var i = 1; i < array.length; i++){
            result = func(result, array[i], i, array);
        }
    } else {
        result = seed;
        for (var i = 0; i < array.length; i++){
            result = func(result, array[i], i, array);
        }
    }
    return result;
}
module.exports.reduce = reduce;

/** extend: Designed to copy properties of an indefinite number of given objects to the first given object.
 * 
 * @param { Object }: Function takes an object that will receive copies of other given objects
 * @param { Object }: Function takes another object to copy to first object.
 * @param { Object } ...object: Function takes an indefinite number of object to copy to first objcet.
 * @return { Object }: Function returns first object given with all of the properties of every other given object.
*/

function extend(object1, object2, ...object3){
    Object.assign(object1, object2, ...object3);
    return object1;
}
module.exports.extend = extend;