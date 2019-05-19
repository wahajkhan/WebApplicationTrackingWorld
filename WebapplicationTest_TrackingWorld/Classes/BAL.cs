using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using WebapplicationTest_TrackingWorld.Classes;

namespace WebapplicationTest_TrackingWorld.Classes
{
    public class BAL : DAL
    {
        public void BAL_DB_Checker()
        {
            DAL_db_Check();
            DAL_tbl_Check_Create();
        }


        public DataTable BAL_VehicleData()
        {
            return DAL_VehicleData();
        }
    }
}