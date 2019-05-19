using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using WebapplicationTest_TrackingWorld.Classes;
namespace WebapplicationTest_TrackingWorld.Classes
{
    public class DAL :Connection
    {
        public DataTable DAL_db_Check()
        {
            DataTable dt = new DataTable(); 
            dt =dbSelect(new Queries().dbCheck_Query()); 
            return dt;
        }
        public void DAL_tbl_Check_Create()
        {
            dbCreateTble(new Queries().tblCheckAndCreate_Query()); 
        }


        public DataTable DAL_VehicleData()
        { 
            DataTable dt = Select("select * from [fleet].[dbo].[Vehicle]");
            return dt;
        }

    }
}