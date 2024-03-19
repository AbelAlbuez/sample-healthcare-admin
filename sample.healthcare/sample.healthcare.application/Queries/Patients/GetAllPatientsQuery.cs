using MediatR;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Repositories;

namespace sample.healthcare.application.Queries.Patients
{
    public class GetAllPatientsQuery : IRequest<List<Patient>>
    {
        public class Handler : IRequestHandler<GetAllPatientsQuery, List<Patient>>
        {
            private readonly IPatientRepository _patientRepository;

            public Handler(IPatientRepository patientRepository)
            {
                _patientRepository = patientRepository;
            }

            public async Task<List<Patient>> Handle(GetAllPatientsQuery request, CancellationToken cancellationToken)
            {
                return await _patientRepository.GetAllAsync();
            }
        }
    }

}

