using System;
using sample.healthcare.domain.Data;
using System.Data;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Repositories;
using Dapper;

namespace sample.healthcare.infrastructure.Repositories
{
    public class CityRepository : ICityRepository
    {
        private readonly IDbConnection _connection;

        public CityRepository(IDapperConfiguration dapperConfiguration)
        {
            _connection = dapperConfiguration.GetSqlConnection();
        }

        public async Task AddAsync(City city)
        {
            string query = @"INSERT INTO City (Name) VALUES (@Name)";
            await _connection.ExecuteAsync(query, city);
        }

        public async Task DeleteAsync(City city)
        {
            string query = "DELETE FROM City WHERE CityId = @CityId";
            await _connection.ExecuteAsync(query, city);
        }

        public async Task<City> GetAsync(int cityId)
        {
            string query = "SELECT * FROM City WHERE CityId = @CityId";
            return await _connection.QueryFirstOrDefaultAsync<City>(query, new { CityId = cityId });
        }

        public async Task UpdateAsync(City city)
        {
            string query = @"UPDATE City SET Name = @Name WHERE CityId = @CityId";
            await _connection.ExecuteAsync(query, city);
        }
    }
}

