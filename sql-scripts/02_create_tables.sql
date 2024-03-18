USE HealthcareAdminDB;
GO

CREATE TABLE Patient (
    PatientID INT PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    DateOfBirth DATE
);

CREATE TABLE City (
    CityId INT PRIMARY KEY,
    Name NVARCHAR(50)
);

CREATE TABLE State (
    StateId INT PRIMARY KEY,
    CityId INT FOREIGN KEY REFERENCES City(CityId),
    Name NVARCHAR(50)
);

CREATE TABLE PatientAddress (
    Id INT PRIMARY KEY,
    PatientId INT FOREIGN KEY REFERENCES Patient(PatientID),
    Line1 NVARCHAR(100),
    Line2 NVARCHAR(100),
    CityId INT FOREIGN KEY REFERENCES City(CityId),
    StateId INT FOREIGN KEY REFERENCES State(StateId),
    ZipCode NVARCHAR(20)
);

GO
