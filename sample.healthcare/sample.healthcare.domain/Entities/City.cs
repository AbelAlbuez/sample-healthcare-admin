﻿using System;
namespace sample.healthcare.domain.Entities
{
    public record City
    {
        public int CityId { get; set; }
        public required string CityName { get; set; }
    }
}

