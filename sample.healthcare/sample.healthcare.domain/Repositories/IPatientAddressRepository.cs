using sample.healthcare.domain.Entities;

namespace sample.healthcare.domain.Repositories
{
    public interface IPatientAddressRepository
    {
        Task<PatientAddress> GetAsync(int addressId);
        Task AddAsync(PatientAddress address);
        Task UpdateAsync(PatientAddress address);
        Task DeleteAsync(PatientAddress address);
        Task<PatientAddress> GetByPatientIdAsync(int patientId);
    }
}

