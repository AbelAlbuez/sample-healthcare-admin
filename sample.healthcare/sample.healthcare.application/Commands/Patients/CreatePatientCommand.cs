﻿using System;
using MediatR;
using sample.healthcare.domain.Entities;
using sample.healthcare.domain.Enums;
using sample.healthcare.domain.Repositories;

namespace sample.healthcare.application.Commands.Patients
{

    public record CreatePatientParams(string FirstName, string LastName, DateTime DateOfBirth);

    public class CreatePatientCommand : IRequest<int>
    {
        public CreatePatientParams Parameters { get; }

        public CreatePatientCommand(CreatePatientParams parameters)
        {
            Parameters = parameters ?? throw new ArgumentNullException(nameof(parameters));
        }

        public class Handler : IRequestHandler<CreatePatientCommand, int>
        {
            private readonly IPatientRepository _patientRepository;

            public Handler(IPatientRepository patientRepository)
            {
                _patientRepository = patientRepository;
            }

            public async Task<int> Handle(CreatePatientCommand request, CancellationToken cancellationToken)
            {
                var firstName = request.Parameters.FirstName;
                var lastName = request.Parameters.LastName;
                var dateOfBirth = request.Parameters.DateOfBirth;

                var newPatient = new Patient
                {
                    FirstName = firstName,
                    LastName = lastName,
                    DateOfBirth = dateOfBirth,
                    PatientStatus = PatientStatus.Active
                };

                await _patientRepository.AddAsync(newPatient);

                return newPatient.PatientID;
            }
        }
    }
}

