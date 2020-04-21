CREATE DATABASE IPBCAPELA;

USE IPBCAPELA;

CREATE TABLE IF NOT EXISTS sermon (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    passage VARCHAR(255) NOT NULL,
    preacher_name VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    script TEXT,
    PRIMARY KEY (id)
)  ENGINE=INNODB;


CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,

    PRIMARY KEY (id)
)  ENGINE=INNODB;



id: number;
title: string;
passage: string;
preacher_name: string;
url: string;
script: string;
