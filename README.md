# Microfrontend
Known as "Microservice" version of Frontend, Micro-frontend architectures decompose a front-end app into individual, semi-independent callled “microapps” working loosely together. This can help make large projects more manageable, e.g. when transitioning from legacy codebases. Moreover, these architectures are supportive for teams which are expertised at different programming languages but want to work together in a big project due to the nature of "independence" in development and production.
<p align="center">
  <img src="https://res.cloudinary.com/dzvruudmw/image/upload/v1741598455/micro-frontend_xq2kl7.jpg" />
</p>

## Introduction
Welcome to PKShop project! This project is a web E-commerce application which is used as a demo for Micro-frontend architecture.
## Tech stack 
* single-spa
* React 17
* Angular 17
## How to run 
**1. Clone the project**
```bash
git clone https://github.com/hoangphuc38/MicroFrontend.git
```
**2. Go to directories and install npm dependencies. Example for cart**
```bash
cd auth
```
```bash
npm install
```
**4. Run the app**
* **With Angular projects such as Cart**
```bash
npm run serve:single-spa:cart
```
* **With React projects such as Home**
```bash
npm run start
```
* **With root-config**
```bash
npm run start
```
## About Project
* **root-config [EJS Template]:** Serving as shell to host all micro-frontend apps.
* **home [React]:** React app for a home page, showing the list and details of products with 2 categories Winter and Sports, which doesn't need any authentication and is the default app.
* **nav-bar [React]:** Display Navbar on top of the app.
* **auth [Angular]:** Angular app for login and create new user.
* **cart [Angular]:** Angular app for showing details of cart, payment and order history.
## Some Screenshots
* **Login Screen**
<p align="center">
  <img src="https://res.cloudinary.com/dzvruudmw/image/upload/v1741598489/Login_e5ath7.jpg" />
</p>

* **Home Screen**
<p align="center">
  <img src="https://res.cloudinary.com/dzvruudmw/image/upload/v1741598473/Home_sijayj.jpg" />
</p>

* **Product List Screen**
<p align="center">
  <img src="https://res.cloudinary.com/dzvruudmw/image/upload/v1741598496/ProductList_vv94ov.jpg" />
</p>

* **Product Detail Screen**
<p align="center">
  <img src="https://res.cloudinary.com/dzvruudmw/image/upload/v1741598467/DetailProduct_bcqgqg.jpg" />
</p>

* **Cart Screen**
<p align="center">
  <img src="https://res.cloudinary.com/dzvruudmw/image/upload/v1741598480/Cart_oubhxh.jpg" />
</p>
