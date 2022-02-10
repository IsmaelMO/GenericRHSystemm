using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenericRHSystem.Models
{
    public class UserModel
    {
        public int intId { get; set; }
        public string strUserName { get; set; }
        public string strEmail { get; set; }
        public string strPassword { get; set; }
        public bool boolStatus { get; set; }
        public string strGender { get; set; }
        public DateTime dateDateCreation { get; set; }

    }
}
