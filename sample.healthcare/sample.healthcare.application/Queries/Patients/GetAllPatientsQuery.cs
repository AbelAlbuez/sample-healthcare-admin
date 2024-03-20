using MediatR;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Repositories;

namespace sample.healthcare.application.Queries.Patients
{
    public class GetAllPatientsQuery : IRequest<IEnumerable<Patient>>
    {
        public int Skip { get; set; }
        public int Take { get; set; }

        public class GetAllPatientsQueryHandler : IRequestHandler<GetAllPatientsQuery, IEnumerable<Patient>>
        {
            private readonly IPatientRepository _patientRepository;

            public GetAllPatientsQueryHandler(IPatientRepository patientRepository)
            {
                _patientRepository = patientRepository;
            }

            public async Task<IEnumerable<Patient>> Handle(GetAllPatientsQuery request, CancellationToken cancellationToken)
            {
                return await _patientRepository.GetPatientsAsync( request.Skip, request.Take );
            }
        }
    }
}

