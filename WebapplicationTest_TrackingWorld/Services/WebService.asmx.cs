using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Newtonsoft.Json;
using WebapplicationTest_TrackingWorld.Classes;
using System.Data;

namespace WebapplicationTest_TrackingWorld.Services
{
    /// <summary>
    /// Summary description for WebService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WebService : System.Web.Services.WebService
    {
        [WebMethod]
        public string VehilceData()
        {
            DataTable dt=  new BAL().BAL_VehicleData();
            return JsonConvert.SerializeObject(dt);
        }
    }
}
