create database students_db;

use students_db;

create table user
(
    id_banner       varchar(9) not null,
    name            varchar(20) not null,
    lastname        varchar(20) not null,
    username        varchar(20) not null,
    password        varchar(255) not null,
    email           varchar(30) not null,
    phone           varchar(10) not null,
    roles           varchar(50) not null,
    primary key (id_banner)
);

INSERT INTO user VALUES 
('L00384629','Kevin','Chuquimarca','kevin0936','$2a$10$uMj49tQD69tjbrFF2BhoZe7xuo352I0aQ6Q7Thh3dMhgtKa6AyKBq','kschuquimarca@espe.edu.ec','0984991746','ROLE_ADMIN'),
('L00384630','Marco','Iza','maiza','$2a$10$t0UGtiWAGO/xdfrUOP8ni.UYVTag4o8JxuPshuwLe..eXbkoUMkjG','maiza@espe.edu.ec','0984991746','ROLE_USER');
