function getgrade(marks){
    if(marks >= 90){
        return "A";
    }
    else if (marks >= 75){
        return "B";
    }
    else if(marks >= 50){
        return "c";
    }
    else {
        return "Fail";
    }
}

let grade=getgrade(65);
console.log(" Your Grade is:" ,grade);
