## Wanted your take on a function

#### So I came up with this function as part of the Intro to JS project I just finished for class, using the simple dataset given as one of the components to the project. I-- utterly sleep deprived-- somehow managed to concoct this function that restructures an array of objects around a given nested key.

### 1. While iterating, if it comes across the first instance of a value to a given key, push that value to a unique values array
### 2. Use .indexOf as the fulcrum of an if/else statement--
### 3. If first instance, push remaining relevant key-values to a new object as key-valuesArray, object headed by the main key-value you're sorting by, then push new object to new array
### 4. Else, look in new array using array[indexOfConst] to find the object with the correct main key-value, then push that way

#### What I am very interested to hear from you, is if there are more efficient ways to do that same type of thing. I can definitely see how-- and also, because this is the type of thing we were doing with MerchyMe-- can see how this type of function could be quite useful down the line. I'm eternally interested in learning the best & least verbose practices/methods to solve coding challenges, even more so if they're likely to be reproduced in a work environment.

#### I'm going to refactor this so I can pass a desired key as a parameter to function instead of hard-coding the one I want. I'm either too tired or too new to envision with clarity whether it could be done/would be worth the time to open up the versatility of such a function to search thru differently-structured combinations of objects and arrays, and of different lengths of nesting. I am rather fond of creating code snippets.


#### ALSO, in the project I played around with something I'd seen you do for MerchyMe, using try/catches to append errors to an in-function error log, 'cause that seems cool and good. So thank you for that tidbit too.