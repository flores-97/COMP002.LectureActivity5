myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {
    myAverage += myGrades[i];
    }

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

/*
The loop statement was 'let i = 1; i <= myGrades.length; i++' but had to be 'let i = 0; i < myGrades.length; i++' because using the number 1 would skip 
over the grade "100" that is under the zero value [0]. With the original value the output would be NaN because the conditions would attempt to access values outside the array.  
*/