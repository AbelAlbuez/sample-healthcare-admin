using System;
using System.Data;
using System.Data.Common;
using Dapper;
using sample.healthcare.domain.Data;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Enums;
using sample.healthcare.domain.Repositories;

namespace sample.healthcare.infrastructure.Repositories
{
    public class PatientRepository : IPatientRepository
    {
        private readonly IDbConnection _connection;

        public PatientRepository(IDapperConfiguration dapperConfiguration)
        {
            _connection = dapperConfiguration.GetSqlConnection();
        }

        public async Task<IEnumerable<Patient>> GetPatientsAsync(int skip, int take)
        {
            string query = @"
            SELECT *
            FROM Patient
            WHERE PatientStatus = 1
            ORDER BY PatientID
            OFFSET @Skip ROWS 
            FETCH NEXT @Take ROWS ONLY";

            return await _connection.QueryAsync<Patient>(query, new { Skip = skip, Take = take });
        }


        public async Task AddAsync(Patient patient)
        {
            string query = @"INSERT INTO Patient (FirstName, LastName, DateOfBirth, PatientStatus) 
                     VALUES (@FirstName, @LastName, @DateOfBirth, @PatientStatus)";

            await _connection.ExecuteAsync(query, new
            {
                patient.FirstName,
                patient.LastName,
                patient.DateOfBirth,
                patient.PatientStatus
            });
        }


        public async Task<Patient> GetAsync(int patientID)
        {
            string query = "SELECT * FROM Patient WHERE PatientID = @PatientID AND PatientStatus = @PatientStatus";
            return await _connection.QueryFirstOrDefaultAsync<Patient>(query, new { PatientID = patientID, PatientStatus = PatientStatus.Active });
        }

        public async Task UpdateAsync(Patient patient)
        {
            string query = @"UPDATE Patient 
                     SET FirstName = @FirstName, LastName = @LastName, DateOfBirth = @DateOfBirth, PatientStatus = @PatientStatus 
                     WHERE PatientID = @PatientID";

            await _connection.ExecuteAsync(query, new
            {
                patient.FirstName,
                patient.LastName,
                patient.DateOfBirth,
                patient.PatientStatus, 
                patient.PatientID
            });
        }
    }
}

