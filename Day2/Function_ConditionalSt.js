
launchBrowser("Firefox");
runTests("smoke");


function launchBrowser(browserName) {
    if (browserName==='Chrome'){
        console.log("Launching ChromeBrowser");
        
    }else {
        console.log("Launching other than Chrome Browser");        
        
    }    
}
function runTests(testType) {
    switch (testType) {
        case 'smoke':
            console.log("smoke testing");            
            break;
        case 'sanity':
            console.log("sanity testing");
            break;
        case 'regression':
            console.log("regression testing");
            break;    
        default:
            console.log("Functional testing");
            break;
    }

}

