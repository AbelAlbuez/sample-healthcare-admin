using System;
using sample.healthcare.domain.Enums;

namespace sample.healthcare.domain.Entities
{
    public record Patient
    {
        public int PatientID { get; init; }
        public required string FirstName { get; init; }
        public required string LastName { get; init; }
        public DateTime DateOfBirth { get; init; }
        public required PatientStatus PatientStatus { get; init; }
    }
}

