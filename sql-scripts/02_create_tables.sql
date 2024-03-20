USE HealthcareAdminDB;
GO

CREATE TABLE Patient (
    PatientID INT PRIMARY KEY IDENTITY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    DateOfBirth DATE,
    PatientStatus INT
);

CREATE TABLE City (
    CityId INT PRIMARY KEY IDENTITY,
    CityName NVARCHAR(50)
);

CREATE TABLE State (
    StateId INT PRIMARY KEY IDENTITY,
    CityId INT FOREIGN KEY REFERENCES City(CityId),
    StateName NVARCHAR(50)
);

CREATE TABLE PatientAddress (
    Id INT PRIMARY KEY IDENTITY,
    PatientId INT FOREIGN KEY REFERENCES Patient(PatientID),
    Line1 NVARCHAR(100),
    Line2 NVARCHAR(100),
    CityId INT FOREIGN KEY REFERENCES City(CityId),
    StateId INT FOREIGN KEY REFERENCES State(StateId),
    ZipCode NVARCHAR(20)
);

GO
