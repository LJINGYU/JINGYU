function loadAddress(countryID,stateID,cityID,districtID) {
    $("#" + countryID + "").change(function () {
        if(stateID != ""){
            getStateForSpinner(stateID, "", $("#" + countryID + "").val());
        }
        //清空市和区
        if(cityID != ""){
            $("#" + cityID + "").empty();
            $("#" + cityID + "").append("<option value=''></option>");
            $("#" + cityID + "").select2({placeholder: "--请选择城市--"});
        }
        if(districtID != ""){
            $("#" + districtID + "").empty();
            $("#" + districtID + "").append("<option value=''></option>");
            $("#" + districtID + "").select2({placeholder: "--请选择县区--"});
        }
    });
    if(stateID != ""){
        $("#" + stateID + "").change(function () {
            if(cityID != ""){
                getCityForSpinner(cityID, "", $("#" + stateID + "").val());
            }
            //清空区
            if(districtID != ""){
                $("#" + districtID + "").empty();
                $("#" + districtID + "").append("<option value=''></option>");
                $("#" + districtID + "").select2({placeholder: "--请选择县区--"});
            }
        });
    }
    if(cityID != ""){
        $("#" + cityID + "").change(function () {
            getDistrictForSpinner(districtID, "", $("#" + cityID + "").val());
        });
    }
}

