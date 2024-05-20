# Application Name

This is a simple  REST API Node.js application using Express to provide three endpoints: POST, GET, and PATCH.

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/ayowilfred95/Back-End-Challenge.git
```

2. Navigate to the project directory:

```bash
cd Back-End-Challenge
```

3. Install dependencies using npm:

```bash
npm install
```

## Usage

1. Start the application locally:

```bash
npm start
```

2. Testing Endpoints:

### POST Endpoint

- URL: `http://localhost:4000/data`
- Method: POST
- Request Body: In Postman, copy the data from the `numbers.json` file in the project directory and paste it directly into the request body in postman.

   After the data is posted and a `Post` request is made,the data will be automatically saved to a file named `numbersSaved.json` in the project directory.

### GET Endpoint

- URL: `http://localhost:4000/data`
- Method: GET

   This endpoint retrieves the data from the `numbersSaved.json` file and returns it in ascending order. The number are sorted 
   from the lowest to the highest.

### PATCH Endpoint

- URL: `http://localhost:4000/data`
- Method: PATCH
- Request Body Format:
```json
{
    "number":111
}
```

   This endpoint allows insertion of a single number into the list, which gets placed in the proper order. After the number is inserted, the updated data is automatically saved to the `numbersSaved.json` file since we dont have a database.
   numbersSaved.json serves database.

### Note
After performing the `Patch` request, the array will find a correct position which atime is a first postion to be inserted
After inserting the number into the array at the correct position, it saves the updated array to a file specified by `filepath`
