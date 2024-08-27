// MDN web docs for theory !

console.log("daksh");
console.log("hello world!");

///////////////////////////////////////////////////   variables   //////////////////////////////////////////////

name="daksh";
console.log(name);
age=18;
console.log(age);
console.log(age+2);
console.log(name, age);

futuree="age+2";
future=age + 2;
console.log(future);
console.log(futuree);

follows=true;
console.log(follows);

// using of let to declare variable
let year = 10;
//can update the let
year = 18; 
console.log(year);

// var can be used to declare the variable but it can redeclare it 
var name = " ...Yor name..." ;
var name = " ...any thing..";
console.log(name);

//naming of variable is case sensitive 
let fullName="...Yor name...";
console.log(fullName);
let FULLNAME="...Youur name...";
console.log(FULLNAME);

//can use digits, letters,$ , _ in naming of variable 
// first character is always can be letter , $, _ only 
let kanta_bai = "low";
let $name123 = "okay";

//use camel case for writing i.e {fullName}

//use of const
const a= 10;
console.log(a);

//if we define a variable without giving any value it give undefined
let aa;
console.log(aa);

//block {} has its own specific varible but in it we can not define same variable again i.e
{
    let a=10;
    console.log(a);
}
{
    let a=28;
    console.log(a);
}    
/*example  
{
    let b=10;
    let b=65;
    console.log(b);
}*/
// use {/* --- */ } for multiline comment

//making a object also known as collection of variables 

const student = {
    age : 18,
    name : "rahul",
    score : 100,
    isPass : true
};

// comma after declaring a value is imp 
//formate for data is {key: value,}

console.log(student);

//to access  a specific data (or key) from collection (or object)  use 

console.log(student["age"]);

//here student is collection and we accessing age by using ( ["age"] )
//or we can also use ( object.key ) {better}

console.log(student["name"]);
console.log(student.score);

// to update the assigned value of key in obj we use 

student.age = student.age + 1 ;
console.log(student.age);

student["score"] = student["score"] - 9 ;
console.log(student["score"]);

student.name = "...Yor name...";
console.log(student.name);


//question on a product objest consisting diferent variable 
const product = {
    nameOf_Product : "bajra",
    rating : 4,
    dealOfTheDay : true,
    price : 250 ,
    offer : 5,
};

console.log(product);

product.price = product.price - 50 ;
console.log(product["price"]);

//another question 
const profile = {
    name : "shradha",
    follow : false ,
    message : false ,
    posts : 195,
    followers : BigInt(569),
    following : 4 ,
};

console.log(profile);



/////////////////////////////////////////////////    OPERATORS    /////////////////////////////////////////////


//arithmetic operators
{
let x = 10 ;
let b = 3;

console.log("x =", x , "& b =" , b);
console.log("x + b = ", x+b);
console.log("x - b = ", x-b);
console.log("x * b = ", x*b);
console.log("x / b = ", x/b);

// for the modulus operator we use {%} sign this operator give the value of remainder int he division of some value like

console.log("x % b = ", x%b); //answer will be 1 as when we divide 3 with 10 the remainder is 1

//for the exoponential operator we use { ** } sign for the power symbol rather than using {^}

console.log("x^b = ", x**b); 
}
//unary operators ar those in which only one variable is needed at least!

// 1. increment {a++} or {++a} 
    
//{a++} is post increment in which the value of variable remain same then it will be increase and will be used as new value of p
//{++a} is pre increment in which the vale is first increased and then used
{let p = 15 ;

console.log("p++ =", p++); //15
console.log ("p =" ,p); //16

//p is already incresed so ++a will increase it more 
//means p using a new assigned value

console.log("++p =", ++p); //17
}
// 2. decrement {o--} and {--o}

//{o--} is post decrement in which value of the variable remain same at first then it will decrease and used as a new value of o
//{--o} is pre decremnet in which value of the varible decrease first and used as a decreased one
{
let o = 20 ;

console.log("o-- =" ,o--); //20
console.log("o = ", o); //19
 
//now o has a new assigned value to it 

console.log("--o =", --o); //18
}

//assingment operators 
// = , += , -= , *= , /= , **= , %= 

{
let l = 10 ;

l  += 4 ; // l = l + 4
console.log("L =", l)

//value of l will be changed with each as the new value is getting assigned to it woth every step

l -= 4 ; // l = l -4
console.log("L =", l)

l *= 4 ; // l = l *4
console.log("L =", l)

l /= 5 ; // l = l /4
console.log("L =", l)


l %= 6; // l = l %4 [it give the value of the remainder when value is divided by 4]
console.log("L =", l)

l **= 4 ; // l = l **4
console.log("L =", l)
}
// comparision operators

// equal to { == }
// not equal to { != }
// in this the when comparing the string can convert into number data type then compared 
{
let u = 5 ;
let j = 5 ;

console.log("u == j", u==j ); //true
console.log("u != j", u!=j); //false
}
{
    let u = 5 ;
    let j = 6 ;
    console.log("u == j", u==j ); //false
console.log("u != j", u!=j); //true

}
{
    let u = 5 ;
    let j = "6" ;
    console.log("u == j", u==j ); //false
 console.log("u != j", u!=j); //true
 // string type changes to  number type than compared 
}

//equal to & type { === }
//not equal to & type { !== }
//in which the data type doesnt chnage and it strictly compare on the intial data type 

{
    let u = 5 ;
    let j = 5 ;
    
    console.log("u === j", u===j ); //true
    console.log("u !== j", u!==j); //false
}

{
        let u = 5 ;
        let j = 6 ;
        console.log("u === j", u===j ); //false
    console.log("u !== j", u!==j); //true
    
}
   
{
        let u = 5 ;
        let j = "6" ;
        console.log("u === j", u===j ); //false
     console.log("u !== j", u!==j); //true
     // string type doent changes to  number type than compared 
}
    
{
    let u = 5 ;
    let j = "5" ;
    console.log("u === j", u===j ); //false
 console.log("u !== j", u!==j); //true
 // string type doent changes to  number type than compared 
}

//comapriosn operators
// > , >= , < , <=

{
    let x = 5;
    let y = 5;
    console.log("5 > 5", x>y);
    console.log("5 >= 5", x>=y);
    console.log("5 < 5", x<y);
    console.log("5 <= 5", x<=y);

}
{
    let x = 5;
    let y = 6;
    console.log("5 > 6", x>y);
    console.log("5 >= 6", x>=y);
    console.log("5 < 6", x<y);
    console.log("5 <= 6", x<=y);

}
{
    let x = 6;
    let y = 5;
    console.log("6 > 5", x>y);
    console.log("6 >= 5", x>=y);
    console.log("6 < 5", x<y);
    console.log("6 <= 5", x<=y);

}

//logical operators [logic gates]

// AND gate { && } means { A.B }
{
    let a = 6;
    let b = 5;

    let cond1 = a>b ;//true
    let cond2 = a === 6 ;//true

    console.log("cond1 && cond2 = ", cond1 && cond2);
}
{
    let a = 6;
    let b = 5;

    let cond1 = a<b ;//false
    let cond2 = a === 6 ;//true

    console.log("cond1 && cond2 = ", cond1 && cond2); //false
}
{
    let a = 6;
    let b = 5;

    let cond1 = a<b ;//false
    let cond2 = a !== 6 ;//false

    console.log("cond1 && cond2 = ", cond1 && cond2);//false
}

// OR  gate {||} means { A + B }
{
    let a = 6;
    let b = 5;

    let cond1 = a>b ;//true
    let cond2 = a === 6 ;//true

    console.log("cond1 || cond2 = ", cond1 || cond2);//true
}
{
    let a = 6;
    let b = 5;

    let cond1 = a<b ;//false
    let cond2 = a === 6 ;//true

    console.log("cond1 || cond2 = ", cond1 || cond2);//true
}
{
    let a = 6;
    let b = 5;

    let cond1 = a<b ;//false
    let cond2 = a !== 6 ;//false

    console.log("cond1 || cond2 = ", cond1 || cond2);//false
}
{
    let a = 6;
    let b = 5;

    let cond1 = a>b ;//true
    let cond2 = a !== 6 ;//false

    console.log("cond1 || cond2 = ", cond1 || cond2);//true
}

//NOt gate { !(--) } means it will comvert the true to false 

{
    let a = 6;
    let b = 5;

    let cond1 = a>b ;//true
    let cond2 = a === 6 ;//true

    console.log("!(cond1) || !(cond2) = ", !(cond1) || !(cond2)); //due to not operator true converted to false

}

//not operator cane be used for only one condition

{
    let a = 6;
    let b = 5;

    let cond1 = a>b ;//true
    console.log("!(cond1) = ", !(cond1) ); //false
}
{
    let a = 6;
    let b = 5;

    let cond1 = a<b ;//false
    console.log("!(cond1) = ", !(cond1) ); //true
}

////////////////////////////////////////////////////  CONDITONAL STATEMENTS  ////////////////////////////////////////////////////////

/* if statement

if ( *condition which needs to be met either [true / false ]* ) {
    *code which will be executed if the condition is true*
}
*/

//example

{
    let age = 18;
    
    if (age >= 18 ) {
        console.log("you can vote");
    }

    if ( age < 18 ) {
        console.log("you cannot vote");
    }
} // you can vote as the first condition is met

{
    let mode = "light";
    let color;

    if (mode = "dark"){
        color = "black";
    }
    if (mode = "light"){
        color = "white";
    }

    console.log(color)
}    //white 

/* if - else statement 

if ( * condition that needs to be either true or false * ) {
    *code executed if the condition is met* [true]
} else {
    *code executed when the condition is not met* [false]
}
*/

//example 
{
    let age = 16;

    if (age >= 18 ){
        console.log("vote");
    }
    else {
        console.log("not vote");
    }
} //not vote


//even odd 
{
    let a = 4;
    if ( a%2 === 0 ){
        console.log(a ,"is even");
    }
    else {
        console.log(a , "is odd");
    }
} //even

/* else - if statement

if ( *c0ondition 1* ){
    *code for 1*
} else if ( *condition 2* ){
    *code for 2*
} else {
    *code if nothing is met*
}
*/

//example

{
    let age = 18;

    if (age < 18 ){
        console .log(age, "is a child");
    } else if ( age > 60 ){
        console.log(age, "is a senior");
    } else {
        console.log(age, "is a middle");
    }    
}

{
    let mode = "pink";
    let color;

    if (mode === "dark") {
        color = "black" ;
    } else if (mode === "sky") {
        color = "blue";
    } else if (mode === "pink") {
        color = "pink";
    } else {
        color = "white";
    }

    console.log(color);

}

// ternary operators {?} , {:} used when handling 3 operators at a time 
// {?} this shows if the the first condition is met i.e its true then the out put will be given if its not true then 
// {:} this shows the out if the condition became false 
// [codition] ? [output if condition is true] : [output if condition is not true]
//example
 
{
    let age = 12 ;

    let result = age >= 18 ? "adult" : "not adult" ;

    console.log(result);
}

// its a compact and simpler version of if else statement

// {alert} used to pop out a message for the user like

alert("hello!");

// {prompt} also used to pop out the message but also used to get the value from the user 

{
    let name = prompt("your name ?");
    console.log(name) ;
}

{
    let age =  parseInt(prompt("what is your age ? " ));
    
    console.log (age);
    
    if (age >= 18 ) {
        alert("daamn your an adult");
        console.log("daamn your an adult");
    } else if (age >= 60 ) {
        alert("old person");
        console.log("old person");
    } else {
        alert("fucking child");
        console.log("fucking child");
    }
}

// question in  which you need to get a number from a user and check it if its is multiple of 5 or not 

{
    let a = parseInt(prompt("take a number !"));

    if (a%5 === 0) {
        alert("number you chose is mutiple of 5");
        console.log("number you chose is mutiple of 5");
    } else {
        alert("number you chose isn't a multiple of 5");
        console.log("number you chose isn't a multiple of 5");
    }
}

// question in which you have to give grades to the students

{
    let score = prompt("what is your score (0-100) : ") ;

    let grade;
    
    if ( score >= 0 && score <= 20) {
        grade = "E";
    } else if ( score >= 21 && score <= 40) {
        grade = "D";
    } else if ( score >= 41 && score <= 60) {
        grade = "C";
    } else if ( score >= 61 && score <= 80) {
        grade = "B";
    } else if ( score >= 81 && score <= 100) {
        grade = "A";
    } else {
        alert("you mother fuck")
        grade = "Z";
    }

    alert("your score =", score , " & your grade is ", grade);
    console.log("your score =", score , " & your grade is ", grade)
}




/////////////////////////////////////////////////////////   LOOPS   ////////////////////////////////////////////////////////



// for loop 

/* for ( * initialization * ; * stopping condition * ; * updation * ) {
    * code which needs to be looped *
} */

//working of for loop
/* 1. here the variable is first initalized and then its checked with the stopping consdition if its true then code will be executed
2. then with updation of variable {i++ , i--} , it checks it again and then if its true then code runs again 
3. then it update and loop follow
4. if the variable is checked and it is found to be false with the stopping condition the code will not be executed , thus the loop will break
*/

// example

{
    for (let i=1 /*initialisation*/ ; i <= 5 /*stopping condition*/ ; i++ /*updation*/ ){
        console.log("i love you"); /*code which will be executed if the stopping consdition is met */
    }
}

// calculation of sum of the no. from n to m 

{
    let sum = 0;
    let a = parseInt(prompt ("take a number you wanna start you sum from :"));
    let m = parseInt(prompt ("take a number you wanna end  your sum at :"));

    //to get the value in integer form from the promt we have to use the { parseInt(prompt(---)) } tool

    for (  let n = a ; n <= m  ; n++ /*{updation method}*/ ) {
        sum = sum + n ; // here sum is getting updated with the loop while checking the variable with our stopping condition 
    }

    console.log(" your sum of the number from ", a , "to", m , " = " , sum);
}

// infinite loop {stopping condition is [ >= 0 ] }

/* for ( let i=1 ; i >= 0 ; i++ ) {
    console.log(i);
} */

// while loop

/* [let i=3 ;] --> initialization 
while ( [i <= 6] --> only stopiing condition is indide the while loop ) {
    console.log(i);
    [i++] --> updation is written inside the code block ;
}
*/

/*working is same as for loop i.e if the stopping condition becomes true the code will execute with the updation 
and then after some updations the stopping condition become fasle the loop will break */

//example

{
    let i = 1;
    
    while ( i <= 10 ) {
        console.log(i);
        i++ ;
    }
}

// do - while loop
// in this loop the condition is checked in the end after executing the code 
// so in this code will execute at least once even the condition doesnt met

//example
{
    let i = 34;
    //initializer

    do {
        console.log(i);
        i++;
        // updation is within the coding block
    } while ( i <= 50 );
//condition is in the end
}


// to be contined .....




