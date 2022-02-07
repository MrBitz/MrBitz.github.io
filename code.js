function clicked(){
  var code = document.getElementById("Code").value;
  String(code)
  if (code === "0001"){
    document.getElementById("info").innerHTML = "You have changed variable values! Reset your console and report this if you haven't changed them.";
  } else if (code === "etd"){
    document.getElementById("etd").innerHTML = "<a href='etd.html'>Escape The Dungeon Update list!</a>";
  } else {
    document.getElementById("info").innerHTML = "Please enter a valid code.";
  }
}
