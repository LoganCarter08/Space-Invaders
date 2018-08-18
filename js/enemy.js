var army = [];

function enemy(px, py)
{
	this.dead = 0;
	this.px = px;
	this.py = py;
}

function fillArmy()
{
	var count =0;
	var y = 0;
	for(var i=0;i<50;i++) 
	{
		if (count % 10 == 0)
		{
			count = 0;
			y++;
		}
		var ship = new enemy(count +5, y);
		army[i] = ship;
		count++;
	}
}

function moveMotherX()
{
	if (bigCounter == 5)
		{
			for(var i=0;i<army.length;i++) 
			{
				army[i].px += (.03 * mothershipX * level);
			}
			wait = 0;
			bigCounter = 0;
		}
}

function moveMotherY()
{
	if (moveDown == 1)
		{
			for(var i=0;i<army.length;i++) 
			{
				army[i].py += 1;
			}
			moveDown = 0;
			wait = 1;
			mothershipX *= -1;
		}
}

function showArmy()
{
	for(var i=0;i<army.length;i++) 
		{
			for(var j=0; j<bulletList.length;j++)
			{
				if(bulletList[j].spawned == 1 && army[i].dead == 0)
				{
					if ((bulletList[j].px >= army[i].px && bulletList[j].px <= army[i].px + .75) && (bulletList[j].py >= army[i].py && bulletList[j].py <= army[i].py +.75))
					{
						army[i].dead = 1;
						bulletList[j].spawned = 0;
						score += 5;
						deadCount++;
					}
				}
			}
			if (army[i].dead == 0)
			{
				ctx.fillRect(army[i].px*gs,army[i].py*gs,gs-2,gs-2);
				if ((player.px >= army[i].px && player.px <= (army[i].px+.75)) && (player.py >= army[i].py && player.py <= (army[i].py+.75)))
				{
					lives--;
				}
				if (wait ==0 && (army[i].px >= 19 || army[i].px <= 0))
				{
					moveDown = 1;
				}
			}
			if (deadCount == army.length)
			{
				level+=1;
				lives+=1;
				levelUpDelay = 750;
				initialize();
			}
		}
}