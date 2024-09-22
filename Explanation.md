## Approach to build the blog project

Software Architecture Pattern : **MVC**
Design Pattern :

From back-end to front-end, the project is divided into 3 parts:

1. **Database**:
    - I have used **MongoDB** for the database.
    - I have created a database named **"myblog"**.
    - Inside that database, I have created a collection named **"users"**.
    - Inside that database, I have created a collection named **"posts"**.
    - Inside that collection, I have stored the user's data.
    - Inside that collection, I have stored the post's data.
    - I have used **mongoose** to connect the database with the server.

2. **Server**:
    - I have created a server using **Express.js**.
    - I have used **mongoose** to connect the server with the database.
    - I have created different routes for different tasks like **register**, **login**, **update**, **delete**, etc.
    - I have used **bcrypt** to hash the password before storing it in the database.
    - I have used **jsonwebtoken** to create a token for the user after login.
    - I have used **dotenv** to store the sensitive information.
    - RESTful API is used to perform CRUD operations.

3. **Frontend**:
    - I have used **React.js** for the frontend.
    - I have created different components for different tasks like **register**, **login**, **update**, **delete**, etc.
    - I have used **axios** to make requests to the server.
    - I have used **react-router-dom** to navigate between different components.
    - I have used **react-toastify** to show the success and error messages.
    - I have used **tailwindcss** for the styling.
    - I have used **tanstack query** for data fetching.

### Actions

1. **Register**:
    - The user can register by providing the required details like **name**, **email**, and **password**.
    - The user's password is hashed before storing it in the database.
    - The user's data is stored in the database.

2. **Login**:
    - The user can login by providing the **email** and **password**.
    - The user's password is hashed and compared with the hashed password stored in the database.
    - If the password is correct, a token is created for the user.
    - The token is sent to the user.

3. **Update**:
    - The user can update his/her details like **name**, **email**, and **password**.
    - The user's data is updated in the database.

4. **Delete**:
    - The user can delete his/her account.
    - The user's data is deleted from the database.

5. **Create Post**:
    - The user can create a post by providing the required details like **title** and **content**.
    - The post's data is stored in the database.

6. **Update Post**:
    - The user can update his/her post's details like **title** and **content**.
    - The post's data is updated in the database.

7. **Delete Post**:
    - The user can delete his/her post.
    - The post's data is deleted from the database.

8. **View Post**:
    - The user can view all the posts.
    - The posts are fetched from the database.

9. **View User's Post**:
    - The user can view his/her posts.
    - The user's posts are fetched from the database.

10. **Logout**:
    - The user can logout by deleting the token.

### Security Features

1. **Password Hashing**:
    - I have used **bcrypt** to hash the password before storing it in the database.
    - This will protect the user's password from being exposed.

2. **JWT Token
    - I have used **jsonwebtoken** to create a token for the user after login.
    - This token is used to authenticate the user.
    - This will protect the user's data from being accessed by unauthorized users.

3. **Environment Variables**:
    - I have used **dotenv** to store the sensitive information.
    - This will protect the sensitive information from being exposed.

4. **CORS**:
    - I have used **cors** to enable CORS in the server.
    - This will protect the server from being accessed by unauthorized users.

5. **Validation**:
    - I have used **express-validator** to validate the user's data.
    - This will protect the server from invalid data.

6. **Error Handling**:
    - I have used **try-catch** to handle the errors.
    - This will protect the server from crashing.

### Performance Optimization

1. **Code Splitting**:
    - I have used **React.lazy()** and **Suspense** to split the code at the component level.
    - This will reduce the initial load time of the application.

### Steps to build the project

#### Frontend [resource](https://tailwindcss.com/docs/guides/vite)

#### Backend

npm init (project name : blog, entry point : server.js, description : A blog project, author : N4dj1b)
npm i express mongoose bcryptjs jsonwebtoken dotenv
npm i -D nodemon
npm i axios react-router-dom react-toastify tailwindcss @headlessui/react @heroicons/react @tanstack/query
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier
npx tailwindcss init -p

### Steps to run the project

1. Clone the repository.
