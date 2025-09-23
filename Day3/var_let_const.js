const browserName="Chrome";

function getBrowserName(browserName) {
    
    if (browserName === "Chrome") {
        
        let browserName = "Chrome add"
        console.log("BrowserName inside the block is "+browserName);
        
       
    }
    console.log("BrowserName outside the block is "+browserName);
}

console.log("BrowserName out of function block is "+browserName);

getBrowserName(browserName);
