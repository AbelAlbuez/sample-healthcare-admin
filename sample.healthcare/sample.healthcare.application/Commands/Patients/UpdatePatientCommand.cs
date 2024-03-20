using System;
using System.Net.NetworkInformation;
using MediatR;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Enums;
using sample.healthcare.domain.Repositories;

namespace sample.healthcare.application.Commands.Patients
{
    public class UpdatePatientCommand : IRequest<bool>
    {
        public int PatientId { get; }
        public string FirstName { get; }
        public string LastName { get; }
        public DateTime DateOfBirth { get; }
        public PatientStatus PatientStatus { get; }

        public UpdatePatientCommand(int patientId, string firstName, string lastName, DateTime dateOfBirth, PatientStatus patientStatus)
        {
            PatientId = patientId;
            FirstName = firstName;
            LastName = lastName;
            DateOfBirth = dateOfBirth;
            PatientStatus = patientStatus;
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
                    DateOfBirth = request.DateOfBirth,
                    PatientStatus = request.PatientStatus
                };

                await _patientRepository.UpdateAsync(updatedPatient);

                return true;
            }
        }
    }
}

