function QueueDataStructure () {
  this.queueControl=[];
  this.MAX_SIZE=10;
  this.isEmpty = function(){};
  this.canEnqueue = function(){
    if (this.queueControl.length<this.MAX_SIZE) return true;
    else return false;
  };

  this.enqueue = function(item){
    if (this.canEnqueue()){
      if (this.queueControl.unshift(item)){
        console.log(this.queueControl);
        return this.queueControl;
        }
      }
    else return 'Queue Overflow';
    };

  this.dequeue = function(){
    if (this.isEmpty()) return 'Queue Underflow';
    else return this.queueControl.pop();
  };
  
  this.isEmpty=function(){
          if (this.queueControl.length===0)
              return true;
          else return false;

  };
}
