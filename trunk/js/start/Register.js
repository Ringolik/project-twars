/*5086bbc69afabb58e42407412b6cd6e2*/
var Register={checkInput:function(type,value){
$.ajax({url:'register_check.php?ajax=check_input',data:{type:type,value:value},dataType:'json',type:'POST',success:function(data){

$('#'+type+'_error').css('display','none').text('');
$('#password_info').css('display','none').text('');
$('#password_errors').css('display','none').text('');


if(data.status=='ERROR'){$(data.message).each(function(index,item){$('#'+type+'_error').css('display',"").append(item).append($('<br />'))

})

}
else if(data.status=='INFO'){

$('#password_info').css('display','none');
if($('#password_confirm_error').text().length==0&&$('#password_errors').text().length==0)$('#password_info').css('display','').text(data.message)

}

}

}
)
},checkInputEqual:function(type,inputConfirm){diff=(inputConfirm!=$('#'+type).val());$('#password_errors, #password_confirm_error').css('display','none');

switch(type){
case'password':
$('#password_confirm_error').css('display','').text(diff?'The entered passwords do not match':'');
break;

case'name':
$('#password_errors').css('display','').text(diff?'':'The password may not be the same as your user name!');

break

}

}

}