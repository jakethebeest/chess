let b;let img;
let can;let p,p2,p3,p4,p5,p6;
let xy=[]
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
	p=new piece(2,2,"black");
	p2=new piece(3,3,"white");
	p3=new piece(4,6,"white");
	p4=new piece(2,8,"whtie");
	p5=new piece(2,7,"white");
		//image(Iking,27.7,27.7);


		}
function draw(){
	background(255);
b.bord_setup();
p.king(p);	
//p.display();
p.move(p);
p2.move(p2);
p2.queen(p2);

p3.bish(p3);
p3.move(p3);
p4.rook(p4);
p4.move(p4);
p5.pong(p5);
p5.move(p5);
	}
	function mousePressed(){
	
		
	}
	
	