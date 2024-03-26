# Random Name Generator

This code generates a random character name by combining elements from pre-defined lists of first names, middle names (optional) and last names.

## Functionality

1. Data structure:

    - An object named `randomName` stores arrays of possible names for each part.
    - An empty array named `characterName` will hold the generated name components.

2. Random Number Generations:

    - The `generateRandomNumber` function takes a number as input (`num`) and returns a random integer between 0 and `num - 1`.

3. Name Generation Loop:

    - A `for ... in` loop iterates through each property of the `randomName` object.
        + A random index is generated using `generateRandomNumber` for the current elements's list.
        + Based on the element (`name`, `middle` or `last`), the corresponding random name is pushed to the `characterName` array.

4. Name Formatting:

    - The `formatNames` function takes the `characterName` array as input.
    - It joins the elements of the array with a space ("") to form a complete name string.
    - Finally, it logs the formatted name to the console.

## Usage

1. Clone or download the repository.
2. Open the project in your preferred code editor.
3. Run the code (refer to your editor's instructions for execution).

The code will generate and print a random character name to the console.

## Example Output

The output will be a formatted string like:

    Arthur The Great

(The actual name will vary due to randomness)

## Customization

You can customize the code by:

- Modifying the names within the `randomName` object's arrays.
- Adding or removing elements like a middle name.
- Adjusting the formatting in the `formatNames` function (e.g., using commas instead of spaces).

## Contribution

Feel free to contribute by opening pull requests suggesting improvements or additional features.