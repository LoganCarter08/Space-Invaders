bulletNum = 15;
bombNum = 25;

var bulletList = [];
function bullets() {
	this.spawned = 0;
	this.py	= -10;
	this.px = -10;
}

var bombList = [];
function bombs(){
	this.spawned = 0;
	this.py = 0;
	this.yv = -1;
}

function fillBullets()
{
	for(var i=0;i<bulletNum;i++) 
	{
		var bul = new bullets();
		bulletList[i] = bul;
	}
}

function fillBombs()
{
	for(var i=0;i<bombNum;i++) 
	{
		var bomb = new bombs();
		bombList[i] = bomb;
	}
}

function showBullets()
{
	for(var j=0; j<bulletList.length;j++)
	{
		if(bulletList[j].py <= 0)
		{
			bulletList[j].spawned = 0;
		}
		if(bulletList[j].spawned == 1)
		{
			bulletList[j].py -= .03;
			ctx.fillRect(bulletList[j].px*gs,bulletList[j].py*gs,2,5);
		}
	}
}

function bombCollision()
{
	for(var i=0; i<bombList.length;i++)
	{
		if(bombList[i].py >= 20)
		{
			bombList[i].spawned = 0;
		}
		if (bombList[i].spawned == 0 && bombDelay == bombDelayConst)
		{
			enemyShoot = Math.floor(Math.random() * (army.length - deadCount));
			while (army[enemyShoot].dead == 1)
			{
				enemyShoot++;
			}
			bombList[i].px = army[enemyShoot].px;
			bombList[i].py = army[enemyShoot].py;
			bombList[i].spawned = 1;
			spawnBomb = 0;
			bombDelay = 0;
		}
		if(bombList[i].spawned == 1)
		{
			bombList[i].py += .03;
			ctx.fillRect(bombList[i].px*gs,bombList[i].py*gs,2,5);
			if ((bombList[i].px >= player.px && bombList[i].px <= player.px + .75) && (bombList[i].py >= player.py && bombList[i].py <= player.py +.75))
			{
				lives--;
				bombList[i].spawned = 0;
				playerLifeTaken = 45;
			}
		}
	}
}