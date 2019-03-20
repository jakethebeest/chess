let b;let img;
let can;
let xy=[];
let lockwhite=false;
let lockblack=true;
function setup(){
	can=createCanvas(600,600);
	can.position(100,100);can.class("bdd");
	for (let j=0;j<10;j++){
		xy[j]=[];
		
	}
	  for (let j=1;j<9;j++){
		for (let l=1;l<9;l++){
			xy[j][l]="empty";
		}
	  }
	b=new bord();
	//b.piece_setup();
	//p=new piece(2,2,"black");

		//image(Iking,27.7,27.7);


		}
function draw(){
	background(255);
b.bord_setup();
b.piece_setup();
b.murder();
fill(200,0,0);
text(lockwhite,550,100);
text(lockblack,550,150);
	}
	function mousePressed(){
	
		
	}
	
	