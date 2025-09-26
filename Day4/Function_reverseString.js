let originalstr="TestLeaf";
function reverseString() {
    
    let stringReverse=originalstr.split("");
    let reverseoutput="";

    
    for (let i = stringReverse.length-1; i>=0; i--) {
        reverseoutput = reverseoutput+stringReverse[i];
           
        
    }
    return reverseoutput;
    
}
console.log("The reverse output will be "+reverseString());