let b;let img;
let can;let p;
let xy=[]
function setup(){
	can=createCanvas(600,600);
	can.position(100,100);can.class("bdd");
	for (let j=0;j<8;j++){
		xy[j]=[];
		
	}
	b=new bord();
	p=new piece(2,2,"king");
		//image(Iking,27.7,27.7);


		}
function draw(){
	background(255);
b.bord_setup();
p.king();	
//p.display();
p.move();
	}
	function mousePressed(){
	
		
	}
	
	