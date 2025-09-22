function numbertype(given_num) {
if (typeof given_num !== 'number') {
    console.log("Invalid input");
}

    if(given_num>0){
        console.log("The given number is positive");
    }else if(given_num<0){
        console.log("The given number is negative");
    }else if(given_num===0){
        console.log("The given number is zero")
    }
}
numbertype(-21);