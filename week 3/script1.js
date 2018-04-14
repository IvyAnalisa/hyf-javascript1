//1.Strings!//
let myString = "hello, this, is , a difficult, to read, sentence";
console.log(myString);
 
console.log(myString.length);
myString=myString.replace(/,/g," ");
console.log(myString);

//2.Array//
var favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

console.log(favoriteAnimals);

favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(3,1,);
console.log(favoriteAnimals);

favoriteAnimals.length;
console.log("The array has a length of:" +favoriteAnimals.length);

favoriteAnimals.pop(3,0);
console.log(favoriteAnimals);

favoriteAnimals.pop(1,0,'meerkat');
console.log(favoriteAnimals);

let index=favoriteAnimals.indexOf("meerkat");
console.log("the meerkat that I am looking for at the index=",index);
favoriteAnimals.splice(index,1);
console.log(favoriteAnimals);


//More JavaScript//
//1.//
var x= myFunction(6,8,9);
console.log(x);
function myFunction(a,b,c){
    return a+b+c;
}

//2.
var x= colorCar("red");
console.log("The color of car is:"+ x);
function colorCar(color){
    return color;
}

//3.
var person={firstName:"Mary", lastName:"Anderson",age:30,heigt:180};
console.log(person);
function print(object){
    for (var properity in object){
        console.log(properity+":"+object[properity]);
    }
}
print(person);
//4.
var x=vehicleType("blue",2);
function vehicleType(color,code){
    if(code==1){
        console.log("A",color,"car");
         
    }
    else if(code==2){
        console.log("A",color,"motobike");
    }
}
//5.
3 === 3 ? console.log("yes") : console.log("no");
//6.
vehicleType("blue",1,5);
vehicleType ("blue",1,1);
vehicleType("blue",2,1);
vehicleType ("blue",2,3);
vehicleType("blue",3,5);
vehicleType ("blue",3,0);

function vehicleType(color,code,age){
    var vehicleAge=" ";
    if (age>1){vehicleAge="used";} else {vehicleAge="new";}
    if (code==1){
        console.log("A",color,vehicleAge,"car");
    }
    else if(code==2){
        console.log("A",color,vehicleAge,"motobike");
        

    }
}
//7.
let list=["motobike","caravan","bike"];
console.log("list="+list);
//8.
console.log("the third element from the list is "+list[2]);

vehicle("green",3,1);
function vehicle(color,code,age){
    var vehicleAge=" ";
    if (age>1){vehicleAge="used";} else {vehicleAge="new";}
    if (code==1){
        console.log("A",color,vehicleAge,"car");
    }
    else if(code==2){
        console.log("A",color,vehicleAge,"motobike");
        

    }
}

//10.
var vehicleList = ["car", "motorbike", "caravan", "bike"];
let message = "Amazing Joe's Garage, we service";
function Ad(list, msg) {
  for( i = 0; i < list.length; i++){
    if(i == 0) {
      msg += " " + list[i]+"s";
    }else if (i == list.length-1) {
      msg += " and " + list[i]+"s.";
    }else {
      msg += ", " + list[i]+"s";
    }
  }
  return msg;
}

console.log(Ad(vehicleList, message));

//11.
vehicleList.push("truck");
console.log("The new list is "+vehicleList);
console.log(Ad(vehicleList, message));

//12.
var object={};
console.log(object);

//13.
object={name:["Tom Hank","Brad Pitt","Ronaldo"]};
console.log(object);

//14.
object={name:["Mary","Lisa","Anna"],
countries:["Germany","France","Sweden"]};
console.log(object);


//15.

//16.
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o1={food:'meatball'};
ocnsole.log(o1);
console.log(o3);

o2={drink:'coffee'};
console.log(o2);
console.log(o3);

//17.
let bar=42
console.log(typeof typeof bar);



  