CREATE DATABASE IF NOT EXISTS movdb;
USE movdb;

CREATE TABLE movies (
    ID int NOT NULL,
    movieTitle varchar(50),
    movieDate DATE,
    moviePlatform varchar(50),
    genreID int,
    studioID int,
    PRIMARY KEY (ID)
)

CREATE TABLE movieGenres (
    ID int,
    fk_movieID int,
    fk_genreID int,
    PRIMARY KEY (ID),
    ADD FOREIGN KEY (fk_movieID) REFERENCES movies(ID),
    ADD FOREIGN KEY (fk_genreID) REFERENCES genres(ID)
)

CREATE TABLE genres (
    ID int,
    genreName varchar(100),
    PRIMARY KEY (ID)
)

CREATE TABLE movieStudios (
    ID int,
    fk_movieID int,
    fk_studioID int,
    PRIMARY KEY (ID),
    ADD FOREIGN KEY (fk_movieID) REFERENCES movies(ID),
    ADD FOREIGN KEY (fk_studioID) REFERENCES studios(ID)

)

CREATE TABLE studios (
    ID int,
    studioName varchar(100),
    studioCountry varchar(100),
    PRIMARY KEY (ID)
)