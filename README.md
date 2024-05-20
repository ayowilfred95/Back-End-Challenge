Sure, here's the updated README file with instructions on how to use the application and information about the automatic saving of data to a file:

---

# Application Name

This is a simple Node.js application using Express to provide three endpoints: POST, GET, and PATCH.

## Installation

1. Clone the repository to your local machine:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd <project_directory>
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
- Request Body: In Postman, copy the data from the `numbers.json` file in the project and paste it directly into the request body.

   After the data is posted, it will be automatically saved to a file named `numbersSaved.json` in the project directory.

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
  "number": 42
}
```

   This endpoint allows insertion of a single number into the list, which gets placed in the proper order. After the number is inserted, the updated data is automatically saved to the `numbersSaved.json` file since we dont have a database.
   numbersSaved.json serves database.

### Note
After performing the `Patch` request, all the data will be replaced with the single number.
In order to sent in a new data, a `Post` request has to made with 500 numbers sent from the request body
