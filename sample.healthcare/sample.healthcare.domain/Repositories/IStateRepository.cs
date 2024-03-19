using System;
using sample.healthcare.domain.Entities;

namespace sample.healthcare.domain.Repositories
{
    public interface IStateRepository
    {
        Task<State> GetAsync(int stateId);
        Task AddAsync(State state);
        Task UpdateAsync(State state);
        Task DeleteAsync(State state);
    }
}

