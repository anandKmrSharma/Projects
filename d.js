//Enter code here
function runProgram(input) {
    var lines= input.trim().split("\n");
    var length= +lines[0]
    var arr= lines[1].trim().split(" ").map(Number);

var stack=[];
var res=[];

for(var j=length-1; j >0; j--){

    if(stack.length==0){
        res.push(-1);
    }else if(stack.length > 0 && stack[stack.length-1] > arr[j]   ){
             res.push(stack[stack.length-1])
    }else if(stack.length>0 && stack[stack.length-1] >= arr[j] ){
                 while(stack.length >0 && stack[stack.length -1] >= arr[j]){
                     stack.pop();
                 }
                  if(stack.length ==0){
                      res.push(-1);
                  }else{
                      res.push(stack[stack.length-1]);
                  }
    }
    stack.push(arr[j]);

}




    // console.log(arr, length)
    console.log(res.join(" "));
    
    
   }
   if (process.env.USERNAME === "INDIA") {
     runProgram(`8
     39 27 11 4 24 32 32 1`);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }







