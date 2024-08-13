## **Project Title: express-ts-starter**

### **Description**

**express-ts-starter** is an open-source boilerplate project designed to kickstart development for web applications and APIs using Express.js, TypeScript, and Mongoose. This starter template offers a modern tech stack with essential features to streamline development, making it easier to build scalable and maintainable applications.

### **Features**

- **TypeScript Support**: Uses TypeScript for static typing and modern JavaScript features, improving code quality and developer experience.
- **Express.js Setup**: Pre-configured to handle HTTP requests, middleware, and routing.
- **Mongoose Integration**: Connects seamlessly to MongoDB with a predefined User model for managing user data.
- **Error Handling**: Includes global error handling middleware for consistent and informative error responses.
- **Winston Logging**: Integrated logging with Winston, featuring daily log rotation for efficient log management.
- **Environment Configuration**: Simplified with a single `.env` file for managing environment variables.

### **Getting Started**

1. **Clone the Repository**:

	```bash
	git clone https://github.com/elkhiari/express-ts-starter.git 
	cd express-ts-starter
	```

2. **Install Dependencies**:

```bash
	npm install
```

3. **Set Up Environment Variables**:
    
    - Copy `.env.example` to `.env` and configure the necessary environment variables such as `MONGO_URI` and `PORT`.
    
4. **Run the Application**:

```bash
	npm start
```

4. **Development**:

- For development with automatic reloading, use:

```bash
	npm start
```


### **Directory Structure**

- **`src/`**: Contains the source code.
    - **`config/`**: Configuration files, including database connections.
    - **`controllers/`**: Request handlers for routes.
    - **`models/`**: Mongoose models and TypeScript interfaces.
    - **`routes/`**: Route definitions.
    - **`services/`**: Business logic and service layer handling complex operations.
    - **`middleware/`**: Middleware functions, including error handling.
    - **`utils/`**: Utility functions and helpers.
    - **`index.ts`**: Entry point of the application.

### **Logging**

- **Winston Logging**: The application uses Winston for logging, with daily log files stored in the `logs/` directory for effective log management.

### **Contributing**

Contributions are welcome! Please refer to the [contributing guidelines](CONTRIBUTING.md) for more details.

### **License**

This project is licensed under the MIT License - see the LICENSE file for details.

### **Contact**

For any questions or feedback, please contact othmaneelkhiari@gmail.com.
