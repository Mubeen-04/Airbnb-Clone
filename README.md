# WanderLust

Wanderlust is a web application inspired by Airbnb that enables users to explore, book, and review various accommodations around the globe. Built using the MERN stack (excluding React), it focuses on providing an intuitive and functional user experience.

## Features

- **Browse Listings**: Explore a variety of accommodation options with detailed descriptions, images, and pricing.
- **User Authentication**: Secure login and registration system for users.
- **Create Listings**: Host users can add new property listings.
- **Reviews and Ratings**: Users can leave reviews and ratings for their stays.
- **Responsive Design**: Fully responsive UI built with HTML, CSS, and Bootstrap.

## Tech Stack

- **Frontend**:
  - HTML, CSS, Bootstrap
  - EJS (Embedded JavaScript Templates)
  - JavaScript

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB

## Project Structure

```plaintext
wanderlust/
├── init/            # Initialization scripts for seeding data
│   ├── data.js      # Data seeding script
│   └── index.js     # Script entry point for initialization
├── models/          # Mongoose models for database schemas
│   ├── listing.js   # Listing schema
│   └── review.js    # Review schema
├── node_modules/    # Node.js dependencies
├── public/          # Static files (CSS, JS, images)
│   ├── css/         # Stylesheets
│   │   └── style.css
│   ├── js/          # Client-side scripts
│   │   └── script.js
├── utils/           # Utility functions and error handling
│   ├── ExpressErrors.js
│   └── wrapAsync.js
├── views/           # EJS templates
│   ├── layouts/     # Layout templates
│   │   └── boilerplate.ejs
│   ├── includes/    # Reusable components
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── listings/    # Listing-specific templates
│       ├── edit.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
├── app.js           # Main application file with routes
├── schema.js        # MongoDB schemas
├── package.json     # Project metadata and dependencies
├── .env             # Environment variables
└── README.md        # Project documentation
```

## Installation and Setup

Follow these steps to set up and run Wanderlust on your local machine:

### Prerequisites

- **Node.js**: Install [Node.js](https://nodejs.org/).
- **MongoDB**: Install and run MongoDB on your system or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Step-by-Step Guide

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/wanderlust.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd wanderlust
   ```

3. **Install Dependencies**:
   Since the `node_modules` folder is already included, this step is optional. However, if needed, run:
   ```bash
   npm install
   ```

4. **Install Required Packages** (if missing):
   - Install `nodemon` for development:
     ```bash
     npm install -g nodemon
     ```
   - Install specific dependencies:
     ```bash
     npm install express ejs mongoose dotenv method-override
     ```

5. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=your_mongodb_connection_string
     PORT=3000
     SECRET=your_secret_key
     ```

6. **Initialize the Database** (Optional):
   If required, populate the database with initial data:
   ```bash
   node init/index.js
   ```

7. **Start the Server**:
   - For development (with `nodemon`):
     ```bash
     nodemon app.js
     ```
   - Without `nodemon`:
     ```bash
     node app.js
     ```

8. **Access the Application**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Running the Application

- Ensure MongoDB is running locally or accessible via the connection string.
- Use the routes in `app.js` to manage listings and reviews.
- Customize the `public/css/style.css` and `views` for design changes.

## Contributing

Contributions are welcome! 
This project is actively under development, and new features and improvements are being added. Everyone is welcome to contribute and help enhance Wanderlust!
If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by Airbnb's functionality and design principles.
- Built with passion and dedication to learning and improving web development skills.

---

Feel free to explore and use Wanderlust. If you have any questions or suggestions, feel free to reach out!

