using System;
using System.Data;

namespace sample.healthcare.domain.Data
{
    public interface IDapperConfiguration
    {
        IDbConnection GetSqlConnection();
    }
}

