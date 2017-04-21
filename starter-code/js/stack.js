
$(document).ready(function(){
  stack = new StackDataStructure();
    //var inputValue = $('input').val();
/*
    $("input").click(function(e){
      console.log($(this).val());
    });
*/
    $('.add').click(function(){
      var inputValue = $('input').val();
      stack.push($('input').val());
      console.log(stack.stackControl);
      $(".stack-container>.brick:last").text(inputValue);
      $(".stack-container>.brick:last").addClass('full');
      $(".stack-container>.brick:last").removeClass('brick');
    });

    $('.take').click(function(){
      stack.pop(stack.stackControl);
      $(".stack-container>.full:first").text('');
      $(".stack-container>.full:first").addClass('brick');
      $(".stack-container>.full:first").removeClass('full');
      console.log('take');
      console.log(stack.stackControl);
    });
});
