
var TrackingWorld = {
    Obj: {
        Vehicle_Tbl_Obj: null,
    },
    Init: function () {
        TrackingWorld.tableInit([]);
        TrackingWorld.Element_Init();
        TrackingWorld.Ajax_();
    },
    Element_Init: function () {
        M.AutoInit();
    },
    
    tableInit: function (json) {
        if (TrackingWorld.Obj.Vehicle_Tbl_Obj == null) {
            TrackingWorld.Obj.Vehicle_Tbl_Obj = $('#tbl').DataTable({
                "data": json,
                "columns": [
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




