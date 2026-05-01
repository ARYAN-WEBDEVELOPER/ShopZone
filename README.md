# 🛒 ShopZone — Modern E-Commerce SPA

ShopZone is a fully functional **Single Page Application (SPA)** built using React. It simulates a real-world e-commerce platform where users can browse products, view details, manage a cart, and experience authentication flow — all without page reloads.

---

## 🚀 Live Demo

🔗 *Add your deployed link here (Vercel/Netlify)*

---

## ✨ Features

### 🧭 Navigation & Routing

* SPA routing using React Router
* Dynamic routes (`/product/:id`)
* Protected routes (`/checkout`)

### 🛍️ Product System

* Fetch products from API
* Product listing with grid layout
* Individual product detail page

### 🛒 Cart System

* Add to cart
* Quantity management (+ / -)
* Remove items
* Total price calculation
* Persistent cart using localStorage

### 🔐 Authentication (Frontend)

* Login as Guest
* User state management using Context API
* Protected checkout route
* Persistent login using localStorage

### 🔍 Search & Filter

* Real-time product search
* Category-based filtering

### 🎨 UI/UX

* Responsive design (mobile + desktop)
* Clean card-based layout
* Animated home page (banner + icons)
* Consistent color theme (Amazon-inspired)

---

## 🛠️ Tech Stack

* **Frontend:** React, JavaScript, CSS
* **Routing:** React Router DOM
* **State Management:** Context API
* **API:** DummyJSON (https://dummyjson.com/products)
* **Storage:** localStorage
* **Version Control:** Git & GitHub

---

## 📂 Folder Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│
│── context/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Product.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Login.jsx
│   ├── Contact.jsx
│
│── styles/
│   ├── app.css
│
│── App.jsx
│── main.jsx
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/shopzone.git

# Navigate into project
cd shopzone

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🔮 Future Improvements

* Backend integration (Node.js / Firebase)
* User authentication with database
* Order management system
* Payment gateway integration
* Product reviews & ratings
* Wishlist feature

---

## 👨‍💻 Author

**Aryan**
Frontend Developer


