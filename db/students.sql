create table user
(
    id_banner       varchar(9) primary key not null,
    name     varchar(20)            not null,
    lastname varchar(20)            not null,
    username varchar(20)            not null,
    password varchar(255)           not null,
    email    varchar(30)            not null,
    phone    varchar(10)            not null,
    roles    varchar(50)            not null,
)
