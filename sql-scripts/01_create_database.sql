USE master
go

if not exists (
    select [name]
    from sys.databases
    where [name] = N'HealthcareAdminDB'
)
create database HealthcareAdminDB
go