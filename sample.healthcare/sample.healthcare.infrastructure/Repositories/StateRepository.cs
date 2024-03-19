using System;
using sample.healthcare.domain.Data;
using System.Data;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Repositories;
using Dapper;

namespace sample.healthcare.infrastructure.Repositories
{
    public class StateRepository : IStateRepository
    {
        private readonly IDbConnection _connection;

        public StateRepository(IDapperConfiguration dapperConfiguration)
        {
            _connection = dapperConfiguration.GetSqlConnection();
        }

        public async Task AddAsync(State state)
        {
            string query = @"INSERT INTO State (CityId, Name) VALUES (@CityId, @Name)";
            await _connection.ExecuteAsync(query, state);
        }

        public async Task DeleteAsync(State state)
        {
            string query = "DELETE FROM State WHERE StateId = @StateId";
            await _connection.ExecuteAsync(query, state);
        }

        public async Task<State> GetAsync(int stateId)
        {
            string query = "SELECT * FROM State WHERE StateId = @StateId";
            return await _connection.QueryFirstOrDefaultAsync<State>(query, new { StateId = stateId });
        }

        public async Task UpdateAsync(State state)
        {
            string query = @"UPDATE State SET CityId = @CityId, Name = @Name WHERE StateId = @StateId";
            await _connection.ExecuteAsync(query, state);
        }
    }
}

