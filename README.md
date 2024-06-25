# Product Mart Angular

## Project Setup and Installation

Follow these steps to set up and run the project on your local machine.

### Step-by-Step Instructions

1. **Clone the Repository**

   Open your terminal (or Git Bash on Windows) and run:
   ```sh
   git clone https://github.com/dhavanikgithub/product-mart-angular.git
   ```

2. **Backend Setup**

   Navigate to the root directory of the backend project:
   ```sh
   cd E-Commerce-Backend
   ```

   Install the backend dependencies:
   ```sh
   npm install
   ```

3. **Frontend Setup**

   Change to the frontend directory:
   ```sh
   cd E-Commerce-Angular
   ```

   Install the frontend dependencies:
   ```sh
   npm install
   ```

4. **Environment Configuration**

   Navigate to the backend directory:
   ```sh
   cd E-Commerce-Backend
   ```

   Create a `.env` file and set the necessary environment variables:
   ```sh
   MONGO_URL = your_mongodb_connection_string
   PORT = your_preferred_port
   PASSWORD_KEY = your_password_key
   JWT_KEY = your_jwt_secret
   ```

5. **Database Setup**

   Navigate to the backend directory:
   ```sh
   cd E-Commerce-Backend
   ```

   Import the initial data into MongoDB:
   ```sh
   npm run data:import
   ```

6. **Run the Project**

   **Run Backend:**
   ```sh
   cd E-Commerce-Backend
   npm run start
   ```

   **Run Frontend:**
   ```sh
   cd E-Commerce-Angular
   npm run start
   ```

