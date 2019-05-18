using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using WebapplicationTest_TrackingWorld.Classes;

namespace WebapplicationTest_TrackingWorld.Classes
{
    public class BAL
    {
        DAL dal = new DAL();
        public DataTable BAL_VehicleData()
        {
            return dal.DAL_VehicleData();
        }
    }
}