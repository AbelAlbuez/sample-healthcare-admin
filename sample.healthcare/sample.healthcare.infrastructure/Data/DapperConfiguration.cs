using Microsoft.Extensions.Configuration;
using sample.healthcare.domain.Data;
using System.Data;
using System.Data.SqlClient;

namespace sample.healthcare.infrastructure.Data
{
    public class DapperConfiguration : IDapperConfiguration
    {
        private readonly IConfiguration _configuration;

        public DapperConfiguration(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IDbConnection GetSqlConnection()
        {
            string? connectionString = _configuration.GetConnectionString("DefaultConnection");

            if (connectionString == null)
            {
                throw new InvalidOperationException("The connection string is null.");
            }

            return new SqlConnection(connectionString);
        }
    }
}

