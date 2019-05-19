using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Sql;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;

namespace WebapplicationTest_TrackingWorld.Classes
{
    public class Connection
    {

        string connectionString = ConfigurationManager.ConnectionStrings["dbConnections"].ConnectionString;
        string connectionStringMaster = ConfigurationManager.ConnectionStrings["dbConnectionsMaster"].ConnectionString;

        public SqlConnection con;
        public SqlConnection conMaster;
        public SqlCommand cmd;
        public Connection()
        {
            con = new SqlConnection(connectionString);
            conMaster = new SqlConnection(connectionStringMaster);
        }

        public DataTable dbSelect(string Query)
        {
            cmd = new SqlCommand(Query, conMaster);
            cmd.CommandText = Query;
            conMaster.Open();
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            conMaster.Close();
            DataTable dt = new DataTable();
            sda.Fill(dt); 
            return dt;
        }

        public string dbCreateTble(string Query)
        {
            cmd = new SqlCommand(Query,con);
            cmd.CommandText = Query;
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
            return "Done";
        }

        public DataTable Select(string Query)
        { 
            cmd = new SqlCommand(Query,con); 
            cmd.CommandText = Query;
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            sda.Fill(dt);
            //DataTable dt= new DataTable();
            return dt;
        }

        public string BulkInsert(DataTable dt, DataTable ColumnMapping,string DestinationTbl)
        {
            using (SqlBulkCopy sqlBulkCopy = new SqlBulkCopy(con))
            {
                //Set the database table name
                sqlBulkCopy.DestinationTableName = DestinationTbl;

                sqlBulkCopy.ColumnMappings.Add("RegNo", "RegNo");
                sqlBulkCopy.ColumnMappings.Add("Make", "Make");
                sqlBulkCopy.ColumnMappings.Add("Model", "Model");
                sqlBulkCopy.ColumnMappings.Add("Color", "Color");
                sqlBulkCopy.ColumnMappings.Add("EngineNo", "EngineNo");
                sqlBulkCopy.ColumnMappings.Add("ChasisNo", "ChasisNo");
                sqlBulkCopy.ColumnMappings.Add("DateOfPurchase", "DateOfPurchase");
                sqlBulkCopy.ColumnMappings.Add("Active", "Active");


                con.Open();                        
                sqlBulkCopy.WriteToServer(dt);     
                con.Close();                       
            }                                      
                                                   

            return "";
        }

}
}