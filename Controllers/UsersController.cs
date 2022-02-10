using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenericRHSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private static readonly string[] Genders = new[]
        {
            "Masculino", "Masculino", "Femenino", "Femenino", "Masculino", "Femenino", "Masculino", "Femenino", "Masculino", "Femenino"
        };

        private static readonly string[] UserName = new[]
        {
            "Pablo", "Pedro", "José", "Alex", "Juana", "Josefina", "Edith", "Mario"
        };

        private readonly ILogger<UsersController> _logger;

        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<TableUsersModel> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new TableUsersModel
            {
                intId = rng.Next(0, 100),
                strUserName = UserName[rng.Next(UserName.Length)],
                strEmail = "test@gmail.com",
                strGender = Genders[rng.Next(Genders.Length)],
                boolStatus = true

            })
            .ToArray();
        }
    }
}
