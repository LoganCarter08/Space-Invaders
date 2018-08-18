// list of enemy ships
var army = [];
// "object" for our enemy ships
function enemy(px, py)
{
	this.dead = 0;
	this.px = px;
	this.py = py;
}
// fill the army array
function fillArmy()
{
	// count increases y value every 10 ships
	var count =0;
	// y position
	var y = 0;
	for(var i=0;i<50;i++) 
	{
		// if we've placed 10 ships then start new row
		if (count % 10 == 0)
		{
			count = 0;
			y++;
		}
		// make new ship shifted 5 over
		var ship = new enemy(count +5, y);
		army[i] = ship;
		count++;
	}
}
// move the army on the x axis
function moveMotherX()
{
	// if the delay to move is over
	if (bigCounter == 5)
	{
		// move each ship over
		for(var i=0;i<army.length;i++) 
		{
			army[i].px += (.03 * mothershipX * level);
		}
		// create a wait event to make sure we don't move down
		wait = 0;
		// reset counter
		bigCounter = 0;
	}
}
// move ships down
function moveMotherY()
{
	// if we are supposed to move down
	if (moveDown == 1)
	{
		// move each ship
		for(var i=0;i<army.length;i++) 
		{
			army[i].py += 1;
		}
		// don't move down anymore
		moveDown = 0;
		// need to wait before moving down
		wait = 1;
		// change x direction
		mothershipX *= -1;
	}
}
// display enemy ships and handle bullet 
function showArmy()
{
	for(var i=0;i<army.length;i++) 
	{
		// check if a bullet is on our ship
		bulletCollision(i);
		// if the ship is not dead
		if (army[i].dead == 0)
		{
			// display it
			ctx.fillRect(army[i].px*gs,army[i].py*gs,gs-2,gs-2);
			// if a ship is touching our player take a life
			enemyPlayerCollision(i);
			// if we don't need to wait and army is at the edge of the world then we need to move down
			if (wait ==0 && (army[i].px >= 19 || army[i].px <= 0))
			{
				moveDown = 1;
			}
		}
	}
}
// did the player touch an enemy?
function enemyPlayerCollision(i)
{
	// player is within the bounds of an enemy ship, if so decrement life
	if ((player.px >= army[i].px && player.px <= (army[i].px+.9)) && (player.py >= army[i].py && player.py <= (army[i].py+.9)))
	{
		lives--;
	}
}
// if all ships are dead
function checkIfDead()
{
	// we have eliminated all enemy ships
	if (deadCount == army.length)
	{
		level+=1;
		lives+=1;
		levelUpDelay = 750;
		initialize();
	}
}