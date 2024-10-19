# TEAM ALGORYTHMS - Beckn Protocol Implementation

## Team Members
1. Davejyoti Pandit
2. Sahil Kumar
3. Sahil Mengji

## Problem Statement

The Beckn Protocol is an open-source standard enabling seamless interoperability between decentralized digital commerce networks. Our challenge is to develop a Beckn-compliant application that leverages this protocol to connect buyers and sellers in a decentralized marketplace, ensuring seamless transactions across multiple platforms.

### Key Challenges
1. **Discovery and Matching**
2. **Interoperability**
3. **Order Management**

## Our Approach

The Beckn protocol facilitates interactions between buyers and sellers across various digital platforms, allowing small businesses to become part of a larger e-commerce ecosystem. It standardizes how services are discovered, ordered, fulfilled, and paid for.

### Platform Structure

1. **Registration of Small Businesses:**
   - Small businesses (sellers) can register on our platform by providing details like their business name, website, products/services, and contact information.
   - Registration is streamlined through API calls for easy onboarding without complex integrations.

2. **API Integration:**
   - After registration, businesses can integrate through API requests. Our platform offers APIs to:
     - Manage catalogs (products/services).
     - Receive and manage customer orders.
     - Get notifications about orders, deliveries, and payments.
     - Update stock/service availability in real time.
     - Securely handle payments through payment gateways.

3. **E-commerce Features:**
   - **Product listing and discovery:** Buyers can search for products or services.
   - **Order management:** Sellers can accept or reject orders based on availability.
   - **Payment gateway integration:** Customers can pay directly via the platform.
   - **Delivery management:** Sellers can manage deliveries or use integrated third-party services.

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- RTK Query

### Backend
- Express.js
- Node.js
- MongoDB
- Mongoose

## Features

- Beckn Protocol integration for standardized e-commerce interactions.
- Decentralized marketplace connecting buyers and sellers.
- Efficient discovery and matching system.
- Seamless interoperability across platforms.
- Robust order management system.
- Multi-lingual support.

## Prerequisites

Ensure you have the following before starting:
- **Node.js** (v14.0.0 or later)
- **npm** (v6.0.0 or later)
- **MongoDB** (Installed and running)

## Installation

Follow these steps to set up your development environment:

1. Clone the repository:
   ```bash
   git clone https://github.com/nitkhackathon2024-4/NITK-Algorythms.git
   cd NITK-Algorythms

2. Set up and start the BAP (Beckn Application Platform)
   ```
   cd BAP
   npm install
   npm run dev
   ```

3. Set up and start the BG (Beckn Gateway)
   ```
   cd ../BG-gateway
   npm install
   npm run dev
   ```

4. Set up and start the BPP Provider (Backend 1)
   ```
   cd ../BPP-provider/backend1
   npm install
   npm run dev
   ```

5. Set up and start the client application
   ```
   cd ../client/BecknPortal
   npm install
   npm run dev
   ```

After completing these steps, open your web browser and navigate to `http://localhost:5173` to see the application.



## Acknowledgements

- [Beckn Protocol](https://beckn.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
