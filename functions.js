class bord{
	//let x;
	//let y;
	//let plce1;
	
	//constructor 
	bord(){
	let	plce1;
		
		rectmode(CENTER);
	 //y=[];
	 //x=[];
	 plce1=[];
	for (let j=1;j<9;j++){
		plce1[j]=[];
		
	}
	}


	
	bord_setup(){
		for (let j=1;j<9;j++){
		for (let l=1;l<9;l++){
			if((j+l)%2==0){
				fill(255);
			}
			if((j+l)%2==1){
				fill(0);
			}
		rect(j*60,l*60,60,60);
	//a[j][l]=(l*55)+(j*55)*8;	
		
		}
		}
	
		
		
		
	}
	display(p){
//	ellipse(27.5*p.king.x,27.5,25,25);
	p.king();
	}
	
}

