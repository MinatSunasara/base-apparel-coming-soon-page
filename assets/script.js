var $ = jQuery;
		$(document).ready(function(){
		$('.button').click(function(){
               if($('#email').val().length==0)
			{
				$('#demo').text("E-Mail field should not be empty").addClass('mail-name');
				$('.icon-error').show();
               $('#email').focus();
				return false;
				
			}
			else
			{
				if(IsEmail($('#email').val())){
					$('#demo').empty();
					$('#email').addClass('pass-color');
				} else {
					$('#email').focus();
					$('#demo').text("E-Mail is invalid").addClass('mail-name');
					$('.icon-error').show();
					return false;
				}
				
			}
           });
	});
function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test(email)) {
			return false;
		}else{
			return true;
		}
	}