const a = [2,6,2,3,2,2];
let count=0;

for(let i=0;i<a.length;i++){
    if(a[i] === 2){
        count++;
    }
}
console.log("Occurence of '2' in the array is:"+count);