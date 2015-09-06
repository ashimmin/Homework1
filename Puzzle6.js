var color;
right();
function go()
{
  getColor();
  var count = 0;
  if (getColor()	== "blue")
  {
    down();
    down();
    down();
  }
  else
  {
    up();
    up();
    up();
  }
}
  go();
function go1()
  {
    getColor();
    var count = 0;
    if (getColor() == "blue")
    {
      right();
      down();
    }
    else
    {
      left();
      up();
    }
  }
go1();
    
