using System;
using MediatR;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Repositories;

namespace sample.healthcare.application.Commands.Patients
{
    public class DeletePatientCommand : IRequest<bool>
    {
        public int PatientId { get; }

        public DeletePatientCommand(int patientId)
        {
            PatientId = patientId;
        }

        public class Handler : IRequestHandler<DeletePatientCommand, bool>
        {
            private readonly IPatientRepository _patientRepository;

            public Handler(IPatientRepository patientRepository)
            {
                _patientRepository = patientRepository;
            }

            public async Task<bool> Handle(DeletePatientCommand request, CancellationToken cancellationToken)
            {
                var patient = await _patientRepository.GetAsync(request.PatientId);
                var updatedPatient = new Patient
                {
                    PatientID = patient.PatientID,
                    FirstName = patient.FirstName,
                    LastName = patient.LastName,
                    DateOfBirth = patient.DateOfBirth,
                    PatientStatus = domain.Enums.PatientStatus.Disabled
                };
              

                if (patient == null)
                {
                    return false;
                }

                await _patientRepository.UpdateAsync(updatedPatient);

                return true;
            }
        }
    }
}

