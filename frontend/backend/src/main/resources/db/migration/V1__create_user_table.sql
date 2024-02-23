CREATE TABLE user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_type_id BIGINT,
    FOREIGN KEY (user_type_id) REFERENCES user_type(id)
);
