/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2/20/2024 12:00:01 PM                        */
/*==============================================================*/


drop table if exists AUTHOR;

drop table if exists BOOK;

drop table if exists LOAN;

/*==============================================================*/
/* Table: AUTHOR                                                */
/*==============================================================*/
create table AUTHOR
(
   ID_AUTHOR            int not null auto_increment,
   NAME                 varchar(30),
   LASTNAME             varchar(30),
   primary key (ID_AUTHOR)
);

/*==============================================================*/
/* Table: BOOK                                                  */
/*==============================================================*/
create table BOOK
(
   ISBN                 varchar(13) not null,
   ID_AUTHOR            int not null,
   TITLE                varchar(50),
   primary key (ISBN)
);

/*==============================================================*/
/* Table: LOAN                                                  */
/*==============================================================*/
create table LOAN
(
   COD                  int not null auto_increment,
   ISBN                 varchar(13) not null,
   DATE_LOAN            date,
   DATE_RETURN          date,
   STATE                varchar(20),
   ID_BANNER            varchar(9) not null,
   primary key (COD)
);

alter table BOOK add constraint FK_HAVE foreign key (ID_AUTHOR)
      references AUTHOR (ID_AUTHOR) on delete restrict on update restrict;

alter table LOAN add constraint FK_LOAN foreign key (ISBN)
      references BOOK (ISBN) on delete restrict on update restrict;

