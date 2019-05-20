<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebapplicationTest_TrackingWorld.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Tracking World</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="Assets/css/materialize.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.1.0/material.min.css" />
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.material.min.css" />
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
                            <div class="col col-s1 " runat="server"  id="preveiwbtn" style="padding: 15px;display:none">

                                 <a class="waves-effect waves-light btn modal-trigger" href="#dataPreviewModal">Preview</a>

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


        <!-- Modal Structure -->
        <div id="modal1" class="modal bottom-sheet">
            <div class="modal-content">
                <div class="row">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <span class="card-title">
                                    <span>Edit</span>
                                    (<span></span>)
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
                                        <select>
                                            <option>Active</option>
                                            <option>In-Active</option>
                                        </select>
                                        <label for="status">Status</label>
                                    </div>
                                </div>



                            </div>

                             <div class="card-action right-align">
                                 <a class="waves-effect waves-light btn" href="#">Save</a>
                                 <a class="waves-effect waves-light btn" href="#">Update</a>
                                 <a class="waves-effect waves-light btn" href="#">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>             
        </div>

          <!-- Modal Trigger -->
 

  <!-- Modal Structure -->
  <div id="dataPreviewModal" class="modal modal-large">
      <div class="modal-closebtn modal-close"><i class="material-icons">close</i></div>
    <div class="modal-content">
      <h4>Modal Header</h4>
       <asp:GridView runat="server"  ID="grdVeiw"></asp:GridView>
    </div>
   <%-- <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>--%>
  </div>
          


    </form>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.material.min.js"></script>
    <script src="Assets/Js/Custom/CustomPage.js"></script>

</body>
</html>
