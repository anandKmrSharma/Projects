function cipher(string, length){

  var j=0;
  var str="";
      while(j<length){
      var count=0;
      for(var k=j; k <length; k++){
          if(string[j] != string[k]){
            break;
          }else{
            count++;
          }
      }
      str = str + string[j] + count;
      j=k;
    }
    console.log(str);

}








