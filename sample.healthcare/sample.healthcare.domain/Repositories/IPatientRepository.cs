using System;
using sample.healthcare.domain.Entities;

namespace sample.healthcare.domain.Repositories
{
    public interface IPatientRepository
    {
        Task<IEnumerable<Patient>> GetPatientsAsync(int skip, int take);
        Task<Patient> GetAsync(int patientID);
        Task AddAsync(Patient patient);
        Task UpdateAsync(Patient patient);
    }
}

