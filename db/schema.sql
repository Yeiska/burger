
create database burgers_db;
use burgers_db;

create table burgers (
    id integer not null AUTO_INCREMENT,
    burger_name varchar (50) not null,
    devoured Boolean DEFAULT false,
    primary key (id)
);