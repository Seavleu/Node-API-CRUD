# Node-API-CRUD
Sure! Here's an example of an instruction and summary for the README file in your GitHub repository:

## Node API CRUD

This is a simple Node.js API for performing CRUD (Create, Read, Update, Delete) operations on a MongoDB database. The API uses Express.js as the web framework and Mongoose as the MongoDB object modeling tool.

### Instructions

To run the API locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/Seavleu/Node-API-CRUD.git
   ```

2. Install the dependencies:

   ```shell
   cd Node-API-CRUD
   npm install
   ```

3. Set up the MongoDB connection:

   - Open the `app.js` file.
   - Replace the placeholder connection URL (`"mongodb+srv://dbUser:123@node-api.qqbyr5w.mongodb.net/?retryWrites=true&w=majority"`) with your actual MongoDB connection URL. Make sure to include the appropriate credentials and database name.

4. Start the API server:

   ```shell
   npm start
   ```

   The API will be accessible at `http://localhost:3000`.

### API Endpoints

- `GET /` - Returns a simple "NODE API" message to verify that the API is running.
- `GET /blog` - Returns a message for testing the blog route.
- `GET /products` - Retrieves all products from the database.
- `GET /products/:id` - Retrieves a specific product by its ID.
- `POST /products` - Creates a new product in the database.
- `PUT /products/:id` - Updates a product by its ID.
- `DELETE /products/:id` - Deletes a product by its ID.

### Error Handling

- If an error occurs during any API operation, a JSON response with an appropriate error message will be returned, along with the corresponding HTTP status code.

### Dependencies

- Express.js - Web framework for handling HTTP requests and routes.
- Mongoose - MongoDB object modeling tool for interacting with the database.

Feel free to explore and modify the API according to your needs. Enjoy!
