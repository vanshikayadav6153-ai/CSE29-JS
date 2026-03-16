function calculateresult(){
    let n=document.getElementById("subjects").value;
    let i;
   let total =0;
    for(i=0;i<n;i++){

        let x =parseFloat(prompt("enter the marks of  subject"+(i+1)));
total+=x;

    }

    let avarage=total/n;
    if(avarage >=90)
        grade=A+1;


    else if (average >= 75) {
        grade = "A";
    } 
    else if (average >= 60) {
        grade = "B";
    } 
    else if (average >= 50) {
        grade = "C";
    } 
    else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average + "<br>" +
        "Grade: " + grade;
}


<h1>Grade Calculator</h1>

<form>
    Number of Subjects:
    <input type="number" id="subjects">
</form>

<br>

<button onclick="calculateResult()">Calculate Result</button>

<br><br>

<div id="result"></div>

</body>
</html>

    else{

    }

 let result=document.getElementById("result").innerHTML="total marks"+total+"<br/>"+"avarage marks:"+avarage+"<br/>"+"grade:"+grade;

 
