/*myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {
    myAverage += myGrades[i];
    }

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);


The loop statement was 'let i = 1; i <= myGrades.length; i++' but had to be 'let i = 0; i < myGrades.length; i++' because using the number 1 would skip 
over the grade "100" that is under the zero value [0]. With the original value the output would be NaN because the conditions would attempt to access values outside the array.  
*/

function checkNumber(score){
    if (typeof score !== 'number'){
        throw new TypeError('Invalid entry. Please try using a number between 0-100.');
    }
    if (score < 0 || score > 100){
        throw new OutRange(score);
    }
    console.log(score + ' is accepted!');
}

try{
    checkNumber(10);
    checkNumber(0);
    checkNumber(101);
    checkNumber(-50);
    checkNumber('hello');
}catch (error){
    console.log('Invalid entry. Please enter score between 0-100.');
}