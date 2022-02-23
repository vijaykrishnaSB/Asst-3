// 1) For the given JSON iterate all FOR lOOP(for, for in, for of, foreach) ?

// For Loop 

n = 5;

for (let i = 1; i <= n; i++) {
    console.log(i);
}




// For in Loop


 string = "vijay";

for (let i in string) {
    console.log(string[i]);
}


// For of lOOP


 string = "vijay";

for (let i of string) {
    console.log(i);
}


// Foreach Loop 


getnum = [4, 5, 6, 8];
copynum = [];

getnum.forEach(function(num){
    copynum.push(num);
})
console.log(copynum);


