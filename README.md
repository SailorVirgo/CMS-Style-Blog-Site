# Tech Blog

## Table of Contents
- [Description](#description)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description
Tech Blog is a CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts. It is built following the MVC paradigm, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Screenshots

![Screenshot 2024-08-05 001721](https://github.com/user-attachments/assets/69dc348e-89fd-499e-bd35-2e8be9d5d265)
![Screenshot 2024-08-05 001754](https://github.com/user-attachments/assets/23bbae64-48a2-4b90-917c-92ef909fd1f1)
![Screenshot 2024-08-05 001703](https://github.com/user-attachments/assets/79fbae47-e01a-4c83-911d-ef5e1054cfc5)



## Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/SailorVirgo/CMS-Style-Blog-Site.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tech-blog
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Create a .env file in the root directory and add your database credentials:
   ```bash
   DB_NAME=tech_blog_db
   DB_USER=your_database_username
   DB_PASSWORD=your_database_password
   ```
   
5. Create the PostgreSQL database:
   ```bash
   psql -U your_database_username
   CREATE DATABASE tech_blog_db;
   ```


## Usage
1. Seed the database with initial data:
   ```bash
   node db/seed.js
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open your web browser and navigate to `http://localhost:3001`

## Technologies Used
 - Node.js
 - Express.js
 - Handlebars.js
 - Sequelize  
 - PostgreSQL
 - bcrypt
 - express-session
 - connect-session-sequelize
## Features
  * User authentication (sign up, login, logout)
  * Create, read, update, and delete blog posts
  * Comment on blog posts
  * Responsive design
## Contributing
  Contributions are welcome! Please follow these steps:
```bash
1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a Pull Request.
```

## License
This project is licensed under the MIT License.
   
## Contact
GitHub: SailorVirgo
