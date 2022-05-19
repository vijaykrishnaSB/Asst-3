// 1) For the given JSON iterate all FOR lOOP(for, for in, for of, foreach) ?

var json = [{
    "id" : "vijay1", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "mail@gmail.com"
},
{
    "id" : "vijay2", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "mail@gmail.com"
}];



//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);
}




//for Each
json.forEach(function(obj) { console.log(obj.msg); });





//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
}
}




//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);

