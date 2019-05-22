
var TrackingWorld = {
    Obj: {
        Vehicle_Tbl_Obj: null,
        StatusDDL: null,
        Data: {
            id: null,
            Regno: null,
            Make: null,
            Modal: null,
            Color: null,
            Engineno: null,
            Chasisno: null,
            Dop: null,
            status: null 
        }
    },
    Init: function () {
        TrackingWorld.tableInit([]);
        TrackingWorld.Element_Init();
        TrackingWorld.ele_Event();
        TrackingWorld.Ajax_.Data_Load();
    },
    Element_Init: function () {
        M.AutoInit(); 
    },
    ele_Event: function () {
        $(document).on('click', '[data-editbtn]', function () {
            var data_row = TrackingWorld.Obj.Vehicle_Tbl_Obj.row($(this).closest('tr')).data();

            TrackingWorld.Modal_displayHandler("Edit", data_row.RegNo);
            TrackingWorld.Edit_DataPlotter(data_row);
            M.updateTextFields();
        });

        $('#dataPreviewModal').modal({
            dismissible: false, 
            onOpenStart: function (modal, trigger) { 
            }, 
        }
        );
        $(document).on('click', '#btn_save', function () {
            
            TrackingWorld.Data.Get();
            TrackingWorld.Ajax_.Data_Add(TrackingWorld.Obj.Data);

        });
        $(document).on('click', '#btn_update', function () {
            TrackingWorld.Data.Get();
            TrackingWorld.Ajax_.Data_Update(TrackingWorld.Obj.Data);
        });
        $(document).on('click', '#btn_delete', function () {
            TrackingWorld.Data.Get();
            TrackingWorld.Ajax_.Data_Delete(TrackingWorld.Obj.Data);
        });

    },
    Modal_displayHandler: function (key,data) {
        switch (key) {
            case "Add":
                TrackingWorld.Clear_Text();
                $('[data-modtital]').html("Add");
                $('[data-btnsave]').css('display', 'block');
                $('[data-btnupdate]').css('display', 'none');
                M.updateTextFields();

                break;
            case "Edit":

                TrackingWorld.Clear_Text();
                $('[data-modtital]').html("Edit");
                $('[data-modregno]').html("( " + data + " )");
                $('[data-btnsave]').css('display', 'none');
                $('[data-btnupdate]').css('display', 'block');
                break; 
        }
    },
    Clear_Text: function () {
        $('[data-modtital]').html('');
        $('[data-modregno]').html('');
        $('[data-modregno]').attr('data-id', '');
        $('[data-regno]').val('');
        $('[data-make]').val('');
        $('[data-modal]').val('');
        $('[data-color]').val('');
        $('[data-engineno]').val('');
        $('[data-chasisno]').val('');
        $('[data-dop]').val('');
    },
    tableInit: function (json) {
        if (TrackingWorld.Obj.Vehicle_Tbl_Obj == null) {
            TrackingWorld.Obj.Vehicle_Tbl_Obj = $('#tbl').DataTable({
                "data": json,
                dom: '<"row"<"col s12"B>><"row"<"col s1"l><"col s4 offset-s7"f>>rtip',
                buttons: [ 
                    { 'extend': 'excelHtml5', 'className': 'waves-effect waves-light btn' },
                    { 'extend': 'csvHtml5', 'className': 'waves-effect waves-light btn' },
                    { 'extend': 'pdfHtml5', 'className': 'waves-effect waves-light btn' },
                    {
                        text: 'Add',
                        'className': 'waves-effect waves-light red btn',
                        action: function (e, dt, node, config) {
                            $('#Modal_EditAddData').modal('open');
                            TrackingWorld.Modal_displayHandler('Add','');
                        }
                    }
                ],
                "columns": [
                    {
                        "title": "vehicleId",
                        "data": "VehicleID"
                    },
                    {
                        "title": "Reg #",
                        "data": "RegNo"
                    },
                    {
                        "title": "Make",
                        "data": "Make"
                    },
                    {
                        "title": "Model",
                        "data": "Model"
                    },
                    {
                        "title": "Color",
                        "data": "Color"
                    },
                    {
                        "title": "Engine No",
                        "data": "EngineNo"
                    },
                    {
                        "title": "Chasis No",
                        "data": "ChasisNo"
                    },
                    {
                        "title": "Date Of Purchase",
                        "data": "DateOfPurchase"
                    },
                    {
                        "title": "Status",
                        "data": "Active",
                        "render": function (data, type, row) {
                            return (data=='0')?"In-Active" : "Active"; 
                        }
                    }, 
                    {
                        "title": "Action",
                        "render": function (data, type, row) { 
                            return " <a class='waves-effect waves-light btn modal-trigger' href='#Modal_EditAddData' data-editbtn=''><i class='material-icons'>mode_edit</i></a>";       
                        }
                    },
                ]

            });
        } else {
            TrackingWorld.Obj.Vehicle_Tbl_Obj.clear().rows.add(json).draw()
        }
    },
    
    Ajax_: {
        Data_Load: function() {
            $.ajax({
                type: "POST",
                url: "Services/WebService.asmx/VehilceData",
                contentType: "application/json; charset=utf-8",
                dataType: "json",

                beforeSend: function () {

                },
                success: function (response) {
                    var json = JSON.parse(response.d);
                    TrackingWorld.tableInit(json); 
                },
                complete: function () {

                },
                failure: function (msg) {
                    console.log(msg);
                }
            });

        },
        Data_Update: function (data) { 
            $.ajax({
                type: "POST",
                url: "Services/WebService.asmx/VehilceDataUpdate",
                data: JSON.stringify({ 'data': data }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                beforeSend: function () {

                },
                success: function (response) {
                    
                    if (response.d=='update') {
                        M.toast({ html: 'Vehicle Update Successfully', classes: 'rounded' });
                        TrackingWorld.Ajax_.Data_Load();
                        $('#Modal_EditAddData').modal('close');
                    } else {
                        M.toast({ html: 'Sorry their is some problem, Try again', classes: 'rounded' });
                    }

                },
                complete: function () {

                },
                failure: function (msg) {
                    console.log(msg);
                }
            });
        },
        Data_Delete: function (data) {
            $.ajax({
                type: "POST",
                url: "Services/WebService.asmx/VehilceDataDelete",
                data: JSON.stringify({ 'data': data }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                beforeSend: function () {

                },
                success: function (response) {

                    if (response.d == 'delete') {
                        M.toast({ html: 'Vehicle delete Successfully', classes: 'rounded' });
                        TrackingWorld.Ajax_.Data_Load();
                        $('#Modal_EditAddData').modal('close');
                    } else {
                        M.toast({ html: 'Sorry their is some problem, Try again', classes: 'rounded' });
                    } 
                },
                complete: function () {

                },
                failure: function (msg) {
                    console.log(msg);
                }
            });
        },
        Data_Add: function (data) {
            $.ajax({
                type: "POST",
                url: "Services/WebService.asmx/VehilceDataAdd",
                data: JSON.stringify({ 'data': data }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                beforeSend: function () {

                },
                success: function (response) {

                    if (response.d == 'save') {
                        M.toast({ html: 'Vehicle Save Successfully', classes: 'rounded' });
                        TrackingWorld.Ajax_.Data_Load();
                        $('#Modal_EditAddData').modal('close');
                    } else {
                        M.toast({ html: 'Sorry their is some problem, Try again', classes: 'rounded' });
                    } 
                },
                complete: function () {

                },
                failure: function (msg) {
                    console.log(msg);
                }
            });
        },
        
    },
    Edit_DataPlotter: function (json) {
        $.map(json, function (data, key) {
            switch (key) {
                case "VehicleID":
                    $('[data-modregno]').attr('data-id', data);
                case "RegNo":
                    $('[data-regno]').val(data);
                    break;
                case "Make":
                    $('[data-make]').val(data);
                    break;
                case "Model":
                    $('[data-modal]').val(data);
                    break;
                case "Color":
                    $('[data-color]').val(data);
                    break;
                case "EngineNo":
                    $('[data-engineno]').val(data);
                    break;
                case "ChasisNo":
                    $('[data-chasisno]').val(data);
                    break;
                case "DateOfPurchase":
                    $('[data-dop]').val(data);
                    break; 
                case "Active": 
                    $('[data-ddlStatus]').val(data); 
                    $('[data-ddlStatus]').formSelect(); 
                    break;  
            }
        });
    },
    Data: {
        Get: function () {
            $.map(TrackingWorld.Obj.Data, function (val, key) {
                TrackingWorld.Data.Mapper(key); 
            });
        },
        Mapper: function (key) {
            switch (key) {
                case "id":
                    TrackingWorld.Obj.Data[key] = $('[data-id]').attr('data-id');
                    break;      
                case "Regno":
                    TrackingWorld.Obj.Data[key] = $('[data-regno]').val();
                    break;
                case "Make":
                    TrackingWorld.Obj.Data[key] = $('[data-make]').val();
                    break;
                case "Modal":
                    TrackingWorld.Obj.Data[key] = $('[data-modal]').val();
                    break;
                case "Color":
                    TrackingWorld.Obj.Data[key] = $('[data-color]').val();
                    break;
                case "Engineno":
                    TrackingWorld.Obj.Data[key] = $('[data-engineno]').val();
                    break;
                case "Chasisno":
                    TrackingWorld.Obj.Data[key] = $('[data-chasisno]').val();
                    break;
                case "Dop":
                    TrackingWorld.Obj.Data[key] = $('[data-dop]').val();
                    break;
                case "status":
                    TrackingWorld.Obj.Data[key] = $('[data-ddlStatus] option:selected').val();
                    break;
                    
            }

        }
    }

}

$(document).ready(TrackingWorld.Init());




