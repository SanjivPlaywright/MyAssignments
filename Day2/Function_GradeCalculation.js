
let Grade;
getStudentGrade(74);

function getStudentGrade(score) {

    switch (true) {
        case (score>=90):
            Grade='A'; 
            console.log("Grade A");
                       
            break;

        case (score>=75 && score<90):
            Grade='B';
            console.log("Grade B");          

            break;
    
        default:
            Grade='F';
            console.log("Fail");
            
            break;
    }
    
}