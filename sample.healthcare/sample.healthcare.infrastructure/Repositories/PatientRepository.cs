using System;
using System.Data;
using System.Data.Common;
using Dapper;
using sample.healthcare.domain.Data;
using sample.healthcare.domain.Entities;
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

        public async Task<List<Patient>> GetAllAsync()
        {
            string query = "SELECT * FROM Patient";
            return (await _connection.QueryAsync<Patient>(query)).ToList();
        }

        public async Task AddAsync(Patient patient)
        {
            string query = @"INSERT INTO Patient (FirstName, LastName, DateOfBirth) 
                         VALUES (@FirstName, @LastName, @DateOfBirth)";
            await _connection.ExecuteAsync(query, patient);
        }

        public async Task DeleteAsync(Patient patient)
        {
            string query = "DELETE FROM Patient WHERE PatientID = @PatientID";
            await _connection.ExecuteAsync(query, patient);
        }

        public async Task<Patient> GetAsync(int patientID)
        {
            string query = "SELECT * FROM Patient WHERE PatientID = @PatientID";
            return await _connection.QueryFirstOrDefaultAsync<Patient>(query, new { PatientID = patientID });
        }

        public async Task UpdateAsync(Patient patient)
        {
            string query = @"UPDATE Patient 
                         SET FirstName = @FirstName, LastName = @LastName, DateOfBirth = @DateOfBirth 
                         WHERE PatientID = @PatientID";
            await _connection.ExecuteAsync(query, patient);
        }
    }
}

