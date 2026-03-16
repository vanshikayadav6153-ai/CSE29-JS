function calculateResult(){

let n = parseInt(document.getElementById("subjects").value);

let total = 0;

for(let i = 0; i < n; i++){

let marks = parseFloat(prompt("Enter marks for subject " + (i+1)));

total = total + marks;

}

let average = total / n;

alert("Total Marks = " + total + "\nAverage Marks = " + average);

}