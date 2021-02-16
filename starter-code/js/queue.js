$(document).ready(function(){
    queue = new QueueDataStructure();

        $('.addQ').click(function(){

          var inputValue = $(':input[name="fnamequeue"]')[0].value;
          if (queue.enqueue(inputValue)==='Queue Overflow') {
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
