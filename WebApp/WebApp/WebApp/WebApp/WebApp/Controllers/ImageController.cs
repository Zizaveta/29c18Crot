using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApp.Models;

namespace WebApp.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class ImageController : ApiController
    {
        private readonly ApplicationDbContext _context;
        public ImageController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET api/values
        public IHttpActionResult Get()
        {
            var folder = @"C:\Users\Renzhyna\29c18Crot\WebApp\WebApp\WebApp\WebApp\WebApp\ImagesList\"; //Url.Content(ConfigurationManager.AppSettings["ImagePath"]);
            var model = _context.Images
                .Select(g => new Image
                {
                    Id = g.Id,
                    ImageName = folder + g.ImageName,
                    DateCreate = g.DateCreate,
                    Author = g.Author,
                    Description = g.Description,
                    Likes = g.Likes                  
                }).ToList();

            return Content(HttpStatusCode.OK, model);
        }
        public IHttpActionResult PostAdd(Image model)
        {
            if (ModelState.IsValid)
            {
                string uniqueName = String.Empty;
                string imagePath = String.Empty;
                uniqueName = Guid.NewGuid().ToString() + ".jpeg";
                imagePath = HttpContext.Current.Server
                    .MapPath(ConfigurationManager.AppSettings["ImagePath"])
                    + uniqueName;
                string base64 = model.ImageName.Split(',')[1];
                byte[] imageBytes = Convert.FromBase64String(base64);
                File.WriteAllBytes(imagePath, imageBytes);
                Image img = new Image()
                {
                    ImageName = uniqueName,
                    Description = model.Description,
                    DateCreate = DateTime.Now,
                    Author = null,
                };
                _context.Images.Add(img);
                _context.SaveChanges();

                var folder = @"C:\Users\Renzhyna\29c18Crot\WebApp\WebApp\WebApp\WebApp\WebApp\ImagesList\"; //Url.Content(ConfigurationManager.AppSettings["ImagePath"]);
                var image = folder + uniqueName;
                Image responseModel = new Image()
                {
                    Id = img.Id,
                    Description = img.Description,
                   // image = image
                };
                return Content(HttpStatusCode.OK, responseModel);
            }

            //var errors = new ExpandoObject() as IDictionary<string, object>;
            var errors = new Dictionary<string, string>();

            var errorList = ModelState
                .Where(x => x.Value.Errors.Count > 0)
                .ToDictionary(
                    kvp => kvp.Key,
                    kvp => kvp.Value.Errors.Select(e => e.ErrorMessage).ToArray()[0]
                );
            foreach (var item in errorList)
            {
                var key = item.Key.Split('.')[1];
                errors.Add(key, item.Value);
            }
            return Content(HttpStatusCode.BadRequest, errors);
        }
      
    }
}
