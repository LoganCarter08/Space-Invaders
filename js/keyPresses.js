// on key lift function
function keyPush1(evt)
{
	//a key, make sure player doesn't keep moving after lifting the key
	if (evt.keyCode == 65)
	{
		player.xv=0;
	}
	//d key, make sure player doesn't keep moving after lifting the key
	else if(evt.keyCode == 68)
	{
		player.xv=0;
	}
	// stop shooting
	else if (evt.keyCode == 87)
	{
		shoot = 0;
	}
}
// is key pushed down?
function keyPush(evt) {
	//a, move left
	if (evt.keyCode == 65)
	{
		player.xv=-.06;
	}
	//d, move right
	else if(evt.keyCode == 68)
	{
		player.xv=.06;
	}
	//w, shoot bullet
	else if (evt.keyCode == 87)
	{
		shoot = 1;
	}
}