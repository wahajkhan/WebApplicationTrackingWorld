<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebapplicationTest_TrackingWorld.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Tracking World</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="Assets/css/materialize.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.1.0/material.min.css" />
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.material.min.css" />
    <%--<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.5.6/css/buttons.dataTables.min.css" />--%>

    <style>
        .disp-hide{
            display:none
        }
        .modal-closebtn{
                position: absolute;
        right: 5px;
    top: 5px;
    cursor:pointer;
        }
        .modal-large{
            width:90%;
        }
        .txt-danger{
            color:red;
        }
        .txt-success{
            color:green;
        }
       .mdl-button--raised.mdl-button--colored {
    background: #26a69a;
    color: #fff;
}
       .mdl-button--raised.mdl-button--colored:active, .mdl-button--raised.mdl-button--colored:hover {
    background-color: #26a69a;
}
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <div class="container">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">Bulk Upload</span>
                        <div class="row">
                            <div class="col s6">
                                <div class="file-field input-field">
                                    <div class="btn">
                                        <span>File</span>
                                        <asp:FileUpload ID="FileUpload1" runat="server" />
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div class="col col-s1 " style="padding: 15px">
                                <asp:LinkButton Style="color: white;" CssClass="waves-effect waves-light btn" OnClick="Upload" runat="server">Upload</asp:LinkButton>
                            </div>
                            <div class="col col-s1 " runat="server"  style="padding: 15px"  id="preveiwbtn" >

                                 <a class="waves-effect waves-light btn modal-trigger" href="#dataPreviewModal">Preview</a>

                            </div>
                             <div class="col col-s1 " runat="server"  style="padding: 15px"  id="savebtn" >

                                <asp:LinkButton Style="color: white;" CssClass="waves-effect waves-light btn" OnClick="SaveData" runat="server">Save</asp:LinkButton>

                            </div>
                                 <div class="col col-s1 " runat="server"  style="padding: 15px"  id="Div1" >

<%--                                <asp:LinkButton Style="color: white;" CssClass="waves-effect waves-light btn" OnClick="SaveData" runat="server">Save</asp:LinkButton>--%>
                                     <a href="Files/Example File.xls" class="waves-effect waves-light btn">Download Example</a>
                            </div>
        </div>
                        <div class="row">
                            <div class="col s12">
                                <asp:Label runat="server" ID="lbl_Status"></asp:Label>
                            </div>
                        </div>
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


        <!-- Modal Edit and Add Data -->
        <div id="Modal_EditAddData" class="modal bottom-sheet">
            <div class="modal-content">
                <div class="row">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">
                                    <span data-modtital=""></span>
                                    <span data-modregno="" data-id=""></span>
                                </span>
                                <div class="row">
                                    <div class="input-field col s3">
                                        <input data-regno="" type="text" class="validate" />
                                        <label for="regno">Reg. #</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <input data-make="" type="text" class="validate" />
                                        <label for="make">Make</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <input data-modal="" type="text" class="validate" />
                                        <label for="modal">Modal</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <input data-color="" type="text" class="validate" />
                                        <label for="color">Color</label>
                                        
                                    </div>
                                    <div class="input-field col s3">
                                        <input data-engineno="" type="text" class="validate" />
                                        <label for="engineno">Engine no</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <input data-chasisno="" type="text" class="validate" />
                                        <label for="chasisno">Chasis no</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <input data-dop="" type="text" class="validate datepicker" />
                                        <label for="dop">Date of Purchase</label>
                                    </div>
                                    <div class="input-field col s3">
                                        <%--<input data-status="" type="text" class="validate" />--%>
                                        <select data-ddlStatus="">
                                            <option value="1">Active</option>
                                            <option value="0">In-Active</option>
                                        </select>
                                        <label for="status">Status</label>
                                    </div>
                                </div>



                            </div>

                             <div class="card-action right-align">
                                 <div data-btnsave="" style="display:none">
                                     <a class="waves-effect waves-light btn" id="btn_save" href="javascript:void(0)">Save</a>
                                     <a class="waves-effect waves-teal btn-flat modal-close">Cancel</a>
                                 </div>
                                 <div data-btnupdate="" style="display:none">
                                 <a class="waves-effect waves-light btn" id="btn_update" href="#">Update</a>
                                 <a class="waves-effect waves-light btn" id="btn_delete" href="#">Delete</a>
                                     </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>             
        </div>
         

  <!-- Modal Data Preview -->
  <div id="dataPreviewModal" class="modal modal-large">
      <div class="modal-closebtn modal-close"><i class="material-icons">close</i></div>
    <div class="modal-content">
      <h4>Excel Data Preview <small runat="server" id="lbl_dataCount"></small></h4>
       <asp:GridView runat="server"  ID="grdVeiw"></asp:GridView>
    </div>
  
  </div>
          


    </form>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.material.min.js"></script>


    <script src="https://cdn.datatables.net/buttons/1.5.6/js/dataTables.buttons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.html5.min.js"></script>


    <script src="Assets/Js/Custom/CustomPage.js"></script>

</body>
</html>
