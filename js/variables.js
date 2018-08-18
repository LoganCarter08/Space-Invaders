// indicate what level we are on
level = 1;
// character multiplier for storing on canvas
gs=tc=20;
// is game over? Binary rep, 0 is false 1 is true
over = 0;
// should we move down? Binary rep, 0 is false 1 is true
moveDown = 0;
// how many enemies are dead
deadCount = 0;
// x direction of the enemies, can be 1 or -1
mothershipX = 1;
// determines when to move the mothership next
bigCounter = 0;
// delays how fast we can shoot bullets
bulletCounter = 100;
// counter to show the player has been hit
playerLifeTaken = 0;
// delay to make sure we don't move the mothership down too many times
wait = 0;
// how long we wait before the enemies can shoot again
bombDelayConst = 500 - (level * 20);
// set delay to max
bombDelay = bombDelayConst;
// nuber of lives
lives = 3;
// current score
score = 0;
// delay the screen after we level up to show text
levelUpDelay = 0;
// delay the screen before game starts to show instructions
startDelay = 750;

