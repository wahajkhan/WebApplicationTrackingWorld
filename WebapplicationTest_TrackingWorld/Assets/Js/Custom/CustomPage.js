
var TrackingWorld = {
    Obj: {
        Vehicle_Tbl_Obj: null,
    },
    Init: function () {
        TrackingWorld.tableInit([]);
        TrackingWorld.Element_Init();
        TrackingWorld.ele_Event();
        TrackingWorld.Ajax_();
    },
    Element_Init: function () {
        M.AutoInit();
    },
    ele_Event: function () {
        $(document).on('click', '[data-editbtn]', function () {
            var data_row = TrackingWorld.Obj.Vehicle_Tbl_Obj.row($(this).closest('tr')).data();
            //alert(data_row);
            console.log(data_row);
        });

        $('#dataPreviewModal').modal({
            dismissible: false, // Modal can be dismissed by clicking outside of the modal
            onOpenStart: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                alert("Ready");
                console.log(modal, trigger);
            },
            complete: function () { alert('Closed'); } // Callback for Modal close
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
    }
}

$(document).ready(TrackingWorld.Init());




