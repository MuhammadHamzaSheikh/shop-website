var mobmenu = document.getElementById('mobile_menu');
var Onof = false;

function handleONof() {
  if (Onof) {
    Onof = false;
  } else {
    Onof = true;
  }
  console.log(Onof);

  if (Onof) {
    mobmenu.style.display = 'block';
  } else {
    mobmenu.style.display = 'none';
  }
}
