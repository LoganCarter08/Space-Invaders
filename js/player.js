// "object" for our player
var player = {
	px		  : 10,
	py		  :	18,
	xv		  : 0
};

// make sure the player doesn't leave the canvas
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
// display our player 
function showPlayer()
{
	// if we weren't recently hit
	if (playerLifeTaken == 0)
	{
		ctx.fillStyle="red";
		ctx.fillRect(player.px*gs,player.py*gs,gs,gs);
	}
	// we were recently hit and we need to indicate taking damage, so display white
	else
	{
		ctx.fillStyle="white";
		ctx.fillRect(player.px*gs,player.py*gs,gs,gs);
		playerLifeTaken--;
	}
}