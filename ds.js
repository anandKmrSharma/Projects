
function runProgram(input) {

    var lines= input.trim().split("\n");
    var length= +lines[0];
    var arr= lines[1].trim().split(" ").map(Number);
    console.log(arr);

    for(var i=0; i <length; i++){
      var num= arr[i];
      // console.log(num);
      while(num !=0){
        var rem= num %10;
        num =num /10
      }
    }

    
  }
  
  if (process.env.USERNAME === "INDIA") {
    runProgram(`8
    121 384 103 100 200 400 757 481`);
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