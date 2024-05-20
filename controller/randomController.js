// require fs module to read and save data
const fs = require("fs");

// This stores the submitted list of number
let numbers = [];
// File path to save the data since we dont have a database
const filePath = "numbersSaved.json";


// logic that post json data
const randomNumber = (req, res) => {
  try {
    const number = req.body;
    // check if the number is an array, must return true
    console.log(Array.isArray(number));
    // check the length of the number sent from the request body
    console.log("The length of the number is:", number.length);

    if (!Array.isArray(number) || number.length !== 500) {
      return res
        .status(400)
        .json({ message: "expected a data of 500 numbers" });
    }

    // iterate through the numbers
    for (let num of number) {
      if (typeof num !== "number") {
        return res
          .status(400)
          .json({ message: "Invalid data type, expected numbers" });
      }
    }

    // Save the data to the file
    fs.writeFileSync(filePath, JSON.stringify(number));

    // If everything was validated
    numbers = number;

    res.status(200).json({ message: "Number was successfull saved", numbers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal error", error });
  }
};

// logic to retrieve  data from the file

const getData = (req, res) => {
  try {
    // Read data from the file
    const data = fs.readFileSync(filePath, "utf8");
    const number = JSON.parse(data);
    console.log("The legth of the number is:", number.length);
    // Check if numbers is an array and has length of 500
    if (!Array.isArray(number) || number.length !== 500) {
      return res
        .status(400)
        .json({ error: "Expected an array of 500 numbers" });
    }

    // Check if all elements in numbers are indeed numbers
    for (let num of number) {
      if (typeof num !== "number") {
        return res
          .status(400)
          .json({ error: "Invalid data type, expected numbers" });
      }
    }

    // Sort the array of numbers
    const sortedNumbers = [...number].sort((a, b) => a - b);

    res.status(200).json({ message: "Retrieved data", sortedNumbers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal error", error });
  }
};

// logic to patch data
const patchNumber = (req, res) => {
  try {

     // array is updated with the data read from the file and saved in numbers variable
     const data = fs.readFileSync(filePath, 'utf8');
     numbers = JSON.parse(data);
     console.log(numbers)

    // parse data from the request body
    const number = req.body.number;

    if (typeof number !== "number") {
      return res
        .status(400)
        .json({ error: "Invalid input. Expected a single number." });
    }

    let index = 0;
    while (index < numbers.length && numbers[index] < number) {
      index++;
    }
    numbers.splice(index, 0, number);

    fs.writeFile(filePath, JSON.stringify(numbers), (err) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ message: "Failed to save numbers to file", error: err });
      }
      // Data written successfully
      res
        .status(200)
        .json({ message: "Number inserted successfully.", numbers });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};



module.exports = { randomNumber, getData, patchNumber };
