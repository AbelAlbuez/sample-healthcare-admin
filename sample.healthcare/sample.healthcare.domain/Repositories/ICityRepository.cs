using System;
using sample.healthcare.domain.Entities;

namespace sample.healthcare.domain.Repositories
{
    public interface ICityRepository
    {
        Task<City> GetAsync(int cityId);
        Task AddAsync(City city);
        Task UpdateAsync(City city);
        Task DeleteAsync(City city);
    }
}

