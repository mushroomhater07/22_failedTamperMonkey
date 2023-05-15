
    console.log("-----------")
    console.log(location.match("https://www.youtube.com/watch?v=8kKLUsn7tcg"));
    var s = document.querySelector("div.submitButtonArea/button");
    console.log(s);

var link = document.getElementById("video-title-link")
if(location.match(RegExp("youtube.com"))){
    // (command,close)=>{
    //     if(command == "") return true;
    //     eval(command);
    //     if(close) window.open("", "_self").close()
    // }
    var element = document.querySelector('div.meta>h3>a#video-title-link');
        if (!element)return false;
        element.click()
}


// 'click': [{  'location': 'davinsurance.com/?id=*',
//              'selector': 'div.humancheck>form>input.sorasubmit' },]
// document.querySelector
// var element = document.querySelector(selector);
// if (!element) {
//     return false
// }
// element.click()
const key = document.getElementById("key"),
  keys = document.getElementById("keys"),
  info = document.getElementById("info"),
  meta = document.getElementById("meta"),
  ctrl = document.getElementById("ctrl"),
  shift = document.getElementById("shift"),
  alt = document.getElementById("alt");

document.onkeydown = function (e) {
  if (
    (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) ||
    e.key === "Meta" ||
    e.key === "Shift" ||
    e.key === "Control" ||
    e.key === "alt"
  ) {
    return;
  }
  document.querySelector()
  e.altKey ? alt.classList.remove("hidden") : alt.classList.add("hidden");
  e.shiftKey ? shift.classList.remove("hidden") : shift.classList.add("hidden");
  e.metaKey ? meta.classList.remove("hidden") : meta.classList.add("hidden");
  e.ctrlKey ? ctrl.classList.remove("hidden") : ctrl.classList.add("hidden");
  info.classList.add("hidden");
  keys.classList.remove("hidden");
  key.innerHTML = e.keyCode;
};
switch (e) {
    case value:
        
        break;

    default:
        break;
}