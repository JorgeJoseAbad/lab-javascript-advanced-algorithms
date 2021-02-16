
/*
  Jasmine is a behavior-driven development framework for testing JavaScript code.
  It does not depend on any other JavaScript frameworks.
  It does not require a DOM. And it has a clean,
  obvious syntax so that you can easily write tests.
*/

describe("Stack", function() {
  var stack;

  beforeEach (function() {
    stack = new StackDataStructure();
  });

  describe ("Stack properties", function () {
    it ("Should has an array to add the elements to the stack", function () {
      expect(Array.isArray(stack.stackControl)).toBe(true);
    });

    it ("Should has a max number of items to avoid the stack overflow", function () {
      expect(typeof(stack.MAX_SIZE)).toBe('number');
    });
  });

  describe ("Stack methods", function () {
    it ("Should has a method to check if the current stack is empty", function () {
      expect(typeof(stack.isEmpty)).toBe('function');
    });

    it ("Should has a method to check if we can push elements into the stack", function () {
      expect(typeof(stack.canPush)).toBe('function');
    });

    it ("Should has a method to push elements into the stack", function () {
      expect(typeof(stack.push)).toBe('function');
    });

    it ("Should has a method to take elements from the stack", function () {
      expect(typeof(stack.pop)).toBe('function');
    });
  });

  describe ("Stack methods default values", function () {
    it ("Should has an empty stack", function () {
      expect(stack.isEmpty()).toBe(true);
    });

    it ("Should be able to add a new element in the stack", function () {
      expect(stack.canPush()).toBe(true);
    });
  });

  describe ("Stack methods usage", function () {
    it ("Should add the indicated element to the stack", function () {
      stack.push(19);
      //The push() method adds new items to the end of an array,
      //and returns the new length.
      expect(stack.stackControl.length).toBe(1);
    });

    it ("Should return that stack is not empty when adding an element", function () {
      stack.push(19);

      expect(stack.isEmpty()).toBe(false);
    });

    it ("Should return the stack when an element is inserted", function () {
      expect(stack.push(19)).toEqual([19]);
    });

    it ("Should insert the elements in the received order", function () {
      stack.push(19);
      stack.push(88);
      stack.push("hola");

      expect(stack.stackControl).toEqual([19, 88,"hola"]);
    });

    it ("Should return the number of elements inserted, (new)", function(){
      stack.push(33);
      stack.push(22);

      expect(stack.stackControl.length).toEqual(2);

    })

    it ("Should return 'Stack Overflow' if the stack is full", function () {
      stack.MAX_SIZE = 1;
      stack.push(19);

      expect(stack.push(88)).toEqual("Stack Overflow");
    });

    it ("Should return false if the stack is full", function () {
      stack.MAX_SIZE = 1;
      stack.push(19);

      expect(stack.canPush()).toBe(false);
    });

    it ("Should return the last element inserted in the stack", function () {
      stack.push(19);
      stack.push("hola");
      stack.push(99);

      expect(stack.pop()).toBe(99);
      //The pop() method removes the last element of an array,
      //and returns that element.
    });

    it ("Should return 'Stack Underflow' if there are no elements in the stack", function () {
      expect(stack.pop()).toBe('Stack Underflow');
    });
  });
});


describe("Queues", function() {
  var queue;

  beforeEach(function() {
    queue = new QueueDataStructure();
  });


  describe ("Queue properties", function () {
    it ("Should has an array to add the elements to the queue", function () {
      expect(Array.isArray(queue.queueControl)).toBe(true);
    });

    it ("Should has a max number of items to avoid the queue overflow", function () {
      expect(typeof(queue.MAX_SIZE)).toBe('number');
    });
  });

  describe ("Queue methods", function () {
    it ("Should has a method to check if the current queue is empty", function () {
      expect(typeof(queue.isEmpty)).toBe('function');
    });


    it ("Should has a method to check if we can enqueue an element into the queue", function () {
      expect(typeof(queue.canEnqueue)).toBe('function');
    });

    it ("Should has a method to enqueue elements into the queue", function () {
      expect(typeof(queue.enqueue)).toBe('function');
    });

    it ("Should has a method to dequeue from the queue", function () {
      expect(typeof(queue.dequeue)).toBe('function');
    });
  });

  describe ("Queue methods default values", function () {
    it ("Queue has an empty stack", function () {
      expect(queue.isEmpty()).toBe(true);
    });

    it ("Should be able to enqueue a new element in the queue", function () {
      expect(queue.canEnqueue()).toBe(true);
    });
  });

  describe ("Queue methods usage", function () {
    it ("Should enqueue the indicated element to the queue", function () {
      queue.enqueue(19);

      expect(queue.queueControl.length).toBe(1);
      expect(queue.queueControl).not.toBe("undefined");
      expect(queue.queueControl).not.toEqual([15]);
    });

    it ("Should return that queue is not empty when enqueuing an element", function () {
      queue.enqueue(19);

      expect(queue.isEmpty()).toBe(false);
    });

    it ("Should return the queue when an element is queued", function () {
      expect(queue.enqueue(19)).toEqual([19]);
    });

    it ("Should insert the elements in the reverse received order", function () {
      queue.enqueue(19);
      queue.enqueue(88);
      queue.enqueue(33);

      expect(queue.queueControl).toEqual([33, 88, 19]);
    });

    it ("Should return 'Queue Overflow' if the stack is full", function () {
      queue.MAX_SIZE = 1;
      queue.enqueue(19);

      expect(queue.enqueue(88)).toEqual("Queue Overflow");
    });

    it ("Should return false if the stack is full", function () {
      queue.MAX_SIZE = 1;
      queue.enqueue(19);

      expect(queue.canEnqueue()).toBe(false);
    });

    it ("Should return the first element inserted in the queue", function () {
      queue.enqueue(19);
      queue.enqueue(88);

      expect(queue.dequeue()).toBe(19);
    });

    it ("Should return 'Queue Underflow' if there are no elements in the queue", function () {
      expect(queue.dequeue()).toBe('Queue Underflow');
    });
  });
});
