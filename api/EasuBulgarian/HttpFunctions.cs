using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.IO;
using Azure.Storage.Blobs;
using System.Reflection.Metadata;

namespace EasuBulgarian
{
    public static class HttpFunctions
    {
        [FunctionName(nameof(GetVideoFromBlobStorage))]
        public static async Task<IActionResult> GetVideoFromBlobStorage(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "videos/{name}")] HttpRequest request,
            [Blob("videos/{name}", FileAccess.Read, Connection = "StorageConnection")] Stream video,
            string name,
            ILogger logger)
        {
            byte[] bytes = new byte[video.Length];

            video.Read(bytes, 0, bytes.Length);
            video.Seek(0, SeekOrigin.Begin);

            return new FileContentResult(bytes, "video/mp4");
        }
    }
}
