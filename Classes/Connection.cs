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
        SqlConnection con=new SqlConnection(ConfigurationManager.ConnectionStrings["dbConnection"].ConnectionString); 
        public Connection()
        {
            //con = new SqlConnection(conString);
            //con=new SqlConnection(conString);
            //con = new SqlConnection(ConfigurationManager.ConnectionStrings["dbConnection"].ConnectionString.ToString());
            //cmd = new SqlCommand();

            //dt= new DataTable();

        }

        public DataTable Select(string Query)
        {
            SqlCommand cmd = new SqlCommand(Query,con);//new SqlConnection(ConfigurationManager.ConnectionStrings["dbConnection"].ConnectionString.ToString());
            cmd.CommandText = Query;
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            sda.Fill(dt);
            //DataTable dt= new DataTable();
            return dt;
        }


}
}