CREATE DATABASE budget;


CREATE TABLE expanse (
	expanse_id serial primary key,
	expanse_name varchar(128) not null,
	expanse_cost int not null,
	expanse_date timestamptz default current_timestamp
);

CREATE TABLE income (
	income_id serial primary key,
	income_name varchar(128) not null,
	income_cost int not null,
	income_date timestamptz default current_timestamp
);

INSERT INTO expanse (expanse_name, expanse_cost) VALUES ('ovqat', 500);
INSERT INTO expanse (expanse_name, expanse_cost) VALUES ('kvartira', 1200);