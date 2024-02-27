// Task #1
console.log("Task #1");
var user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);

// Task #2
console.log("Task #2");

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

// Task #3
console.log("Task #3");

function sumOfNumericFields(obj) {
    var sum = 0;
    for (var key in obj) {
        if (typeof obj[key] === 'number')
            sum = sum + obj[key];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log("sum is " + sumOfNumericFields(salaries));

// Task #4
console.log("Task #4")

function multiplyNumeric(obj) {
    for (var key in obj) {
        if (typeof obj[key] === 'number')
            obj[key] = obj[key] * 2;
    }
}


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu)

// Task6 create clone function
console.log("Task #6")

var obj = {
    name: 'Vasya',
    age: 25,
    isMarried: false,
    home: null,
    dogs: undefined,
    family: ['mother', 'father'],
    friend: {
        name: 'Petya',
        age: 30,
        isMarried: true,
        work: null,
        family: [
            {
                name: 'mother',
                age: 60
            },
            {
                name: 'father',
                age: 62
            }
        ]
    }
}

var cloneObject = {};

// ------ copy level ------
for (let key in obj) {
    if (typeof (obj[key]) === 'object') {
        if (obj[key] == null) {
            cloneObject[key] = null;
        } else if (obj[key].length >= 0) {
            cloneObject[key] = [];
            for (let i = 0; i < obj[key].length; i++) {
                cloneObject[key][i] = obj[key][i];
            }
        } else {
            cloneObject[key] = {};
            // ------ copy level ------
            for (let key2 in obj[key]) {
                if (typeof (obj[key][key2]) === 'object') {
                    if (obj[key][key2] == null) {
                        cloneObject[key][key2] = null;
                    } else if (obj[key][key2].length >= 0) {
                        cloneObject[key][key2] = [];
                        for (let i = 0; i < obj[key][key2].length; i++) {
                            cloneObject[key][key2][i] = {};
                            // ------ copy level ------
                            for(let key3 in obj[key][key2][i])  {
                                cloneObject[key][key2][i][key3] = obj[key][key2][i][key3];
                            }
                            //------ / copy level ------
                        }
                    } 
                } else {
                    cloneObject[key][key2] = obj[key][key2];
                }
            }
            //------ / copy level ------
        }
    } else {
        cloneObject[key] = obj[key];
    }
}
//------ / copy level ------

console.log('Obj');
console.log(obj);
console.log('cloneObject');
console.log(cloneObject);