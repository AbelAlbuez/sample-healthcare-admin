using System;
namespace sample.healthcare.domain.Entities
{
    public class PatientAddress
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public required string Line1 { get; set; }
        public string? Line2 { get; set; }
        public int CityId { get; set; }
        public int StateId { get; set; }
        public required string ZipCode { get; set; }
    }
}

