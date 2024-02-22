create database books_db;

use books_db;

/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2/20/2024 12:00:01 PM                        */
/*==============================================================*/


drop table if exists author;

drop table if exists book;

drop table if exists loan;

/*==============================================================*/
/* Table: author                                                */
/*==============================================================*/
create table author
(
   id                   int not null auto_increment,
   name                 varchar(30) not null,
   lastname             varchar(30) not null,
   primary key (id)
);

/*==============================================================*/
/* Table: book                                                  */
/*==============================================================*/
create table book
(
   isbn                 varchar(17) not null,
   id                   int not null,
   title                varchar(50) not null,
   primary key (isbn)
);

/*==============================================================*/
/* Table: loan                                                  */
/*==============================================================*/
create table loan
(
   cod                  int not null auto_increment,
   isbn                 varchar(13) not null,
   date_loan            date not null,
   date_return          date not null,
   state                varchar(20) not null,
   id_banner            varchar(9) not null,
   primary key (cod)
);

alter table book add constraint fk_have foreign key (id)
      references author (id) on delete restrict on update restrict;

alter table loan add constraint fk_loan foreign key (isbn)
      references book (isbn) on delete restrict on update restrict;


insert into author (name, lastname)
values ('Jane', 'Austen'),
       ('Pablo', 'Neruda'),
       ('Márquez', 'García');

insert into book
values ('978-1-5011-9697-9', 1, 'Orgullo y prejuicio'),
       ('978-1-5011-9695-5', 1, 'Sentido y sensibilidad'),
       ('978-1-5011-9696-2', 1, 'Emma'),
       ('978-1-59017-046-6', 2, 'Veinte poemas de amor y una canción desesperada'),
       ('978-0-307-27941-6', 3, 'Cien años de soledad'),
       ('978-0-307-38743-5', 3, 'El amor en los tiempos del cólera'),
       ('978-0-307-38744-2', 3, 'El otoño del patriarca');
