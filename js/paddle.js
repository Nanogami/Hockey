const Paddle = function (player, color){
	
	const c = color
	const w = 30
	const h = 200
	const p = player 
	const speed = 10
	const UP = -1
	const DOWN = 1
	const RIGHT = 1
	const LEFT = -1
	let x = p === 1 ? 80 : width - h
	let y = Math.floor(height / 2)
	let score = 0

	const getX = function(){
		return x
	}
	const getY = function(){
		return y
	}

	const getW = function(){
		return w
	}

	const getH = function(){
		return h
	}
	const getScore = function(){
		return score
	}

	const draw = function (){
		rectMode(CORNER)
		noStroke()
		fill(c)
		rect(x, y, w, h)		
	}

	const move = function(dir){
		if(edge(dir))
		{	
			y+= (speed * dir)
		}	
	}

	const move2 = function(dir2){
		
		if(edge2(dir2))
		{	
			x+= (speed * dir2)
		}
	}

	const move3 = function(dir3){
		
		if(edge3(dir3))
		{	
			x+= (speed * dir3)
		}	
	}

	const edge = function(dir){
		return(dir === UP && y > 0   ||   dir === DOWN && y < height - h)

	}
	const edge2 = function(dir2){
		return(dir2 === LEFT  && x > 0 ||  dir2 === RIGHT && x < (width/2) - w)

	}
	const edge3 = function(dir3){
		return(dir3 === LEFT  && x > (width/2) ||  dir3 === RIGHT && x < width-w)

	}

	const updateScore = function(){
		score++
	}

	return{
		draw,
		move,
		move2,
		move3,
		getH,
		getW,
		getX,
		getY,
		getScore,
		updateScore
	}
}