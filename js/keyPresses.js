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
		if (over == 0)
		{
			for (var i = 0; i < bulletList.length; i++)
			{
				// make sure we get a none spawned bullet and the delay is over
				if (bulletList[i].spawned == 0 && bulletCounter == 100)
				{
					// reset delay and spawn bullet at player location
					bulletCounter = 0;
					bulletList[i].px = player.px;
					bulletList[i].py = player.py;
					bulletList[i].spawned = 1;
					break;
				}
			}
		}
		else
		{
			reset();
		}
	}
}