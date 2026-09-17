# MERN Authentication & Product Dashboard

A full-stack MERN application with user authentication, JWT-based authorization, protected routes, and a product dashboard.

## 🚀 Features

- User Signup
- User Login
- Password hashing with bcrypt
- JWT-based authentication
- Protected backend APIs
- React Private Routes
- React Public Routes
- Automatic redirect based on authentication state
- User Logout
- Product listing
- Product images
- Product categories
- Product price and stock information
- Responsive UI using Bootstrap
- Toast notifications
- MongoDB database
- REST API using Express.js

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Bootstrap
- React Toastify
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Joi
- CORS

## 📁 Project Structure

```text
project/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── public/
│   │   └── images/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PrivateRoutes.jsx
│   │   │   └── PublicRoutes.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── utils.js
│   │
│   └── package.json
│
└── README.md
```

## 🔐 Authentication Flow

The application uses JWT for authentication.

```text
User Signup
     ↓
Backend validates data
     ↓
Password hashed using bcrypt
     ↓
User saved in MongoDB
```

Login:

```text
User Login
     ↓
Backend validates credentials
     ↓
Password verified using bcrypt
     ↓
JWT generated
     ↓
Token sent to frontend
     ↓
Token stored in localStorage
```

Protected API:

```text
React
  ↓
Authorization header
  ↓
Backend JWT Middleware
  ↓
JWT verification
  ↓
Valid Token
  ↓
Protected Controller
  ↓
Data
```

## 🛡️ Route Protection

### Private Routes

Private routes can only be accessed when a token exists.

Example:

```jsx
<PrivateRoutes>
  <Home />
</PrivateRoutes>
```

If the user is not authenticated:

```text
/home
  ↓
No Token
  ↓
/login
```

### Public Routes

Login and Signup are public routes.

If the user is already logged in:

```text
/login
  ↓
Token exists
  ↓
/home
```

The same behavior applies to `/signup`.

## 📦 Product API

The backend provides a protected products endpoint.

```http
GET /products
```

The request includes the JWT token:

```http
Authorization: <token>
```

The backend verifies the token before returning product data.

Product fields include:

```text
name
description
price
category
stock
image
```

## 🗄️ Product Schema

```js
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  stock: {
    type: Number,
    default: 0,
  },

  image: {
    type: String,
    required: true,
  },
});
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

```bash
cd YOUR_PROJECT_FOLDER
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=8080
MONGO_URL=mongodb://127.0.0.1:27017/Auth
JWT_SUPER_KEY=your_secret_key
```

**Never upload `.env` to GitHub.**

Add this to `.gitignore`:

```text
node_modules/
.env
```

## ▶️ Running the Project

### Start Backend

```bash
cd backend
npm start
```

Backend will run on:

```text
http://localhost:8080
```

### Start Frontend

Open another terminal:

```bash
cd frontend
npm start
```

Frontend will run on:

```text
http://localhost:3000
```

## 🌐 Routes

### Frontend Routes

| Route     | Access    |
| --------- | --------- |
| `/login`  | Public    |
| `/signup` | Public    |
| `/home`   | Protected |

### Backend Routes

| Method | Endpoint    | Authentication |
| ------ | ----------- | -------------- |
| POST   | `/signup`   | Public         |
| POST   | `/login`    | Public         |
| GET    | `/products` | Protected      |

## 🔒 Security Notes

This project implements basic JWT authentication and protected API access.

For a production application, additional security measures should be considered, including:

- HttpOnly and Secure cookies for authentication
- HTTPS
- Rate limiting
- Strong CORS configuration
- Security headers
- More comprehensive input validation
- Role-based authorization
- Resource ownership checks
- Token expiration and refresh-token strategy

## 📌 Future Improvements

- Product details page
- Add to Cart
- Shopping Cart
- Buy Now functionality
- Admin dashboard
- Role-based authorization
- Add/Edit/Delete products
- User profile
- Order management
- Search and filtering
- Pagination
- Refresh token authentication

## 👨‍💻 Author

**Bablu Joshi**

Diploma in Information Technology

## 📄 License

This project is created for learning and educational purposes.
