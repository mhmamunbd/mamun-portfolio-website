// var eggPrice =25;
// var bananaPrice =15;
// var othersPrice =20;
// var price = eggPrice+bananaPrice+othersPrice;
// var itemList = "list of foot items";
// var total = "total only " +price+ "taka";

// var title="list and Food Price";


// console.log( title+"\n" + "Egg"+" = "+eggPrice +"\n" + "Banana"+" = "+bananaPrice+"\n" + "Others"+" = "+othersPrice+"\n" +"\n"+"Total Food Price Is "+price+"\n");

// var textPara ="this is mh mamun from bangladesh i am a web developer in bangladesh now i try to underesting jacva script";
// var upperCase = textPara.toUpperCase();
// console.log(upperCase +"\n");

// console.log(textPara.toUpperCase()+"\n"+"\n"+textPara.toLocaleLowerCase()+"\n");


// var numberOflenth = textPara.indexOf("mamun");
// console.log(textPara.indexOf("bangladesh"));

// var textTry =202.414;
// textTry++;
// var numTry=20.0999;
// var numberfloor = 25.999999;
// numberfloor*numTry;
// var absulate= -254;

// console.log(Math.round(textTry)); 

// console.log(Math.ceil(numTry));
// console.log(Math.floor(numberfloor));
// console.log(Math.random(numTry));
// console.log(Math.abs(numberfloor));
// console.log(Math.abs(absulate));



// var password=44556688;
// var rePassword=44556688;
// var age = 20;
// var age1=30;
// var confirmPass= password==rePassword;

// if (password<age == age1>age){
//     console.log("congrates! your password is"+" " +confirmPass);
// }

// else if(age==password){
// console.log("Your age is same");
    
// }

// else{
//     console.log("YOUR PASSWORD IS NOT MATCH");
// };


// // lets make a formula create mathmetics oparetion
// // (a+b)+(a+b)*2+a+b-y-x

// var a= 12;
// var b= 120;
// var c= 90;
// var x= 2*60;
// var y=60*3;



// console.log((a+b)+(a+b)*2+a+b-y-x);


// // ARRAY 

// var countries = ["bangladesh", "nepal", "vutan", "india", "maynmar", "pakisthan"];
// var perCapital = [10, 20, 50, 80, 100, 150, 71];
// console.log(countries);
// console.log(perCapital); 
// countries.push("Arabic");
// countries.pop();

// countries.unshift("katmondu", "usa", "russain");


// console.log(countries.indexOf("usa")); 

// countries[0]= "west bangal";

// var possition = countries.length;

// console.log(possition);

// console.log(countries);
// countries.concat("mmmm");
// console.log(countries);



// var checkNum = 10;

// while(checkNum< 15){

//     console.log(checkNum );
//     checkNum++
// }


// for(var i=0; i <10; i++){
// console.log(i+" "+ "i try to my best");

// }

// var mamunProfile = {name:"MH.MamuN", id:71, lavel:520, phone: 99363471, skill:"Web Development, Graphics Designer"  };

// var myName =mamunProfile.name;
// var ourName =mamunProfile["name"];
// var getname = "name";
// var theName =mamunProfile["getname"];
// var yourNumber= mamunProfile["phone"];

// mamunProfile.name = "mamun";
// mamunProfile["name"]= "mamun";

// console.log(theName);
// console.log(ourName);
// console.log(myName);
// console.log(yourNumber);

// var getNumber =10;
// switch (getNumber){
//     case 10:
//         console.log("you can find me i'am number 10");
//         break;
//     case 5:
//         console.log("i'm not match with you");
//         break;    
//         default:
//             console.log("no! i can't find him");
//     };


//     function feetMeasur (getInchi){
//         const feet = getInchi/12;
//         return feet;
//     }

//     const measurment =feetMeasur(64);
//     console.log(measurment);
//     const friends= feetMeasur(70);
//     console.log(friends);
//     const anotherPerson = feetMeasur(120);
//     console.log(anotherPerson);


//     const supossYourName= "MH.MamuN";
//     if (supossYourName.length>=5){
//         console.log("your name is too long you need to compress.\n write your name 'MamuN' ")
//         let fName= "MH.MamuN";
//         console.log(fName)
//     }
//     else{
//         console.log("Your name is MamuN")
//     }


//     // /Check leap year in 2100 

//     // const leapYear = 2100;
//     // let theYear = leapYear%4;
//     // console.log(theYear=0);

//     // if (theYear==0){
//     //     console.log("this year is leap-yaer")

//     // }

//     // else{
//     //     console.log("leap year is an-other years")
//     // }


//     function theLeaper(leap){
//         const lipYear = leap%4;
      
//         if(lipYear==0){
//             return true;
//         }
        
//         else{
//             return false;
//         }
//     }

//    const yearLip= theLeaper(2020);
//    console.log(yearLip);

// //factorial for statment////----s
// // let factorial =1;
// // for(let i=1; i<=10; i++){
// // factorial =factorial*i;
// // console.log(factorial)
// // }


// ///factor for function statment here
// // function factorial(numF){
// //     let factorial = 1;
// //     for (let i=1; i<= numF; i++){
// //         factorial = factorial*i;
// //     }
// //     return factorial;
// // }

// // let result =factorial(10);
// // console.log(result);

// let i = 1;
// let factorial = 1;
// while(i<=10){
//     i++;
//     factorial= factorial*i;
// }
// console.log(factorial);


// var fibo=[0, 1];
// for (var i=2; i<=10; i++){
//     fibo[i]= fibo[i-1] +fibo[i-2];
//     console.log(fibo);
// }             

// function fibonacci(n){
//     var fibo = [0, 1];
//     for (var i=2; i<=n; i++){

//         fibo[i]= fibo[i-1] + fibo[i-2];
//     };
//     return fibo;
    
// };
// var resultFibo = fibonacci(12);
// console.log(resultFibo);

// the real fibonscci is here

// let fibo =[0,1];
// for (let i=2; i<=12; i++){
//     fibo[i]= fibo[i-1]+ fibo[i-2];
//     console.log(fibo);
// }



// function fibonacci(n){
//     let fibo=[0,1];
//     for(let i=2; i<=n; i++){
//     fibo[i]= fibo[i-1] + fibo[i-2];
//     }
//     return fibo;

// }
// let fiboResult = fibonacci(12);
// console.log(fiboResult);


//fibonacci Recursive way   /////////
        function fibonacci(n){
        if(n== 0){
            return 0;
        }   
        if(n== 1){
            return 1;

        }

        else{
            return fibonacci(n-1)+ fibonacci(n-2);
        }
        }

        let result= fibonacci(10);
        console.log(result);