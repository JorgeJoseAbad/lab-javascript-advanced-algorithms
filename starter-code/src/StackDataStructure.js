function StackDataStructure () {
    this.stackControl=[];
    this.MAX_SIZE=10;
    this.isEmpty=function(){};
    this.canPush=function(){};
    //this.push=function(){};
    //this.pop=function(){};
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

}

/* original ya nodificado
function StackDataStructure () {




}
*/
