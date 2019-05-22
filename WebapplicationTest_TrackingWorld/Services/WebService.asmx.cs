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

        [WebMethod]
        public string VehilceDataUpdate(object data)
        {
            string res= new BAL().BAL_VehicleUpdate(data);
            return res;
        }

        [WebMethod]
        public string VehilceDataDelete(object data)
        {
            string res = new BAL().BAL_VehicleDelete(data);
            return res;
        }
        [WebMethod]
        public string VehilceDataAdd(object data)
        {
            string res = new BAL().BAL_VehicleAdd(data);
            return res;
        }
    }
}
