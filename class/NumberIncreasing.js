// demo;
/* multiply the number by 3
increase the number by 5 
and it should match the number; 

*/

function Match (n){
    if(n == 1) return true; 

    for(let i = 0; i < n; i++){
        if(i * 3 == n || i + 5 == n) return true; 
    }
    return false; 
}; 

console.log(Match(5)); // true