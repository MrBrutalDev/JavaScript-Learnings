// this is a function without name wrapped inside parantheses which calls itself must used semicolon after it
// IIFE - imediately invoked functions expression

(function(){})(); //syntax

// IIFE is used for 2 reasons first to execute immediately and secondly to  not pollute global scope variables

(function(){
    console.log( "IIFE is here");
})();

// using arrow function

((name)=>{console.log('${name}, welcome by iife fx')
})("Nitesh");  //pass argument inside executing parantheses
