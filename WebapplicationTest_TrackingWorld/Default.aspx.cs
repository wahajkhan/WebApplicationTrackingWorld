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
        DataTable dt_excel = new DataTable();
        protected void Page_Load(object sender, EventArgs e)
        { 
            new BAL().BAL_DB_Checker();
            preveiwbtn.Visible = false;
            savebtn.Visible = false;
        }

        protected void Upload(object sender, EventArgs e)
        {

            try
            {
            lbl_Status.Visible = false;

            string ConStr = "";
            string ext = Path.GetExtension(FileUpload1.FileName).ToLower();
            string path = Server.MapPath("~/Files/" + FileUpload1.FileName);
          
            FileUpload1.SaveAs(path);
            
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
           
            da.Fill(dt_excel);

                string[] ColName =new string[] { "", "", "", "" };
                //RegNo,Make,Model,Color,EngineNo,ChasisNo,DateOfPurchase,Active
                string[] columnNames = dt_excel.Columns.Cast<DataColumn>()
                                 .Select(x => x.ColumnName)
                                 .ToArray();

                for (int i = 0; i < columnNames.Length; i++)
                {

                   if(dt_excel.Columns.Contains(columnNames[i].ToString()))
                    {

                    }
                }







                grdVeiw.DataSource = dt_excel;
            grdVeiw.DataBind();
               
            conn.Close();
            preveiwbtn.Visible = true;
                lbl_Status.Visible = true;
                lbl_Status.Text = FileUpload1.FileName+ " File upload successfully , for shown data click on preview";
                lbl_Status.CssClass = "txt-success";
                lbl_dataCount.InnerText = "(No. of rows " + dt_excel.Rows.Count;
                savebtn.Visible = true;

                ViewState["DataExcel"] = dt_excel;


            }
            catch (Exception ex)
            {
                lbl_Status.Visible = true;
                lbl_Status.Text = "Please select upload a file";
                lbl_Status.CssClass = "txt-danger";
                
                //Response.Redirect("ErrorPages/Oops.aspx?error=FileNotfound");
            }


        }

        protected void SaveData(object sender, EventArgs e)
        {
            try
            {

                lbl_Status.Visible = false;
                DataTable dtColumnMapping = new DataTable();

                dtColumnMapping.Columns.Add("ExcelColumn");
                dtColumnMapping.Columns.Add("dbColumn");
               
                dtColumnMapping.Rows.Add("RegNo", "RegNo");
                dtColumnMapping.Rows.Add("Make", "Make");
                dtColumnMapping.Rows.Add("Model", "Model");
                dtColumnMapping.Rows.Add("Color", "Color");
                dtColumnMapping.Rows.Add("EngineNo", "EngineNo");
                dtColumnMapping.Rows.Add("ChasisNo", "ChasisNo");
                dtColumnMapping.Rows.Add("DateOfPurchase", "DateOfPurchase");
                dtColumnMapping.Rows.Add("Active", "Active");

                dt_excel = (DataTable)ViewState["DataExcel"];

                new Connection().BulkInsert(dt_excel, dtColumnMapping, "Vehicle");

                lbl_Status.Visible = true;
                lbl_Status.Text = "Data saved successfully.";
                lbl_Status.CssClass = "txt-success";

                preveiwbtn.Visible = false;
                savebtn.Visible = false;
                

            }
            catch (Exception ex)
            {
                lbl_Status.Visible = true;
                lbl_Status.Text = "Failed to saved data, please try again";
                lbl_Status.CssClass = "txt-danger";
            }
           

        }

    }
}