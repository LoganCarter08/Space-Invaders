// number of bullets that can be in the world at any time
bulletNum = 5;
// number of bombs that can be in the world at any time
bombNum = 25;

// list of bullets in the world
var bulletList = [];
// "object" for our bullets
function bullets() {
	// spawned is binary representation of if it has been shot or not
	this.spawned = 0;
	this.py	= -10;
	this.px = -10;
}
// list of bombs in the world
var bombList = [];
// our "object" for bombs
function bombs(){
	// spawned is binary representation of if it has been shot or not
	this.spawned = 0;
	this.py = 0;
	this.yv = -1;
}
// fill the bullet list with bullets
function fillBullets()
{
	for(var i=0;i<bulletNum;i++) 
	{
		var bul = new bullets();
		bulletList[i] = bul;
	}
}
// fill the bomb list with bombs
function fillBombs()
{
	for(var i=0;i<bombNum;i++) 
	{
		var bomb = new bombs();
		bombList[i] = bomb;
	}
}
// display the bullets on the canvas
function showBullets()
{
	for(var j=0; j<bulletList.length;j++)
	{
		// if we are out of the world then despawn it
		if(bulletList[j].py <= 0)
		{
			bulletList[j].spawned = 0;
		}
		// if the bullet has been shot
		if(bulletList[j].spawned == 1)
		{
			// move the bullet
			bulletList[j].py -= .03;
			// display the bullet
			ctx.fillRect(bulletList[j].px*gs,bulletList[j].py*gs,2,5);
		}
	}
}
// check if bombs have hit the player
function bombCollision()
{
	for(var i=0; i<bombList.length;i++)
	{
		// if we are out of the world, despawn it
		if(bombList[i].py >= 20)
		{
			bombList[i].spawned = 0;
		}
		// if the bullet is not spawned and the delay is over
		// don't try and shoot one that is already in the world
		if (bombDelay == bombDelayConst && bombList[i].spawned == 0)
		{
			// find a random ship to shoot from, take deadcount from total to save processing time. Full size causes lag
			enemyShoot = Math.floor(Math.random() * (army.length - deadCount));
			// if we chose one that was dead, increment until we find an alive one
			while (army[enemyShoot].dead == 1)
			{
				enemyShoot++;
			}
			// shoot from the chosen ship and spawn it
			bombList[i].px = army[enemyShoot].px;
			bombList[i].py = army[enemyShoot].py;
			bombList[i].spawned = 1;
			// reset our delay
			bombDelay = 0;
		}
		// if the bomb is in the world
		if(bombList[i].spawned == 1)
		{
			// update position
			bombList[i].py += .03;
			// display it
			ctx.fillRect(bombList[i].px*gs,bombList[i].py*gs,2,5);
			// if the bomb is touching our player then we need to show that we have been hit
			if ((bombList[i].px >= player.px && bombList[i].px <= player.px + .9) && (bombList[i].py >= player.py && bombList[i].py <= player.py +.9))
			{
				// decrement life, bomb is blown so despawn, and set life taken delay
				lives--;
				bombList[i].spawned = 0;
				playerLifeTaken = 45;
			}
		}
	}
}
// has our bullet hit an enemy ship?
function bulletCollision(i)
{
	// move through bullets
	for(var j=0; j<bulletList.length;j++)
	{
		// if the bullet is spawned and enemy passed in is not dead
		if(bulletList[j].spawned == 1 && army[i].dead == 0)
		{
			// is the bullet within the bounds of the enemy?
			if ((bulletList[j].px >= army[i].px && bulletList[j].px <= army[i].px + .9) && (bulletList[j].py >= army[i].py && bulletList[j].py <= army[i].py +.9))
			{
				// kill enemy, remove the bullet, increase score, and tell that we killed another enemy
				army[i].dead = 1;
				bulletList[j].spawned = 0;
				score += 5;
				deadCount++;
			}
		}
	}
}

function spawnBullet()
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