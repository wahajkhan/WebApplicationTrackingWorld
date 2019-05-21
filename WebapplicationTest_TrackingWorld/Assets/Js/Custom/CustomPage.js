
var TrackingWorld = {
    Obj: {
        Vehicle_Tbl_Obj: null,
        StatusDDL: null
    },
    Init: function () {
        TrackingWorld.tableInit([]);
        TrackingWorld.Element_Init();
        TrackingWorld.ele_Event();
        TrackingWorld.Ajax_();
    },
    Element_Init: function () {
        M.AutoInit();
        //TrackingWorld.Obj.StatusDDL = $('[data-ddlStatus]').formSelect();
    },
    ele_Event: function () {
        $(document).on('click', '[data-editbtn]', function () {
            var data_row = TrackingWorld.Obj.Vehicle_Tbl_Obj.row($(this).closest('tr')).data();
            //alert(data_row);
            console.log(data_row);
            TrackingWorld.Edit_DataPlotter(data_row);
            M.updateTextFields();
        });

        $('#dataPreviewModal').modal({
            dismissible: false, 
            onOpenStart: function (modal, trigger) { 
                //alert("Ready");
                //console.log(modal, trigger);
            }, 
        }
        );
    },
    tableInit: function (json) {
        if (TrackingWorld.Obj.Vehicle_Tbl_Obj == null) {
            TrackingWorld.Obj.Vehicle_Tbl_Obj = $('#tbl').DataTable({
                "data": json,
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
                        "data": "Active"
                    },

                    {
                        "title": "Acttion",
                        "render": function (data, type, row) {
                            return " <a class='waves-effect waves-light btn modal-trigger' href='#modal1' data-editbtn=''><i class='material-icons'>mode_edit</i></a>";
                                
                        }
                    },
                ]

            });
        } else {
            TrackingWorld.Obj.Vehicle_Tbl_Obj.clear().rows.add(json).draw()
        }
    },
    Ajax_: function () {

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
                console.log(json);
            },
            complete: function () {

            },
            failure: function (msg) {
                console.log(msg);
            }
        });

        //$.ajax({
        //    type: "POST",
        //    url: "Services/WebService.asmx/VehilceData",
        //    data: "",
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json", 
        //    beforeSend: function () {

        //    },
        //    success: function (response) {
        //        var json = JSON.parse(response.d);
        //        TrackingWorld.tableInit(json);
        //        console.log(json);
        //    },
        //    complete: function () {

        //    },
        //    failure: function (msg) {
        //        console.log(msg);
        //    }
        //});
    },
    Edit_DataPlotter: function (json) {
        $.map(json, function (data, key) {
            switch (key) {
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
                    //TrackingWorld.Obj.StatusDDL[0].selectize.setValue(data, false);

                    $('[data-ddlStatus]').val("1");

                    // re-initialize material-select
                    $('[data-ddlStatus]').formSelect();

                    break;  
            }
        });
    }
}

$(document).ready(TrackingWorld.Init());




