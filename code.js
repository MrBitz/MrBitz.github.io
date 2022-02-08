function clicked(){
  var code = document.getElementById("Code").value;
  String(code)
  if (code === "0001"){
    document.getElementById("info").innerHTML = "You have changed variable values! Reset your console and report this if you haven't changed them.";
  }
  if (code === "etd"){
    window.open("https://mrbitz.github.io/etd.html", "_parent");
  }
}
