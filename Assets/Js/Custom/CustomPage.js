
var TrackingWorld = {
    Init: function () {
        TrackingWorld.tableInit();

        TrackingWorld.Element_Init();
        TrackingWorld.Ajax_();
    },
    Element_Init: function () {
        M.AutoInit();
    },
    tableData: function () {
        
    },
    tableInit: function () {
        $('#tbl').DataTable({
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
                    "data": "Model" },
                {
                    "title": "Color",
                    "data": "Color" },
                {
                    "title": "Engine No",
                    "data": "EngineNo" },
                {
                    "title": "Chasis No",
                    "data": "ChasisNo" },
                {
                    "title": "Date Of Purchase",
                    "data": "DateOfPurchase" },
                {
                    "title": "Status",
                    "data": "Active" },
                ]

        });
    },
    Ajax_: function () {
        $.ajax({
            type: "POST",
            url: "Services/WebService.asmx/VehilceData",
            data: "",
            contentType: "application/json; charset=utf-8",
            dataType: "json", 
            beforeSend: function () {

            },
            success: function (response) {
                var json = JSON.parse(response.d);

                console.log(json);
            },
            complete: function () {

            },
            failure: function (msg) {
                console.log(msg);
            }
        });
    }
}

$(document).ready(TrackingWorld.Init());




