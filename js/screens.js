// show the intro screen that displays instructions
function showIntro()
{
	ctx.font = "20px Orbitron";
	ctx.fillStyle = "white";
	ctx.fillText("Press 'a' and 'd' to move", 60, 200);
	ctx.fillText("and 'w' to shoot!", 100, 220);
	startDelay--;
}
// show stats at the bottom of the canvas. not actually a screen
function showStats()
{
	out = "Lives: " + lives;
	out2 = "Level: " + level;
	out3 = "Score: " + score;
	ctx.font = "10px Orbitron";
	ctx.fillStyle = "white";
	ctx.fillText(out2, 10, 395);
	ctx.fillText(out, 185, 395);
	ctx.fillText(out3, 330, 395);
}
// show the game over screen
function showGameOver()
{
	ctx.font = "20px Orbitron";
	ctx.fillStyle = "white";
	ctx.fillText("Game over!", 152, 200);
	ctx.fillText(out3, 170, 220);
	ctx.fillText("Refresh to restart!", 120, 240);
	startDelay--;
}