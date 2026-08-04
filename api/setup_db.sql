-- Run this in phpMyAdmin to create the community table
CREATE TABLE IF NOT EXISTS community_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    institution_name VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    whatsapp_number VARCHAR(50),
    estimated_users INT DEFAULT 0,
    instance_url VARCHAR(255),
    is_public BOOLEAN DEFAULT FALSE,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
