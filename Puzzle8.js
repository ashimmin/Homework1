down();
function godown(total) 
{
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}

function goup(total) 
{
  var count = 0;
  while (count < total) {
    up();
    count = count + 1;
  }
}
godown(7);
right();
right();
goup(7);
right();
right();
godown(7);
right();
right();
goup(7);
right();
right();
godown(7);
right();
