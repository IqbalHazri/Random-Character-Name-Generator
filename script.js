// Creating an object filled with random names and title from 3 different element
const randomName = {
    name: ['Alice', 'Matilda', 'Arthur', 'Robb', 'Jaime', 'Margaret', 'Aethelwulf', 'Liam', 'Alaric', 'Elijah', 'Theodore'],
    middle: ['The'],
    last: ['Great', 'Conqueror', 'Slayer', 'Peacemaker', 'Traveller', 'Magician', 'Wise', 'Charming']
}

// Creating a function to generate random numbers from 0 -> (num - 1)
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}


// Creating a blank array to store the random name
let characterName = [];


// Using for loop to iterate over each element in the randomName object
for (let element in randomName){

    // Getting the index based on the randomly generated number
    let index = generateRandomNumber(randomName[element].length);

    // Pushing the name onto the characterName array based on each element
    if (element === 'name'){
        characterName.push(randomName[element][index])
    } else if (element === 'middle') {
        characterName.push(randomName[element][index])
    } else if (element === 'last') {
        characterName.push(randomName[element][index])
    } else {
        return `Error naming the character.`
    }
}

//Creating a function that formatted the names as a whole string instead of an array
function formatNames(names) {
    let formatName = names.join(" ");
    console.log(formatName)
}

// Running the function to get the formatted names based on the blank array
formatNames(characterName);