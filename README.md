# 🌿 Plantify - E-Commerce Store (Redux Toolkit)

Welcome to **Plantify**, an e-commerce web app built with **React** and **Redux Toolkit**, developed as part of the IBM Full-Stack Developer course on Coursera. The application allows users to browse houseplants, add them to a cart, and manage their orders using Redux for efficient state management.


---
## 🔗 Live Demo

**Website URL**: [https://react-project-iota-vert.vercel.app/](https://react-project-iota-vert.vercel.app/)

---

## 📁 GitHub Repository

**GitHub Repo**: [https://github.com/johnwesley755/react-project](https://github.com/johnwesley755/react-project)

---

## 💡 Features

### 🔸 Landing Page
- ✅ Background image
- ✅ Company name and description
- ✅ "Get Started" button linking to the product page

### 🔸 Product Listing Page
- ✅ Displays 6 unique houseplants with thumbnails, names, and prices
- ✅ Grouped into 3 categories (e.g., Indoor, Outdoor, Air Purifying)
- ✅ "Add to Cart" button for each plant:
  - Increases cart count
  - Disables after adding
  - Adds item to Redux cart state

### 🔸 Header
- ✅ Visible on both product and cart pages
- ✅ Cart icon with total item count (updated in real-time)
- ✅ Navigation between pages

### 🔸 Shopping Cart Page
- ✅ Displays:
  - Total items
  - Total cost
  - Thumbnail, name, unit price per item
- ✅ Quantity control:
  - Increase/decrease buttons for each plant
  - Dynamic updates to item count and totals
- ✅ Remove plant from cart
- ✅ "Checkout" button with placeholder
- ✅ "Continue Shopping" button to return to product page

---

## 🛠️ Tech Stack

- **Frontend**: React (Hooks)
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: CSS Modules / Custom CSS

---

## 📦 Installation & Run Locally

```bash
git clone https://github.com/johnwesley755/react-project.git
cd react-project
npm install
npm start
