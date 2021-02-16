
$(document).ready(function(){
  stack = new StackDataStructure();

    $('.add').click(function(){
      var inputValue = $('input').val();
      if (stack.push($('input').val())==='Stack Overflow') {
        console.log('Stack Overflow');
        $('<p></p>');
        $('.stack-container').append('<p></p>');
        $('.stack-container>p').text('Stack Overflow');
      }
      console.log(stack.stackControl);
      $(".stack-container>.brick:last").text(inputValue);
      $(".stack-container>.brick:last").addClass('full');
      $(".stack-container>.brick:last").removeClass('brick');
    });

    $('.take').click(function(){
      if (stack.pop(stack.stackControl)==='Stack Underflow'){
        console.log('Stack Underflow');
        $('<p></p>');
        $('.stack-container').append('<p></p>');
        $('.stack-container>p').text('Stack Underflow');

      }
      $(".stack-container>.full:first").text('');
      $(".stack-container>.full:first").addClass('brick');
      $(".stack-container>.full:first").removeClass('full');
      console.log('take');
      console.log(queue.queueControl);
    });




});
