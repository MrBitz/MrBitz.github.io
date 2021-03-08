function clicked(){
  var code = document.getElementById("Code").value;
  String(code)
  if (code === "0001"){
    document.getElementById("info").innerHTML = "This is the beta error. Since the program isn't completely made and tested it has errors.";
  } else {
    document.getElementById("info").innerHTML = "Enter a valid code.";
  }
}
