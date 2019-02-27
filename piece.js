class piece{
//constructor 
constructor(xs,ys,types){
this.x=xs;
this.y=ys;
this.type=types;
this.h=0;
this.pressed=0;
}	
	
	king(){
		if(this.h==0){
			this.img=createImg("king.png");
		this.img.class('picbdd');
		this.h=1;
	}
		if(
		mouseIsPressed||this.pressed==1){
			fill(0,255,0);
			rect((this.x-1-1)*55,(this.y-1-1)*55,55,55);
			xy[this.x-1-1][this.y-1-1]="green";
			rect((this.x-1)*55,(this.y-1-1)*55,55,55);
			rect((this.x+1-1)*55,(this.y-1-1)*55,55,55);
			rect((this.x+1-1)*55,(this.y-1)*55,55,55);
			rect((this.x+1-1)*55,(this.y+1-1)*55,55,55);
			rect((this.x-1)*55,(this.y+1-1)*55,55,55);
			rect((this.x-1-1)*55,(this.y+1-1)*55,55,55);
			rect((this.x-1-1)*55,(this.y-1)*55,55,55);
			this.pressed=1;
			
		}
		
	this.img.position((this.x-1)*55+127.5,(this.y-1)*55+127.5);
		xy[this.x][this.y]="filled"
//		fill(250,50,0);
	text("test"+this.x,10,10);
	}
	move(){
	//	loadPixels();
		if(
		mouseX<=xy[this.x-1-1][this.y-1-1]*55-10
		&& mouseX>=xy[this.x-1-1][this.y-1-1]*55+10
		&& mouseY<=xy[this.x-1-1][this.y-1-1]*55-10
		&& mouseY>=xy[this.x-1-1][this.y-1-1]*55+10
		&& mouseIsPressed
		&& xy[this.x-1-1][this.y-1-1]=="green"){
			this.x-=1;
			this.y-=1;
			this.pressed=0;
			
		}
		//updatePixels();
		
	}
	queen(x,y){}
	knight(x,y){}
	bish(x,y){}
	rook(x,y){}
	pong(x,y){}
	display(){
		
	
	}
	
	
}


