class piece{
//constructor 
constructor(xs,ys,types){
this.x=xs;
this.y=ys;
this.type=types;
this.h=0;
this.pressed=0;
this.gy=[];
this.k=0;
this.gx=[];
this.moooved=0;
this.l=true;
this.canattack=[];
for(let j=1;j<10;j++){
	this.canattack[j]=[];
}
for(let j=1;j<10;j++){
for(let l=1;l<10;l++){
this.canattack[j][l]==false;	
}
}
this.died=false;
}	
	
	king(p){
		
		if(this.h==0){
			if(this.type=="white"){
			this.img=createImg("king.png");
			}
			if(this.type=="black"){
			this.img=createImg("(black) king.png");
			}
		this.img.class('picbdd');
		this.h=1;
	}
if(this.died==false){
		if(p.ckrange(this.x,this.y)||this.pressed==1){
			if(this.type=="black"&&lockblack==false){
			p.ckgreen(this.x+1,this.y);
			p.ckgreen(this.x-1,this.y);
			p.ckgreen(this.x+1,this.y+1);
			p.ckgreen(this.x,this.y+1);
			p.ckgreen(this.x-1,this.y+1);
			p.ckgreen(this.x+1,this.y-1);
			p.ckgreen(this.x,this.y-1);
			p.ckgreen(this.x-1,this.y-1);
			this.pressed=1;
			}
			if(this.type=="white"&&lockwhite==false){
			p.ckgreen(this.x+1,this.y);
			p.ckgreen(this.x-1,this.y);
			p.ckgreen(this.x+1,this.y+1);
			p.ckgreen(this.x,this.y+1);
			p.ckgreen(this.x-1,this.y+1);
			p.ckgreen(this.x+1,this.y-1);
			p.ckgreen(this.x,this.y-1);
			p.ckgreen(this.x-1,this.y-1);
			this.pressed=1;
			}
			
		}

		
	
	this.img.position(this.x*60+120,this.y*60+120);
	if(this.type=="white"){
		xy[this.x][this.y]="white";
	}
	else{
		xy[this.x][this.y]="black";
	}
}
	
else{
	this.x=-100;
	this.y=-100;
	this.img.position(this.x*60+120,this.y*60+120);
		if(this.l==true){
	p.remove_green();
	this.l==false}
}
		//stroke(0,200,0);

	}
	
	
	move(p){
		if(this.type=="white"&&lockwhite==false){
     for (let j=1;j<9;j++){
		for (let l=1;l<9;l++){
		if(this.gx[j]=="green"&&this.gy[l]=="green" && ((j!=this.x)||(l!=this.y)) &&xy[j][l]=="green"||this.canattack[j][l]==true   ){
				fill(0,255,0);
					
			rect(j*60,l*60,60,60);
			if(p.ckrange(j,l)){
			xy[this.x][this.y]="empty";
			this.moooved=1;
		    lockwhite=true;
			lockblack=false;
			this.x=j;
			this.y=l;
			this.pressed=0;
			p.remove_green()
	 	  this.k++;
		  
			}
		}

	 }
	 }
		}
		if(this.type=="black"&&lockblack==false){
     for (let j=1;j<9;j++){
		for (let l=1;l<9;l++){
		if(this.gx[j]=="green"&&this.gy[l]=="green" && ((j!=this.x)||(l!=this.y)) &&(xy[j][l]=="green"||[j][l]==true)   ){
				fill(0,255,0);
					
			rect(j*60,l*60,60,60);
			if(p.ckrange(j,l)){
			xy[this.x][this.y]="empty";
			this.moooved=1;
		    lockwhite=false;
			lockblack=true;
			this.x=j;
			this.y=l;
			this.pressed=0;
			p.remove_green()
	 	  this.k++;
		  
			}
		}

	 }
	 }
		}
}


	ckgreen(x,y){
		if(x>0&&y>0&&x<10&&x<10){
			if(xy[x][y]=="empty"||[x][y]==true){
				fill(0,260,0);
			rect(x*60,y*60,60,60);
			this.gx[x]="green";
			this.gy[y]="green";
			xy[x][y]="green";
			}
		}
		
		
	}
	remove_green(){
			  for (let g=1;g<10;g++){
		for (let e=1;e<10;e++){
		
			this.gx[g]="empty"
			this.gy[e]="empty"
			xy[g][e]="empty"
		}
	  }
		
		
	}
	
	
	ckrange(x,y){
		
			if(
		mouseX>=(x)*60
		&& mouseX<=(x)*60+60
		&& mouseY>=(y)*60
		&& mouseY<=(y)*60+60
		&& mouseIsPressed
		){
			return true;
			
		}
			else {
				return false;
			}
		}
	
	queen(p){
		if(this.h==0){
			if(this.type=="white"){
			this.img=createImg("queen.png");
			}
			if(this.type=="black"){
			this.img=createImg("(black) queen.png");
			}
		this.img.class('picbdd');
		this.h=1;
	}

		if(p.ckrange(this.x,this.y)||this.pressed==1){
			if((this.type=="white"&&lockwhite==false)||(this.type=="black"&&lockblack==false)){
			// move down right
			for(let j=1;j<8;j++){
				if(this.x+j<9){
				if(this.y+j<9){
				if(xy[this.x+j][this.y+j]=="empty"){
					p.ckgreen(this.x+j,this.y+j);
					
				}
				else{
					
				j=10;
				}}}}
				//move down left
		   for(let j=1;j<8;j++){
				if(this.x-j>0){
				if(this.y+j<9){
				if(xy[this.x-j][this.y+j]=="empty"){
					p.ckgreen(this.x-j,this.y+j);
					
				}
				else{
					
				j=10;
				}}}}
				//move up left
		   for(let j=1;j<8;j++){
				if(this.x-j>0){
				if(this.y-j>0){
				if(xy[this.x-j][this.y-j]=="empty"){
					p.ckgreen(this.x-j,this.y-j);
					
				}
				else{
					
				j=10;
				}}}}
				//move up right
		   for(let j=1;j<8;j++){
				if(this.x+j<9){
				if(this.y-j>0){
				if(xy[this.x+j][this.y-j]=="empty"){
					p.ckgreen(this.x+j,this.y-j);
					
				}
				else{
					
					
				j=10;
				}}}}
				
				
				
				for(let j=1;j<8;j++){
				
				if(this.y+j<9){
					if(xy[this.x][this.y+j]=="empty"){
					p.ckgreen(this.x,this.y+j);
					
				}
				else{
					
				j=10;
				
				}}}
				//move down
				for(let j=1;j<8;j++){
				
				if(this.y-j>0){
					if(xy[this.x][this.y-j]=="empty"){
					p.ckgreen(this.x,this.y-j);
					
				}
				else{
					
					
				j=10;
				}}}
				//move right
				for(let j=1;j<8;j++){
				
				if(this.x+j<9){
					if(xy[this.x+j][this.y]=="empty"){
					p.ckgreen(this.x+j,this.y);
					
				}
				else{
					
				j=10;
				}}}
				//move left
				for(let j=1;j<8;j++){
				
				if(this.x-j>0){
					if(xy[this.x-j][this.y]=="empty"){
					p.ckgreen(this.x-j,this.y);
					
				}
				else{
					
				j=10;
				}}}
			}		
		this.pressed=1;	
		
		}
		this.img.position(this.x*60+120,this.y*60+120);
	if(this.type=="white"){
				xy[this.x][this.y]="white";
	}
	else{
				xy[this.x][this.y]="black";
	}
	
	}
	
	
	
	knight(p){
if(this.died==false){
	if(this.h==0){
			if(this.type=="white"){
			this.img=createImg("knight.png");
			}
			if(this.type=="black"){
			this.img=createImg("(black) knight.png");
			}
		this.img.class('picbdd');
		this.h=1;
	}
		if(p.ckrange(this.x,this.y)||this.pressed==1){
		if((this.type=="white"&&lockwhite==false)||(this.type=="black"&&lockblack==false)){

			if(p.ckrange(this.x,this.y)||this.pressed==1){
			p.ckgreen(this.x-2,this.y+1);
			p.ckgreen(this.x-2,this.y-1);
			p.ckgreen(this.x+2,this.y+1);
			p.ckgreen(this.x+2,this.y-1);
			
			p.ckgreen(this.x+1,this.y-2);
			p.ckgreen(this.x-1,this.y-2);
			p.ckgreen(this.x+1,this.y+2);
			p.ckgreen(this.x-1,this.y+2);
			}	
			}
		}
		this.img.position(this.x*60+120,this.y*60+120);
	 if(this.type=="white"){
		 		xy[this.x][this.y]="white";
	 }
	 	else{
					xy[this.x][this.y]="black";
		}
}


else{
	this.x=-100;
	this.y=-100;
	this.img.position(this.x*60+120,this.y*60+120);
		if(this.l==true){
	p.remove_green();
	this.l==false}
}
	}
	bish(p){
		
		if(this.h==0){
			if(this.type=="white"){
			this.img=createImg("bish.png");
			}
			if(this.type=="black"){
			this.img=createImg("(black) bish.png");
			}
		this.img.class('picbdd');
		this.h=1;
	}
if(this.died==false){
		if(p.ckrange(this.x,this.y)||this.pressed==1){
					if((this.type=="white"&&lockwhite==false)||(this.type=="black"&&lockblack==false)){
	
			// move down right
			for(let j=1;j<8;j++){
				if(this.x+j<9){
				if(this.y+j<9){
				if(xy[this.x+j][this.y+j]=="empty"){
					p.ckgreen(this.x+j,this.y+j);
					
				}
				else{
					if(([this.x+j][this.y+j]=="trueWhite"&&lockwhite==false)||([this.x+j][this.y+j]=="trueBlack"&&lockblack==false)){
					p.ckgreen(this.x+j,this.y+j);	
					}
				j=10;
				}}}}
				//move down left
		   for(let j=1;j<8;j++){
				if(this.x-j>0){
				if(this.y+j<9){
				if(xy[this.x-j][this.y+j]=="empty"){
					p.ckgreen(this.x-j,this.y+j);
					
				}
				else{
					if(([this.x-j][this.y+j]=="trueWhite"&&lockwhite==false)||([this.x-j][this.y+j]=="trueBlack"&&lockblack==false)){
					p.ckgreen(this.x-j,this.y+j);	
					}
				j=10;
				}}}}
				//move up left
		   for(let j=1;j<8;j++){
				if(this.x-j>0){
				if(this.y-j>0){
				if(xy[this.x-j][this.y-j]=="empty"){
					p.ckgreen(this.x-j,this.y-j);
					
				}
				else{
					
				j=10;
				}}}}
				//move up right
		   for(let j=1;j<8;j++){
				if(this.x+j<9){
				if(this.y-j>0){
				if(xy[this.x+j][this.y-j]=="empty"){
					p.ckgreen(this.x+j,this.y-j);
					
				}
				else{
					
					
				j=10;
				}}}}
		this.pressed=1;	
					}
		}
	else {}

		this.img.position(this.x*60+120,this.y*60+120);
if(this.type=="white"){
			xy[this.x][this.y]="white";
	
}
		else{
					xy[this.x][this.y]="black";
		}
}
		else{
	this.x=-100;
	this.y=-100;
	this.img.position(this.x*60+120,this.y*60+120);
		if(this.l==true){
	p.remove_green();
	this.l=false}
	}

		
	}
	rook(p){
		if(this.h==0){
			if(this.type=="white"){
			this.img=createImg("rook.png");
			}
			if(this.type=="black"){
			this.img=createImg("(black) rook.png");
			}
		this.img.class('picbdd');
		this.h=1;
	}
if(this.died==false){
		if(p.ckrange(this.x,this.y)||this.pressed==1){
			if((this.type=="white"&&lockwhite==false)||(this.type=="black"&&lockblack==false)){

			for(let j=1;j<8;j++){
				
				if(this.y+j<9){
					if(xy[this.x][this.y+j]=="empty"){
					p.ckgreen(this.x,this.y+j);
					
				}
				else{
					
				j=10;
				
				}}}
				//move down
				for(let j=1;j<8;j++){
				
				if(this.y-j>0){
					if(xy[this.x][this.y-j]=="empty"){
					p.ckgreen(this.x,this.y-j);
					
				}
				else{
					
					p.ckgreen(this.x,this.y-j);	
					}
				j=10;
				}}}
				//move right
				for(let j=1;j<8;j++){
				
				if(this.x+j<9){
					if(xy[this.x+j][this.y]=="empty"){
					p.ckgreen(this.x+j,this.y);
					
				}
				else{
					
					
				j=10;
				}}}
				//move left
				for(let j=1;j<8;j++){
				
				if(this.x-j>0){
					if(xy[this.x-j][this.y]=="empty"){
					p.ckgreen(this.x-j,this.y);
					
				}
				else{
					
					
				j=10;
				}}}

				this.pressed=1;	
			}
				
	
		this.img.position(this.x*60+120,this.y*60+120);
			if(this.type=="white"){
		 xy[this.x][this.y]="green";
			}
			else{
						xy[this.x][this.y]="black";
			}
}
		else{
	this.x=-100;
	this.y=-100;
	this.img.position(this.x*60+120,this.y*60+120);
		if(this.l==true){
	p.remove_green();
	this.l=false}
}	
	}
	pong(p){
	if(this.h==0){
			if (this.type=="white"){
			this.img=createImg("pong.png");
		this.img.class('picbdd');
		this.h=1;
			}
			else {
					this.img=createImg("(black) pong.png");
		this.img.class('picbdd');
		this.h=1;
				
				
			}
	}
if(this.died==false){
	if(p.ckrange(this.x,this.y)||this.pressed==1){
		if((this.type=="white"&&lockwhite==false)||(this.type=="black"&&lockblack==false)){

			if(this.type=="white"){
			if(xy[this.x-1][this.y-1]=="black"){
			this.canattack[this.x-1][this.y-1]=true;
			}
			if(xy[this.x+1][this.y-1]=="black"){
			this.canattack[this.x+1][this.y-1]=true;
			}
			p.ckgreen(this.x,this.y-1);
			////////////////////////////////////////////////////
			if(this.moooved==0&&xy[this.x][this.y-1]!="filled"){
				p.ckgreen(this.x,this.y-2);
			}
			////////////////////////////////////////////////////
			}
			else {
			
			if(xy[this.x-1][this.y+1]=="white"){
			this.canattack[this.x-1][this.y+1]=true;
			}
			if(xy[this.x+1][this.y+1]=="white"){
			this.canattack[this.x+1][this.y+1]=true;
			}	
				p.ckgreen(this.x,this.y+1);
				//////////////////////////////////////////////
			if(this.moooved==0&&xy[this.x][this.y+1]!="filled"){
				p.ckgreen(this.x,this.y+2);
			}
			///////////////////////////////////////////////////////
			}
		}
		}
		this.img.position(this.x*60+120,this.y*60+120);
	
if(this.type=="white"){
		xy[this.x][this.y]="white";
}
else{
		xy[this.x][this.y]="black";

}	
}
else{
	this.x=-100;
	this.y=-100;
	this.img.position(this.x*60+120,this.y*60+120);
	if(this.l==true){
	p.remove_green();
	this.l==false}
	
	
}		
	}
	display(){
		
	
	}
	 
	
}


