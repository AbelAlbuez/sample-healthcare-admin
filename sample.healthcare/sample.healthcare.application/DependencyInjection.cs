
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace sample.healthcare.application
{
    public static class DependencyInjection
    {
        #region Services Injection
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            var assembly = Assembly.GetExecutingAssembly();
            return services.AddMediatR(assembly);
        }
        #endregion

    }
}

