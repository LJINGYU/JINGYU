var FormWizard = function () {
    return {
        init: function () {
            if (!jQuery().bootstrapWizard) {
                return;
            }
            var wizform = $('#wizForm');
			var alert_success = $('.alert-success', wizform);
            var alert_error = $('.alert-danger', wizform);
            
			/*-----------------------------------------------------------------------------------*/
			/*	Validate the form elements
			/*-----------------------------------------------------------------------------------*/
            wizform.validate({
                doNotHideMessage: true,
				errorClass: 'error-span',
                errorElement: 'span',

                invalidHandler: function (event, validator) { 
                    alert_success.hide();
                    alert_error.show();
                },

                highlight: function (element) { 
                    $(element)
                        .closest('.form-group').removeClass('has-success').addClass('has-error'); 
                },

                unhighlight: function (element) { 
                    $(element)
                        .closest('.form-group').removeClass('has-error'); 
                },

                success: function (label) {
                    if (label.attr("for") == "gender") { 
                        label.closest('.form-group').removeClass('has-error').addClass('has-success');
                        label.remove(); 
                    } else { 
                        label.addClass('valid') 
                        .closest('.form-group').removeClass('has-error').addClass('has-success'); 
                    }
                }
            });

            /*-----------------------------------------------------------------------------------*/
			/*	Initialize Bootstrap Wizard
			/*-----------------------------------------------------------------------------------*/
            $('#formWizard').bootstrapWizard({
                'nextSelector': '.nextBtn',
                'previousSelector': '.prevBtn',
                onNext: function (tab, navigation, index) {
                    alert_success.hide();
                    alert_error.hide();
                    if(index == 1){
                        var flag = true;
                        if($("#Name").val()==""){
                            $("#Name").tips({msg:'请输入红包名称。'});
                            flag = false;
                        }
                        if($("#Describe").val()==""){
                            $("#Describe").tips({msg:'请输入红包描述。'});
                            flag = false;
                        }
                        if($("#StartDate").val()==""){
                            $("#StartDate").tips({msg:'请输入发放开始日期。'});
                            flag = false;
                        }
                        if($("#EndDate").val()==""){
                            $("#EndDate").tips({msg:'请输入发放结束日期。'});
                            flag = false;
                        }
                        if($("#StartDate1").val()==""){
                            $("#StartDate1").tips({msg:'请输入使用开始日期。'});
                            flag = false;
                        }
                        if($("#EndDate2").val()==""){
                            $("#EndDate2").tips({msg:'请输入使用结束日期。'});
                            flag = false;
                        }
                        if(!flag){
                            return flag;
                        }
                    }
                    if(index == 2){
                        var flag1 = true;
                        if($("#cardcvc").val()==""){
                            $("#cardcvc").tips({msg:'请输入发放数量。'});
                            flag1 = false;
                        }
                        if($("#cardholdername").val()==""){
                            $("#cardholdername").tips({msg:'请输入红包最小金额。'});
                            flag1 = false;
                        }
                        if($("#cardholder").val()==""){
                            $("#cardholder").tips({msg:'请输入红包最大金额。'});
                            flag1 = false;
                        }
                        if(!flag1){
                            return flag1;
                        }
                    }
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    $('.stepHeader', $('#formWizard')).text('第' + current + '步');
                    jQuery('li', $('#formWizard')).removeClass("done");
                    var li_list = navigation.find('li');
                    for (var i = 0; i < index; i++) {
                        jQuery(li_list[i]).addClass("done");
                    }
                    if (current == 1) {
                        $('#formWizard').find('.prevBtn').hide();
                    } else {
                        $('#formWizard').find('.prevBtn').show();
                    }
                    if (current >= total) {
                        $('#formWizard').find('.nextBtn').hide();
                        $('#formWizard').find('.submitBtn').show();
                    } else {
                        $('#formWizard').find('.nextBtn').show();
                        $('#formWizard').find('.submitBtn').hide();
                    }
                },
                onPrevious: function (tab, navigation, index) {
                    alert_success.hide();
                    alert_error.hide();
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    $('.stepHeader', $('#formWizard')).text('第' + (index + 1) + '步');
                    jQuery('li', $('#formWizard')).removeClass("done");
                    var li_list = navigation.find('li');
                    for (var i = 0; i < index; i++) {
                        jQuery(li_list[i]).addClass("done");
                    }
                    if (current == 1) {
                        $('#formWizard').find('.prevBtn').hide();
                    } else {
                        $('#formWizard').find('.prevBtn').show();
                    }
                    if (current >= total) {
                        $('#formWizard').find('.nextBtn').hide();
                        $('#formWizard').find('.submitBtn').show();
                    } else {
                        $('#formWizard').find('.nextBtn').show();
                        $('#formWizard').find('.submitBtn').hide();
                    }
                },
                onTabClick: function () {
                    return false, !1
                },
                onTabShow: function (tab, navigation, index) {
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 100;
                    $('#formWizard').find('.progress-bar').css({
                        width: $percent + '%'
                    });
                }
            });

            $('#formWizard').find('.prevBtn').hide();
            $('#formWizard .submitBtn').click(function () {
                bootbox.alert("提交成功。");
            }).hide();
        }
    };
}();