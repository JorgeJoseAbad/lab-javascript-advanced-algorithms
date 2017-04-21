function StackDataStructure () {
    this.stackControl=[];
    this.MAX_SIZE=10;
    //this.isEmpty=function(){};
    //this.canPush=function(){};
    //this.push=function(){};
    //this.pop=function(){};
    /*
    this.isEmpty=function(){
            if (this.stackControl.length===0)
                return true;
            else return false;

    };
    this.canPush=function(){
      if (this.stackControl.length<this.MAX_SIZE) return true;
      else return false;
    };

    this.push=function(item){
      if (this.canPush()){
        if (this.stackControl.push(item)){
          //console.log(this.stackControl);
          return this.stackControl;}
        }
      else return 'Stack Overflow';
    };

    this.pop=function(){
      if (this.isEmpty()) return 'Stack Underflow';
      else return this.stackControl.pop();
    };
    */
} // end object prototype StackDataStructure

StackDataStructure.prototype.isEmpty=function(){
        if (this.stackControl.length===0)
            return true;
        else return false;

};

StackDataStructure.prototype.canPush=function(){
  if (this.stackControl.length<this.MAX_SIZE) return true;
  else return false;
};

StackDataStructure.prototype.push=function(item){
  if (this.canPush()){
    if (this.stackControl.push(item)){
      //console.log(this.stackControl);
      return this.stackControl;}
    }
  else return 'Stack Overflow';
};

StackDataStructure.prototype.pop=function(){
  if (this.isEmpty()) return 'Stack Underflow';
  else return this.stackControl.pop();
};
