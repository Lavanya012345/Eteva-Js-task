let listElement1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
let listElement2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

let uniqueListEl1 = [], uniqueListEl2 = [], commonListEl = [];


for (let i = 0; i < listElement1.length; i++) {
    let is_false = false;
    for (let j = 0; j < listElement2.length; j++) {
        if (listElement1[i] === listElement2[j]) {
            is_false = true;
            break;
        }
    }
    if (!is_false) uniqueListEl1.push(listElement1[i]);
}

console.log(uniqueListEl1);

for (let i = 0; i < listElement2.length; i++) {
    let is_false = false;
    for (let j = 0; j < listElement1.length; j++) {
        if (listElement2[i] === listElement1[j]) {
            is_false = true;
            break;
        }
    }
    if (!is_false) uniqueListEl2.push(listElement2[i]);
}

console.log(uniqueListEl2);


for (let i = 0; i < listElement1.length; i++) {
    for (let j = 0; j < listElement2.length; j++) {
        if (listElement1[i] === listElement2[j]) {
            commonListEl.push(listElement1[i]);
            break;
        }
    }
}

console.log(commonListEl);
