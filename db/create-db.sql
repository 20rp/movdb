CREATE DATABASE IF NOT EXISTS movdb;
USE movdb;

CREATE TABLE movies (
    ID INT NOT NULL AUTO_INCREMENT,
    movieTitle VARCHAR(50),
    movieDate DATE,
    moviePlatform VARCHAR(50),
    genreID INT,
    studioID INT,
    PRIMARY KEY (ID)
);

CREATE TABLE genres (
    ID INT NOT NULL AUTO_INCREMENT,
    genreName VARCHAR(100),
    PRIMARY KEY (ID)
);

CREATE TABLE movieGenres (
    ID INT NOT NULL AUTO_INCREMENT,
    fk_movieID INT,
    fk_genreID INT,
    PRIMARY KEY (ID),
    FOREIGN KEY (fk_movieID) REFERENCES movies(ID),
    FOREIGN KEY (fk_genreID) REFERENCES genres(ID)
);

CREATE TABLE studios (
    ID INT NOT NULL AUTO_INCREMENT,
    studioName VARCHAR(100),
    studioCountry VARCHAR(100),
    PRIMARY KEY (ID)
);

CREATE TABLE movieStudios (
    ID INT NOT NULL AUTO_INCREMENT,
    fk_movieID INT,
    fk_studioID INT,
    PRIMARY KEY (ID),
    FOREIGN KEY (fk_movieID) REFERENCES movies(ID),
    FOREIGN KEY (fk_studioID) REFERENCES studios(ID)
);
