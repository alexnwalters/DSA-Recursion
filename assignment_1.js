// Question 1
function countSheep(num) {
    if(num === 0) {
        return 'All sheep jumped over the fence'
    }
    console.log(num + ': Another sheep jumps over the fence')
    return  countSheep(num - 1)
}
let sheep = 4;
// console.log(countSheep(sheep));

// Question 2
function powerCalculator(num, exp) {
    if(exp >= 0) {
        if(exp <= 0) {
            return num / num;
        }

        return num * powerCalculator(num, exp - 1)
    }
    else {
        return 'exponent should be >= 0'
    }
}
//console.log(powerCalculator(10, -2));

// Question 3
function reverseString(string) {
    if(string === '') {
        return '';
    }
    
    return reverseString(string.substr(1)) + string.charAt(0)
}
let testString = 'test reverse'
//console.log(reverseString(testString))

// Question 4
function triangularNum(num) {
    if(num === 0) {
        return num;
    }

    return num + triangularNum(num - 1)
}
//console.log(triangularNum(10))

// Question 5
function splitter(string) {
    if(string === '') {
        return '';
    } 

    return string.charAt(0).replace('/', '') + splitter(string.substr(1))
}
let testSplit = '02/20/2020'
//console.log(splitter(testSplit))

// Question 6
function fibonacci(num) {
    if(num <= 0) {
        return 0;
    } else if(num === 1){
        return 1;
    } else {    
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}
//console.log(fibonacci(7))

// Question 7
function factorial(num) {
    if(num <= 2) {
        return num;
    }

    return factorial(num - 1) * num
}
//console.log(factorial(2))

// Question 8 - passed
function mazeSolver(maze, x, y) {
    if(maze[y][x] === 'e') {
        return 'End'
    }
    else {
        if(maze[y][x + 1] === true) {
            if(maze[y][x + 1] === ' ') {
                return mazeSolver(maze, x + 1, y)
            }
        }
        // else if(maze[y - 1][x] === true) {
        //     if(maze[y - 1][x] === ' ') {
        //         return mazeSolver(maze, x, y - 1) + 'D'
        //     }
        // }
        // else if(maze[y][x - 1] === true) {
        //     if(maze[y][x - 1] === ' ') {
        //         return mazeSolver(maze, x - 1, y) + 'L'
        //     }
        // }
        // else if(maze[y + 1][x] === true) {
        //     if(maze[y + 1][x] === ' ') {
        //         console.log(maze[x][y])
        //         return mazeSolver(maze, x, y + 1)
        //     }
        // }
    }
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
//console.log(mazeSolver(mySmallMaze, 0, 0))

// Question 9 - skipped

// Question 10
function anagrams(string) {
    let list = [];

    if(string.length === 1) {
        list.push(string);
        return list;
    }

    for(let i = 0; i < string.length; i++) {
        let firstChar = string[i];
        let otherChar = string.substring(0, i) + string.substring(i + 1);
        let otherPermutations = anagrams(otherChar);

        for(let j = 0; j < otherPermutations.length; j++) {
            list.push(firstChar + otherPermutations[j]);
        }
    }
    return list;
}
testAnagram = 'east'
// console.log(anagrams(testAnagram))

//Question 11
const testOrg = {
    'Zuckerberg': [{
        'Schroepfer': [{
            'Bosworth': [
                'Steve',
                'Kyle',
                'Andra'
            ],
            'Zhao': [
                'Richie',
                'Sofia',
                'Jen'
            ]
        }],
        'Schrage': [{
            'VanDyck': [
                'Sabrina',
                'Michelle',
                'Josh'
            ],
            'Swain': [
                'Blanch',
                'Tom',
                'Joe'
            ]
        }],
       'Sandberg': [{
            'Goler': [
                'Eddie',
                'Julie',
                'Annie'
            ],
            'Hernandez': [
                'Rowi',
                'Inga',
                'Morgan'
            ],
            'Moissinac': [
                'Amy',
                'Chuck',
                'Vinni'
            ],
            'Kelley': [
                'Eric',
                'Ana',
                'Wes'
            ]
        }]
    }]
}
function orgChart(obj) {
    if(!Object.keys(obj).length === 1) {
        return Object.keys(obj)
    }
    
}

testerOrg = {
    top: [{
        second: [a, b, c],
    }, 
    {
        third: [d, e, f]
    }]
}


console.log(orgChart(testOrg))
