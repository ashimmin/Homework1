var color;
function godown()
{
  getColor();
  while (getColor()!= "red")
  {
    down();
  }
}
godown();
right();
right();
function goup()
{
  getColor();
  while (getColor()!= "red")
  {
    up();
  }
}
goup();
right();
right();
godown();
right();
right();
goup();
right();
right();
godown();
right();
