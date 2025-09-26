function strRev(str)
{
    let reverse="";

    for (let i = str.length-1; i>=0; i--)
    {
        reverse=reverse+str[i];

    }
    return reverse;
    
       
    
}
console.log("Reverse of given string is "+strRev("TestLeaf"));