// Iteration 1: Names and Input
// 
console.log("I'm ready");

const hacker1 = "Emilie";

const hacker2 = "Samir";

console.log(`the driver's name is ${hacker1}`);

console.log(`the navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

    if (hacker1.length > hacker2.length) {
        console.log(`The driver's name is the longest name, it has ${hacker1.length} characters.`)
    }
    else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
    else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
    }


//LOOPS

// try 2, print in the other order.

const nameTest = "Emilie";

function FirstPrinter (name) {
    let cappedName = " ";
     for (let i = 0 ; i < name.length ; i++) {
         cappedName += name[i].toUpperCase() + " ";
     }
     console.log(cappedName);
}

FirstPrinter(nameTest);

// Try2, print in the reverseorder. 

const nameTest2 = "Samir";

function ReversePrinter (name) {
    let reverseName = " ";
    for (let i = name.length -1 ; i >= 0 ; i --) {
        reverseName += name[i];
    }
    console.log(reverseName);
}

ReversePrinter(nameTest2)

//Sort dictionary.

function Sorting (arg1, arg2) {
    
        const shorter = arg2.length >= arg1.length ? arg1.length : arg2.length;


    for (let i = 0; i < shorter ; i ++) {
        if (arg1.charCodeAt(i) < arg2.charCodeAt(i)) {
            console.log(`The ${arg1}'s name goes first.`);
            return;
        }
        else if (arg2.charCodeAt(i) < arg1.charCodeAt(i)) {
            console.log(`Yo, the ${arg2} goes first definitely.`);
            return;
        }
        else {
            console.log(`What?! You both have the same name?`);
            return;
        }
    }
}

Sorting(hacker1, hacker2);

// Bonus 1.

var firstPar = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mattis, justo ut sodales pretium, erat eros scelerisque odio, nec bibendum libero dui vitae eros. Nunc vitae posuere libero. Aenean iaculis porta quam et dignissim. Quisque euismod tempus quam vel facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

var secondPar = "Sed id viverra nisl. Suspendisse potenti. Sed pretium urna vitae diam sollicitudin, vel ullamcorper erat commodo. Praesent mollis pellentesque bibendum. Nulla id eros sit amet ante dignissim sagittis. Fusce in posuere sem, rhoncus finibus justo. Aliquam interdum pharetra malesuada.";

var thirdPar = "Proin malesuada mauris nec quam congue, non faucibus libero feugiat. Praesent non magna eget risus accumsan vestibulum. Fusce nunc dui, eleifend quis vulputate nec, commodo sit amet libero. Integer scelerisque orci leo, finibus vestibulum lorem accumsan in. Vivamus nec congue lacus, sit amet sagittis est. Suspendisse varius faucibus porta.";

function CountWords (arg) {
    let counter = 0;
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] === " " ) {
            counter = counter + 1;
        }
        else {
            counter = counter;
        }
    }
    console.log(counter);
}

CountWords(firstPar);

function CountEt (arg) {
    let counterEt = 0;
    for (let i = 0; i < arg.length; i++) {
        if (arg.slice(i, i+6) === "dolor " ) {
            counterEt = counterEt + 1;
        }
        else {
            counterEt = counterEt;
        }
    }
    console.log(counterEt);
}

CountEt(firstPar);



