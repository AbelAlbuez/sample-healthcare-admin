using System;
using sample.healthcare.domain.Entities;

namespace sample.healthcare.domain.Repositories
{
    public interface IPatientRepository
    {
        Task<List<Patient>> GetAllAsync();
        Task<Patient> GetAsync(int patientID);
        Task AddAsync(Patient patient);
        Task UpdateAsync(Patient patient);
        Task DeleteAsync(Patient patient);
    }
}

