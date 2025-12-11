var n = 5;
console.log(n);
var n = 20;
console.log(n);

let x = 10;
console.log(x)
x = 20;
console.log(x);

const temp = 100;
//temp = 200
console.log(temp)

let id = Symbol("hello");
console.log(id)

let s1 = "Hello";
let s2 = "Hello";
console.log(s1==s2);


let person = {
    name:"Praveen",
    age: 46,
    city: "Hyderabad"
};

console.log(person);

let user = new Object()
user.name="Kumar";
user.city="Chennai"
console.log(user);

// Dot notation can be used to retreive the value
console.log(user.name+" "+user.city)

// Bracket Notation
console.log(user['name']+" is from city "+user['city'])

// updating an object

user.state = "Tamilnadu"

console.log(user)

user.state = "Telengana"

console.log(user)

delete user.state;

console.log(user);

// Methods in Object

/*
    Object.keys()--> only keys
    Object.values() ---> only values
    Object.entries() --> both (key,value)

*/

console.log("User Keys are" +Object.keys(user))
console.log("User values are" +Object.values(user))
console.log("User entries are" +Object.entries(user))

// Looping using these Methods
for( let key of Object.keys(user)){
    console.log(key);
}

// Looping using these Methods
for( let key of Object.values(user)){
    console.log(key);
}

// Looping using these Methods
for( let [key,value] of Object.entries(user)){
    console.log(key)+" -->"+value;
}

let product = {
    id: 9001,
    name:"Laptop",
    price: 45000,
    calTax(price){
        tax = 0;
        if (price >=45000)
            tax= 0.10*price;
        else
            tax = 0.05*price;
        return tax;
    }
};

Object.entries(product).forEach(([key,value])=>{
    console.log(key+" ==> "+value)
});

/*
let emp = {
	name:"Praveen",
	city:"Hyderabad",
	greet : function(){
		//var name = "Kumar"
		console.log("Hello Welcome", this.name);
	}
      
}
    */
let emp = {
	name:"Praveen",
	city:"Hyderabad",
	greet(){
		//var name = "Kumar"
		console.log("Hello Welcome", this.name);
	}

}

emp.greet()

product.display = function(){
    console.log("The Product Details")
    console.log("ID === "+this.id);
    console.log("Name ==="+this.name)
    console.log("Price === "+this.price)
}

product.getPrice= function(){
    return this.price;
}

product.display();
console.log(product.getPrice())

console.log("The tax for 25k product is ", product.calTax(65000));


let items = []
items.push("mobiles");
items.push("charges");

items.forEach( (item,index)=> {
	console.log(index,item)
});


let data = [10,20,30,40,50,60];
console.log(data.pop());
console.log(data)
console.log(data.unshift(300))
console.log(data)
console.log(data.shift())
console.log(data)

// Arrow Methods

const display = () => console.log("Hello welcome");
const add = (a,b) => a+b;

const getDetails = (name,age) => {
    console.log("Name is " ,name)
    console.log("Age is ", age)
    return `${name} and age is ${age}`
};

display();
console.log(add(210,320));
result = getDetails("praveen",46);
console.log(result);


const createuser = (name,city,state) => {
    user = new Object();
    user.name=name;
    user.city=city;
    user.state=state;
    return user;
}

console.log(createuser("Sunil","Delhi","Delhi"));

nos = [1,2,3,4,5]
squares = nos.map(n => n*n )
console.log(squares)

let employees = [
    {name:"Praveen",salary:78000},
    {name:"Kumar",salary:67000},
    {name:"Sunil",salary:53000},
    {name:"Karan",salary:7800},

]

let filteremps = employees.filter( emp => emp.salary >= 50000);

for(let emp of filteremps){
    console.log(emp.name+" "+emp.salary);
}

empnames = filteremps.map(emp => emp.name);
console.log("The emps with given salary" +empnames);

names = employees.map( emp => emp.name)
console.log(names)

console.log("The even nos are :" + nos.filter(x => x%2 === 0))

let nums = [10,20,30,40];
let total = nums.reduce((acc,value) => acc+value, 0);
console.log("The sum is "+total)

let letters = ["a", "b","a","c","d","b","a"]
let count = letters.reduce((acc,ch)=>{
    acc[ch] = (acc[ch]||0) +1;
    return acc;
},{});
console.log(count)

let cart = [
    {item:"Laptop", price: 55000},
    {item:"Mouse", price: 1500},
    {item: "Bag", price:2000}
]

let amount = cart.reduce((acc,product)=> acc + product.price,0);
console.log("The total bill is "+amount);

let cart1 = [
    {item:"Laptop", price: 55000, category: "Electronics"},
    {item:"Shoes", price: 1500,category: "Fashion"},
    {item: "Soaps", price:2000,category: "Healthcare"},
    {item: "Shampoo", price:200,category: "Healthcare"}    
]

let categories = cart1.reduce( (acc,p)=>{
    if(!acc[p.category]) acc[p.category]=[];
    acc[p.category].push(p.item);
    return acc;
},{}
);

let keys = Object.keys(categories);

for (let i =0; i<keys.length;i++){
    let category = keys[i];
    console.log("Category:", category);
    let names = categories[category];
    for (let j=0;j<names.length;j++){
        console.log(" - "+ names[j])
    }
}

let temp1 = [1,2,3,4,5]
let [a,b,c,d,e,f]= temp1
console.log(a+" "+" "+b+" "+c+" "+d+" "+e+" "+f);

let [m,p] = [1,2,3];
console.log(m+" "+p);

let person1 = {
    name: "Satish",
    age:40,
    city:"Bangalore"
}

let {name:name1,age,city} =person1;
console.log(name1+" "+age+" "+city);

let  {country ="India"} = person1;
console.log(country);

let [n1=100,n2=20] = [,400]
console.log(n1+" "+n2);

let arr1 = [1,2,3];
let arr2 =[...arr1];
console.log(arr2)
arr3 = arr1;
console.log(arr3);
arr1.push(200)
console.log("After modification")
console.log(arr3)
console.log(arr2);

let m1 = [1,2,3]
let m2= [4,5,6]
let m4 = [...m1, ...m2]
console.log(m4)

// add items while copying
let m5 = [10,20]
let m6 = [5,...m5,30]
console.log(m6)

let person2 = {...person1, state:'Karnataka'}
console.log(person2);


function sum(...nums){
    return nums.reduce( (a,b) => a+b, 0)
}

console.log("The sum of 10 and 20 is" +sum(10,20));
console.log("The sum of 10, 20 and 30  is" +sum(10,20,30));
console.log("The sum of 10, 20,30 and 40 is" +sum(10,20,30,40));
