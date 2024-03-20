using System;
namespace sample.healthcare.domain.Entities
{
    public class State
    {
        public int StateId { get; set; }
        public int CityId { get; set; }
        public required string StateName { get; set; }
    }
}

