function computePrelim(){
    // if the textfield are empty there will be an alert that the user must input all necessary data
    if(document.getElementById("assignmentPrelim").value=="" || document.getElementById("quizPrelim").value=="" ||
    document.getElementById("activityPrelim").value=="" || document.getElementById("examPrelim").value==""){
        alert("Input all necessary data");
    } else{ // else if all the text fields have inputted data
        // passing the value in text field into a variable
        value1= parseInt(document.getElementById("assignmentPrelim").value);
        value2= parseInt(document.getElementById("quizPrelim").value);
        value3= parseInt(document.getElementById("activityPrelim").value);
        value4= parseInt(document.getElementById("examPrelim").value);
    
        // formulas
        quizValue = value2 * 0.6;
        assignmentValue = value1 * 0.2;
        activityValue = value3 * 0.2;
        examValue = value4 * 0.5;
    
        CS = (quizValue + assignmentValue + activityValue);
        PG = (CS * 0.5) + examValue;
    
        document.getElementById("standingPrelim").value = CS;
        document.getElementById("gradePrelim").value = PG;
        
        // storing the prelim grade in the local storage
        localStorage.setItem("keyPrelim",PG)

        // printing the prelim grade in the console
        console.log("Prelim Grade: "+localStorage.getItem("keyPrelim"));
    }
}

function computeMidterm(){
    // if the user did not compute his/her prelim grade, the system will not compute the midterm grade.
    if(localStorage.getItem("keyPrelim")==undefined){ 
        alert("Compute your Prelim Grade first!");
     // if the textfield are empty there will be an alert that the user must input all necessary data
    } else if (document.getElementById("assignmentMidterm").value =="" || document.getElementById("quizMidterm").value=="" ||
    document.getElementById("activityMidterm").value =="" || document.getElementById("examMidterm").value==""){
        alert("Input all necessary data");
    } else{// else if all the text fields have inputted data
        // passing the value in text field into a variable
        value1= parseInt(document.getElementById("assignmentMidterm").value);
        value2= parseInt(document.getElementById("quizMidterm").value);
        value3= parseInt(document.getElementById("activityMidterm").value);
        value4= parseInt(document.getElementById("examMidterm").value);
    
        // formulas
        quizValue = value2 * 0.6;
        assignmentValue = value1 * 0.2;
        activityValue = value3 * 0.2;
        examValue = value4 * 0.5;
        prelimGrade = localStorage.getItem("keyPrelim");
    
        CS = (quizValue + assignmentValue + activityValue);
        TMG = (CS * 0.5) + examValue;
        MG = (1/3 * prelimGrade) + (2/3 * TMG);

        document.getElementById("standingMidterm").value = CS;
        document.getElementById("gradeMidterm").value = MG;

        // storing the midterm grade in the local storage
        localStorage.setItem("keyMidterm",MG)

        // printing the prelim grade and midterm grade in the console
        console.log("Prelim Grade: "+localStorage.getItem("keyPrelim"));
        console.log("Midterm Grade: " + localStorage.getItem("keyMidterm"));
    } 	
}


function computeFinal(){
    // if the user did not compute his/her prelim grade, the system will not compute the final grade.
    if(localStorage.getItem("keyPrelim")==undefined){ 
        alert("Compute your Prelim Grade first!");
    // if the user did not compute his/her midterm grade, the system will not compute the final grade.    
    } else if(localStorage.getItem("keyMidterm")==undefined){
        alert("Compute your Midterm Grade first!");
    // if the textfield are empty there will be an alert that the user must input all necessary data    
    } else if (document.getElementById("assignmentFinal").value=="" || document.getElementById("quizFinal").value=="" || 
    document.getElementById("activityFinal").value=="" || document.getElementById("examFinal").value==""){
        alert("Input all necessary data");
    } else{// else if all the text fields have inputted data
        // passing the value in text field into a variable
        value1= parseInt(document.getElementById("assignmentFinal").value);
        value2= parseInt(document.getElementById("quizFinal").value);
        value3= parseInt(document.getElementById("activityFinal").value);
        value4= parseInt(document.getElementById("examFinal").value);

        // formulas
        quizValue = value2 * 0.6;
        assignmentValue = value1 * 0.2;
        activityValue = value3 * 0.2;
        examValue = value4 * 0.5;
        midtermGrade=localStorage.getItem("keyMidterm");

        CS = (quizValue + assignmentValue + activityValue);
        TFG = (CS * 0.5) + examValue;
        FG = (1/3 * midtermGrade) + (2/3 * TFG);

        document.getElementById("standingFinal").value = CS;
        document.getElementById("gradeFinal").value = FG;

        // printing the prelim grade,midterm grade, final grade in the console
        console.log("Prelim Grade: " + localStorage.getItem("keyPrelim"));
        console.log("Midterm Grade: " + localStorage.getItem("keyMidterm"));
        console.log("Final Grade: " + FG);
    }	
}

// when the user click the reset button in the prelim web page, the datas of that page will be deleted in the local storage.
function deleteLocalPrelim(){
	localStorage.removeItem("keyPrelim"); 
}

// when the user click the reset button in the midterm web page, the datas of that page will be deleted in the local storage.
function deleteLocalMid(){
	localStorage.removeItem("keyMidterm"); 	
}



