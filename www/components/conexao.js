// This is a JavaScript file

$(document).on('click, #cadastrar', function()
{
  var parametros ={
    "nome":$('#nome').val(),
    "email":$('#email').val(),
  }

  $.ajax({
    type:"post",
    url:"https://crud-mobile-3i2-onoilvp.c9users.io/conexao.php ",
    data:parametro,
    success:function(data){
      $("#nome").val(""),
      $("#email").val(""),
      navigator.notification.alert(data);
    },
    error:function(data){
      navigator.notification.alert(data);
    }
  })
});
