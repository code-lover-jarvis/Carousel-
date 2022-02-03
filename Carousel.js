var caro = document.getElementsByClassName("profile-container");
var index = 0;
caro[index].style.display = 'block';
function prev()
{
  caro[index].style.display = 'none';
  if (index == 0) {
        caro[caro.length - 1].style.display = 'block';
        index = caro.length - 1
  } else {
    caro[index-1].style.display = 'block';
    index -= 1;
  }
}
function next()
{
  caro[index].style.display = 'none';
  if (index == caro.length - 1) {
        caro[0].style.display = 'block';
        index = 0;
  } else {
    caro[index+1].style.display = 'block';
    index += 1;
  }
}
