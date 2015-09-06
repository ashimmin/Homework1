var color;
right();
right();
function go()
{
  getColor();
  var count = 0;
  if (getColor()	== "blue")
  {
    down();
    right();
    right();
  }
  else
  {
    up();
    right();
    right();
  }
}
go();
go();
go();
right();
