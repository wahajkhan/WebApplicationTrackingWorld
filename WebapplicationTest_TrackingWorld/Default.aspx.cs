using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using WebapplicationTest_TrackingWorld.Classes;
using System.IO;
using System.Configuration;
using System.Data.OleDb;
using System.Data.SqlClient;

namespace WebapplicationTest_TrackingWorld
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        { 
            new BAL().BAL_DB_Checker();
            preveiwbtn.Visible = false;
        }

        protected void Upload(object sender, EventArgs e)
        {
            try
            {

           
                string ConStr = "";
            string ext = Path.GetExtension(FileUpload1.FileName).ToLower();
            string path = Server.MapPath("~/Files/" + FileUpload1.FileName);
          
            FileUpload1.SaveAs(path);
            //Label1.Text = FileUpload1.FileName + "\'s Data showing into the GridView";
            if (ext.Trim() == ".xls")
            {
                ConStr = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + path + ";Extended Properties=\"Excel 8.0;HDR=Yes;IMEX=2\"";
            }
            else if (ext.Trim() == ".xlsx")
            {
                ConStr = "Provider=Microsoft.ACE.OLEDB.12.0;Data Source=" + path + ";Extended Properties=\"Excel 12.0;HDR=Yes;IMEX=2\"";
            }
            string query = "SELECT * FROM [Sheet1$]";
            OleDbConnection conn = new OleDbConnection(ConStr);
            if (conn.State == ConnectionState.Closed)
            {
                conn.Open();
            }
            OleDbCommand cmd = new OleDbCommand(query, conn);
            OleDbDataAdapter da = new OleDbDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            grdVeiw.DataSource = dt;
            grdVeiw.DataBind();
                preveiwbtn.Attributes.Add("style", "display:block");
            conn.Close();
                 

            //DataTable dtColumnMapping = new DataTable();

            //dtColumnMapping.Columns.Add("ExcelColumn");
            //dtColumnMapping.Columns.Add("dbColumn");

            //dtColumnMapping.Rows.Add("RegNo", "RegNo");
            //dtColumnMapping.Rows.Add("Make", "Make");
            //dtColumnMapping.Rows.Add("Model", "Model");
            //dtColumnMapping.Rows.Add("Color", "Color");
            //dtColumnMapping.Rows.Add("EngineNo", "EngineNo");
            //dtColumnMapping.Rows.Add("ChasisNo", "ChasisNo");
            //dtColumnMapping.Rows.Add("DateOfPurchase", "DateOfPurchase");
            //dtColumnMapping.Rows.Add("Active", "Active");

            //new Connection().BulkInsert(dt, dtColumnMapping, "Vehicle");

            }
            catch (Exception ex)
            {
                
                //Response.Redirect("ErrorPages/Oops.aspx?error=FileNotfound");
            }


        }


    }
}