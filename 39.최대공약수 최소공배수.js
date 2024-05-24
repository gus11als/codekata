function solution(n, m) {
   function gcd(a,b){
       while (b !==0){
           let temp = b;
           b = a %b;
           a = temp;
       }
       return a;
   
    
}

function lcm(a,b, gcdValue){
    return (a*b)/gcdValue;
}

let gcdValue = gcd(n,m);
let lcmValue = lcm(n,m,gcdValue);

return [gcdValue, lcmValue];
}