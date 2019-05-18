<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebapplicationTest_TrackingWorld.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Tracking World</title> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.1.0/material.min.css" />
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.material.min.css" />

</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div class="container">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">Bulk Upload</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                         <span class="card-title">Vehicle Details</span>
                     <table id="tbl" class="responsive-table">
                     </table>
                    </div>
                   
                </div>
            </div>

           


        </div>
    </form>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.material.min.js"></script>
    <script src="Assets/Js/Custom/CustomPage.js"></script>

</body>
</html>
