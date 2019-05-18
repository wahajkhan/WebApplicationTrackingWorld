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
      
        public DataTable DAL_VehicleData()
        {
            
            DataTable dt = new DataTable();
            return  Select("select * from [fleet].[dbo].[Vehicle]"); 
        }

    }
}