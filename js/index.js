// Iteration 1: Names and Input
const hacker1 = 'Laura';
console.log(`"The driver's name is ${hacker1}.`);

const hacker2 = 'Gonçalo';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
}


// Iteration 3: Loops

let nameCapitals = ''
for(let i = 0; i < hacker1.length; i++) {
    nameCapitals += `${hacker1[i]} `;
    // nameCapitals = nameCapitals + `${hacker1[i]} `
}

console.log(nameCapitals);

let nameInReverse = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameInReverse += `${hacker2[i]}`;
}

console.log(nameInReverse);

if (hacker2 < hacker1) {
    console.log('Yo, the navigator goes first definitely.');
} else if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else {
    console.log('What?! You both have the same name?');
}

//BONUS

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet rutrum metus, eu finibus nibh. Vivamus sed metus in dolor iaculis convallis. Etiam feugiat fringilla justo quis accumsan. Sed mollis vehicula leo, ac tempus lectus condimentum ut. Praesent id augue ultrices, facilisis mauris id, lobortis nisl. Aliquam fermentum nunc vitae laoreet lobortis. Duis posuere tortor in rhoncus hendrerit. Praesent dictum commodo magna non mattis. Suspendisse ipsum dolor, vestibulum id lorem in, molestie feugiat nisi. Nunc risus augue, lobortis sit amet sagittis egestas, consectetur ac sapien. Mauris vitae iaculis eros. Morbi faucibus dui eu odio pulvinar feugiat et vel sem. Fusce elit lacus, cursus nec sem eget, accumsan tempor dolor. Vestibulum condimentum laoreet vulputate. Nam sed velit convallis, lobortis purus quis, interdum nunc.

Curabitur porttitor vehicula lacus, at cursus lacus porttitor sit amet. In tristique est ac purus lacinia, quis imperdiet lorem volutpat. Donec neque lacus, accumsan eget ex vel, tincidunt pellentesque nisl. Sed molestie congue enim quis laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed lobortis justo mi, quis facilisis massa aliquam placerat. Nullam imperdiet ligula nisl, pellentesque congue nulla ornare non. Fusce vitae feugiat nisl, sit amet aliquet elit. Sed eu cursus ante. Nullam pulvinar viverra purus, sit amet varius diam ullamcorper ut. Curabitur arcu augue, tempus a mauris at, vehicula porttitor tellus.

Praesent a odio at nibh dictum vestibulum. Duis a dolor id urna consectetur luctus in ut nisi. Morbi laoreet lorem a laoreet mattis. Fusce mi ex, sagittis sit amet sollicitudin eu, rutrum nec leo. Sed maximus enim sed odio vulputate, at placerat purus suscipit. Vestibulum ante ex, laoreet eu magna eu, maximus fringilla lacus. Nulla facilisi. Nam lorem sapien, pellentesque eu feugiat in, porttitor in dolor. Ut sit amet varius dolor. Phasellus vehicula ipsum faucibus lacus malesuada consequat. Sed id mi metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus in lectus sed faucibus. Morbi convallis euismod purus in porttitor.`

wordCount = 0;
for(let i = 0; i < loremIpsum.length; i++) {
    if (loremIpsum[i] === ' '){
        wordCount++;
    }
}

console.log(wordCount);