USE HealthcareAdminDB;
GO
DECLARE @Counter INT = 1

WHILE @Counter <= 1000000
BEGIN
    INSERT INTO Patient (FirstName, LastName, DateOfBirth, PatientStatus)
    VALUES ('PatientFirstName' + CONVERT(VARCHAR(10), @Counter),
            'PatientLastName' + CONVERT(VARCHAR(10), @Counter),
            DATEADD(DAY, -RAND() * 365 * 100, GETDATE()), -- Fecha de nacimiento aleatoria en los últimos 100 años
            1)
    SET @Counter = @Counter + 1
END
GO