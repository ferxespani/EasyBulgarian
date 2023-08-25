using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;

namespace EasuBulgarian
{
    public static class HttpFunctions
    {
        [FunctionName(nameof(GetVideoFromBlobStorage))]
        public static async Task<IActionResult> GetVideoFromBlobStorage(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest request,
            ILogger logger)
        {
            var name = Environment.GetEnvironmentVariable("Name");
            return new OkObjectResult(name);
        }
    }
}
