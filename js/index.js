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


// Iteration 3: Loops

// let hacker1Modified = [];
// let hacker1Final = "";
// for (let i = 0 ; i < hacker1.length ; i++) {
//      hacker1Modified.push(hacker1[i].toUpperCase() + ' ');
// }

let hacker1Modified = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1Modified += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1Modified)


console.log(hacker2);

let hacker2Reverse = "";
for (let i = hacker2.length-1 ; i >= 0 ; i--) {
    hacker2Reverse += hacker2[i];
}

hacker2Final = hacker2Reverse;

console.log(hacker2);

console.log(hacker2Final);

// const ourNames = [
//     {
//     name: "Samir",
//     },
//     {
//     name: "Emilie"
//     }
// ]


// const ourNamesSorted = ourNames.sort((a, b) => a.name.localeCompare(b.name));

// if (ourNamesSorted[0].name === "Emilie") {
//     console.log("the driver's name goes first");
// }
// else if (ourNamesSorted[0].name === "Samir") {
//     console.log("Yo, the navigator goes first definitely")
// }
// else {
//     console.log("What ?! You both have the same name ?")
// }


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


