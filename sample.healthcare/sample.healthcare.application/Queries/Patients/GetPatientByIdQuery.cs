using MediatR;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Repositories;

namespace sample.healthcare.application.Queries.Patients
{
    public class GetPatientByIdQuery : IRequest<PatientWithAddress>
    {
        public int PatientId { get; }

        public GetPatientByIdQuery(int patientId)
        {
            PatientId = patientId;
        }

        public class Handler : IRequestHandler<GetPatientByIdQuery, PatientWithAddress>
        {
            private readonly IPatientRepository _patientRepository;
            private readonly IPatientAddressRepository _patientAddressRepository;

            public Handler(IPatientRepository patientRepository, IPatientAddressRepository patientAddressRepository)
            {
                _patientRepository = patientRepository;
                _patientAddressRepository = patientAddressRepository;
            }

            public async Task<PatientWithAddress> Handle(GetPatientByIdQuery request, CancellationToken cancellationToken)
            {
                var patientId = request.PatientId;

                var patient = await _patientRepository.GetAsync(patientId);
                if (patient == null)
                    return null; // Puedes lanzar una excepción si lo prefieres

                var patientAddress = await _patientAddressRepository.GetByPatientIdAsync(patientId);

                return new PatientWithAddress
                {
                    Patient = patient,
                    Address = patientAddress
                };
            }
        }
    }

    public class PatientWithAddress
    {
        public required Patient Patient { get; set; }
        public required PatientAddress Address { get; set; }
    }

}

