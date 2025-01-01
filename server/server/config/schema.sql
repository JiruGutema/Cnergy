create database Cnergy;
use Cnergy;

create TABLE user_form (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
   
);