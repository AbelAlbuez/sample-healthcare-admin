using System;
using System.Data;
using Dapper;
using sample.healthcare.domain.Data;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Repositories;

namespace sample.healthcare.infrastructure.Repositories
{
	public class PatientAddressRepository : IPatientAddressRepository
    {
        private readonly IDbConnection _connection;

        public PatientAddressRepository(IDapperConfiguration dapperConfiguration)
        {
            _connection = dapperConfiguration.GetSqlConnection();
        }

        public async Task AddAsync(PatientAddress address)
        {
            string query = @"INSERT INTO PatientAddress (PatientId, Line1, Line2, CityId, StateId, ZipCode) 
                         VALUES (@PatientId, @Line1, @Line2, @CityId, @StateId, @ZipCode)";
            await _connection.ExecuteAsync(query, address);
        }

        public async Task DeleteAsync(PatientAddress address)
        {
            string query = "DELETE FROM PatientAddress WHERE Id = @Id";
            await _connection.ExecuteAsync(query, address);
        }

        public async Task UpdateAsync(PatientAddress address)
        {
            string query = @"UPDATE PatientAddress 
                         SET Line1 = @Line1, Line2 = @Line2, CityId = @CityId, StateId = @StateId, ZipCode = @ZipCode
                         WHERE Id = @Id";
            await _connection.ExecuteAsync(query, address);
        }

        public async Task<PatientAddress> GetAsync(int addressId)
        {
            string query = "SELECT * FROM PatientAddress WHERE Id = @AddressId";
            return await _connection.QueryFirstOrDefaultAsync<PatientAddress>(query, new { AddressId = addressId });
        }

        public async Task<PatientAddress> GetByPatientIdAsync(int patientId)
        {
            string query = "SELECT * FROM PatientAddress WHERE PatientId = @PatientId";
            return await _connection.QueryFirstOrDefaultAsync<PatientAddress>(query, new { PatientId = patientId });
        }
    }
}

