

# Transaction App

This is a simple transaction application built using **Node.js**, **Express**, **MySQL**, and a frontend with **HTML** and **CSS**. Users can add debit and credit transactions and view their transaction history.


## Features

- **Add Transactions**: Users can add debit and credit transactions.
- **View Transaction History**: Displays all transactions in a table format.
  
## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Frontend**: HTML, CSS, JavaScript
- **Tools**: Nodemon, MySQL2, Body-Parser

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/transaction-app.git
   cd transaction-app
   npm install
   
### Configure Database:

In your MySQL setup, create a new database called transactionapp.
Run the following SQL commands in MySQL to set up the transactions table:
sql
Copy code
CREATE DATABASE transactionapp;
USE transactionapp;

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `credit` varchar(20) DEFAULT NULL,
  `debit` varchar(20) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `date` datetime DEFAULT current_timestamp()
) 
Update the MySQL credentials in config/db.config.js.

### start server 
npm start


