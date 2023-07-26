let list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
let list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

let uniqueList1 = [], uniqueList2 = [], commonUsers = [];

// a. Get a unique set of users from List1 which are not in List2
for (let i = 0; i < list1.length; i++) {
    let found = false;
    for (let j = 0; j < list2.length; j++) {
        if (list1[i] === list2[j]) {
            found = true;
            break;
        }
    }
    if (!found) uniqueList1.push(list1[i]);
}

console.log(uniqueList1);

// b. Get a unique set of users from List2 which are not in List1
for (let i = 0; i < list2.length; i++) {
    let found = false;
    for (let j = 0; j < list1.length; j++) {
        if (list2[i] === list1[j]) {
            found = true;
            break;
        }
    }
    if (!found) uniqueList2.push(list2[i]);
}

console.log(uniqueList2);

// c. Get a set of users who are present in both List1 and List2 (intersection of list1 & list2)
for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
        if (list1[i] === list2[j]) {
            commonUsers.push(list1[i]);
            break;
        }
    }
}

console.log(commonUsers);
