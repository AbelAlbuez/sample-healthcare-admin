using System;
using MediatR;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Repositories;

namespace sample.healthcare.application.Commands.Patients
{
    public class UpdatePatientCommand : IRequest<bool>
    {
        public int PatientId { get; }
        public string FirstName { get; }
        public string LastName { get; }
        public DateTime DateOfBirth { get; }

        public UpdatePatientCommand(int patientId, string firstName, string lastName, DateTime dateOfBirth)
        {
            PatientId = patientId;
            FirstName = firstName;
            LastName = lastName;
            DateOfBirth = dateOfBirth;
        }

        public class Handler : IRequestHandler<UpdatePatientCommand, bool>
        {
            private readonly IPatientRepository _patientRepository;

            public Handler(IPatientRepository patientRepository)
            {
                _patientRepository = patientRepository;
            }

            public async Task<bool> Handle(UpdatePatientCommand request, CancellationToken cancellationToken)
            {
                var patient = await _patientRepository.GetAsync(request.PatientId);
                if (patient == null)
                {
                    return false;
                }

                var updatedPatient = new Patient
                {
                    PatientID = patient.PatientID,
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    DateOfBirth = request.DateOfBirth
                };

                await _patientRepository.UpdateAsync(updatedPatient);

                return true;
            }
        }
    }
}

