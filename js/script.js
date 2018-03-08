let ball
let p1
let p2

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  p1 = new Paddle(1,color('gray'))
  p2 = new Paddle(2,color('gray'))
  ball = new Ball()
}

function draw(){
	background('white')
	drawLine()
	ball.draw()
	ball.move()
	p1.draw()
	p2.draw()

	let checkScore = ball.checkScore()

	if(ball.collision(p1) || ball.collision(p2)){
		ball.move()
	}

	if (checkScore === 2){
		p2.updateScore()
	}
	else if(checkScore === 1){
		p1.updateScore()
	}

	if (keyIsPressed) {
		if(keyIsDown(87)){
			p1.move(-1)
		}
		if(keyIsDown(83)){
			p1.move(1)
		}
		if(keyIsDown(68)){
			p1.move2(1)
		}
		if(keyIsDown(65)){
			p1.move2(-1)
		}
		if(keyIsDown(UP_ARROW)){
			p2.move(-1)
		}
		if(keyIsDown(DOWN_ARROW)){
			p2.move(1)
		}
		if(keyIsDown(LEFT_ARROW)){
			p2.move3(-1)
		}
		if(keyIsDown(RIGHT_ARROW)){
			p2.move3(1)
		}
	}
	showScore()
}

const drawLine = function(){
	strokeWeight(4)
	stroke('blue')
	line(width / 4 + 100, 0,width / 4 + 100,height)
	stroke('red')
	line(width / 2, 0, width / 2,height)
	stroke('blue')
	line((width / 2 + (width / 4)) - 100, 0,(width / 2 + (width / 4) - 100),height)

	//porteria izquierda
	fill('#87CEEB')
	stroke('red')
	ellipse(0, height / 2, 400, 400)
	line(0,((height / 2)-70),20,((height / 2)-70))
	line(0,((height / 2)+70),20,((height / 2)+70))

	//porteria derecha
	fill('#87CEEB')
	stroke('red')
	ellipse(width, height / 2, 400, 400)
	line((width-20),((height / 2)-70),width,((height / 2)-70))
	line((width-20),((height / 2)+70),width,((height / 2)+70))

	//circulo de el medio
	fill('#214588')
	stroke('#87CEEB')
	ellipse(width / 2, height / 2, 80, 80)

	//puntos rojos
	fill('red')
	noStroke()
	ellipse(width / 2 - 200, height / 2 - 200, 20, 20)
	ellipse(width / 2 + 200, height / 2 - 200, 20, 20)
	ellipse(width / 2 - 200, height / 2 + 200, 20, 20)
	ellipse(width / 2 + 200, height / 2 + 200, 20, 20)
}

const showScore = function(){
	fill('black')
	textSize(50)
	text(p1.getScore(), width/2 -300, 70)
	text(p2.getScore(), width/2 +275, 70)
}