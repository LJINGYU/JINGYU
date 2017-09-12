/**
 * Created by Amos on 2017/3/28.
 */
function validate(options) {
    var flag = true;
    var vali = {
        form_id: null,
        validate_id: null,
        validate_message: null
    };
    $.extend(vali, options);
    var formObj = $("#" + vali.form_id);
    $(formObj.find("input.validate")).each(function (i, item) {
        if (typeof($(this).attr("placeholder")) == "undefined") {
            var labtext = "请输入";
        } else {
            var labtext = $(this).attr("placeholder");
        }
        if ($(this).attr("type") != "radio") {

            if ($(this).val().trim() == "") {
                $(this).tips({msg: labtext});
                flag = false;
            }
        }
    });
    $(formObj.find("select.validate")).each(function (i, item) {
        if (typeof($(this).attr("tip")) == "undefined") {
            var labtext = "请选择";
        } else {
            var labtext = $(this).attr("tip");
        }
        if ($("#" + $(this).attr("id") + " " + "option:selected").val().trim() == "") {
            flag = false;
            $("#s2id_" + $(this).attr("id")).tips({msg: labtext, side: 1});
        }

    });
    /*for(var i=0;i<vali.validate_id.length;i++){
     var inputObj=formObj.find("#"+vali.validate_id[i]);
     if(inputObj==""){
     flag=false;
     inputObj.tips({msg:vali.validate_message[i]});
     }
     }*/

    return flag;
}

