
$(document).ready(function(){
  stack = new StackDataStructure();
  queue = new QueueDataStructure();
    //var inputValue = $('input').val();
/*
    $("input").click(function(e){
      console.log($(this).val());
    });
*/
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



    $('.addQ').click(function(){
      var inputValue = $('input').val();
      if (queue.enqueue($('input').val())==='Queue Overflow') {
        console.log('Stack Overflow');
        $('<p></p>');
        $('.queue-container').append('<p></p>');
        $('.queue-container>p').text('Queue Overflow');
      }
      console.log(queue.queueControl);
      for (var j=0; j<queue.MAX_SIZE; j++){
        $(".queue-container>.full").text('');
        $(".queue-container>.full").addClass('brick');
        $(".queue-container>.full").removeClass('full');

      }

      for (var i=queue.queueControl.length-1; i>=0; i--){
        $(".queue-container>.brick:first").text(queue.queueControl[i]);
        $(".queue-container>.brick:first").addClass('full');
        $(".queue-container>.brick:first").removeClass('brick');
      }
      //$(".queue-container>.brick:first").text(inputValue);
      //$(".queue-container>.brick:first").addClass('full');
      //$(".queue-container>.brick:first").removeClass('brick');
    });

    $('.takeQ').click(function(){
      if (queue.dequeue(queue.queueControl)==='Queue Underflow'){
        console.log('Queue Underflow');
        $('<p></p>');
        $('.queue-container').append('<p></p>');
        $('.queue-container>p').text('Queue Underflow');

      }
      $(".queue-container>.full:first").text('');
      $(".queue-container>.full:first").addClass('brick');
      $(".queue-container>.full:first").removeClass('full');
      console.log('take');
      console.log(queue.queueControl);
    });

});
