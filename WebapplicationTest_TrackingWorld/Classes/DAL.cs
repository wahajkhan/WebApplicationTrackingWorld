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
            DataTable dt = Select(@"SELECT [VehicleID]
      ,[RegNo]
      ,[Make]
      ,[Model]
      ,[Color]
      ,[EngineNo]
      ,[ChasisNo]
      ,[DateOfPurchase]
      ,case when Active = 0 then
      '0' else '1' end Active
  FROM [fleet].[dbo].[Vehicle]");
            return dt;
        }

        public string DAL_VehicleUpdate(Dictionary<string,object> Dic)
        {
            DML_Command(
" update [fleet].dbo.Vehicle       "+
" set RegNo='"+Dic["Regno"].ToString()+"',"+
" 	Make='" + Dic["Make"].ToString() + "',           " +
" 	Model='" + Dic["Modal"].ToString() + "',          " +
" 	Color='" + Dic["Color"].ToString() + "',          " +
" 	EngineNo='" + Dic["Engineno"].ToString() + "',       " +
" 	ChasisNo='" + Dic["Chasisno"].ToString() + "',       " +
" 	DateOfPurchase='" + Dic["Dop"].ToString() + "', " +
" 	Active='" + Dic["status"].ToString() + "'          " +
" 	where VehicleID='" + Dic["id"].ToString() + "'");

            return "update";
        }


        public string DAL_VehicleDelete(Dictionary<string, object> Dic)
        {
            DML_Command(" delete [fleet].dbo.Vehicle where VehicleID = '"+Dic["id"].ToString()+"'");
            return "delete";
        }
        public string DAL_VehicleAdd(Dictionary<string, object> Dic)
        {
            DML_Command("insert into [fleet].dbo.[Vehicle] (RegNo,Make,Model,Color,EngineNo,ChasisNo,DateOfPurchase,Active)"+
"values('"+Dic["Regno"].ToString()+ "', '" + Dic["Make"].ToString() + "', '" + Dic["Modal"].ToString() + "','" + Dic["Color"].ToString() + "' ,'" + Dic["Engineno"].ToString() + "' ,'" + Dic["Chasisno"].ToString() + "' , '" + Dic["Dop"].ToString() + "','" + Dic["status"].ToString() + "' )");
            return "save";
        }

    }

}