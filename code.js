function clicked(){
  const codelist = ["0001", "etd"];
  var code = document.getElementById("Code").value;
  String(code)
  if (code === "0001"){
    document.getElementById("info").innerHTML = "You have changed variable values! Reset your console and report this if you haven't changed them.";
  }
  if (code === "etd"){
    window.open("https://mrbitz.github.io/etd.html", "_self");
  }
  if !(code in codelist){
    document.getElementById("info").innerHTML = "Please enter a valid code.";
  }
}
