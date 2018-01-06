$(document).ready(function(event){
  $("#ul-menu-list li").click(function () {
      $('.prog-content').hide().eq($(this).index()).show();
  });
  $('#ul-menu-list li:first').trigger('click'); // Default
});
