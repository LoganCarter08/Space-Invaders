function keyPush1(evt)
{
	//a
	if (evt.keyCode == 65)
	{
		player.xv=0;
	}
//d
	else if(evt.keyCode == 68)
	{
		player.xv=0;
	}
}

function keyPush(evt) {
//a
	if (evt.keyCode == 65)
	{
		player.xv=-.06;
	}
//d
	else if(evt.keyCode == 68)
	{
		player.xv=.06;
	}
//w
	else if (evt.keyCode == 87)
	{
		for (var i = 0; i < bulletList.length; i++)
		{
			if (bulletList[i].spawned == 0 && bulletCounter == 100)
			{
				bulletCounter = 0;
				bulletList[i].px = player.px;
				bulletList[i].py = player.py;
				bulletList[i].spawned = 1;
				break;
			}
		}
	}
}