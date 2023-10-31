# BookManager

## ✨ Features
✔️ Create a new Book.\
✔️ Read All Books.\
✔️ Read a specific Book using book ID.\
✔️ Update a book using book ID.\
✔️ Delete a book using book ID.

## Endpoints
PORT is the port that was added in environment variable
- For Creating a new book - http://localhost:PORT/api/books  using POST method. Along with payload { title: string, author: string, summary: string}
  ![Screenshot of post API usage](https://ik.imagekit.io/b2vii2qmxcx8/Screenshot%20from%202023-10-31%2012-31-23_puK1RuNqO.png?updatedAt=1698735849431)
- For Reading all books - http://localhost:PORT/api/books  using GET method
  ![Screenshot of get API usage](https://ik.imagekit.io/b2vii2qmxcx8/Screenshot%20from%202023-10-31%2012-31-51_Cdj7m3rwaY.png?updatedAt=1698735850199)
- For Reading a specific book - http://localhost:PORT/api/books/:id  using GET method
  ![Screenshot of get api usage](https://ik.imagekit.io/b2vii2qmxcx8/Screenshot%20from%202023-10-31%2012-32-08_3Uxes4HbgO.png?updatedAt=1698735849295)
- For updating a specific book - http://localhost:PORT/api/books/:id  using PUT method Along with payload, fields that you want to update.
  ![Screenshot of put api usage](https://ik.imagekit.io/b2vii2qmxcx8/Screenshot%20from%202023-10-31%2012-32-53_tHqxA0AEkg.png?updatedAt=1698735849323)
- For deleting a specific book - http://localhost:PORT/api/books/:id  using DELETE method
  ![Screenshot of delete api usage](https://ik.imagekit.io/b2vii2qmxcx8/Screenshot%20from%202023-10-31%2012-33-10_wDRb2rDI9.png?updatedAt=1698735849319)

## 👨🏻‍💻 Run Locally

- Requirement :- Download [nodejs](https://nodejs.org/en/download)

- If you have git, run this command to clone (else download manually)

```bash
  git clone https://github.com/AbhishekDhakad/BookManager.git
```
- Go to the project directory

```bash
  cd BookManager
```

- Install dependencies

```bash
  npm install
```
- Create a .env file and add the PORT environment variable
- Create a MongoDB account, get the MongoDB connection URL, and add in the .env file as MONGO_CONNECTION for connecting the server and the Database

```bash
  PORT=
  MONGO_CONNECTION=
```
  
- start using

```bash
  npm run start
```

## Deploy Application on AWS EC2
- Securely SSH into your AWS EC2 Linux instance.
- Install NodeJS and NPM using nvm
  ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    . ~/.nvm/nvm.sh
    nvm install node
  ```
- Install Git and clone repository from GitHub
  ```bash
    sudo yum update -y
    sudo yum install git -y
    git clone https://github.com/AbhishekDhakad/BookManager.git
  ```
- Install dependencies
  ```bash
    cd BookManager
    npm install
  ```
- Run the application
  ```bash
    npm run start
- Configure security group to access via public URL
- Access the application in the browser

## 🚀 Techonologies
- Nodejs
- Express
- MongoDB

## License
[MIT](https://choosealicense.com/licenses/mit/)

