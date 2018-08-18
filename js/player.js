var player = {
	px		  : 10,
	py		  :	18,
	xv		  : 0
};

function playerBounds()
{
	if(player.px < 0)
	{
		player.px = 0;
	}
	else if(player.px > 19)
	{
		player.px = 19;
	}
}

function showPlayer()
{
	if (playerLifeTaken == 0)
		{
			ctx.fillStyle="red";
			ctx.fillRect(player.px*gs,player.py*gs,gs,gs);
		}
		else
		{
			ctx.fillStyle="white";
			ctx.fillRect(player.px*gs,player.py*gs,gs,gs);
			playerLifeTaken--;
		}
}