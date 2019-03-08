let	p=[];
class bord{
	
	
	constructor(){
	
		

	 
	 for(let j=1;j<33;j++){
		 if(j<9)
		 p[j]=new piece(j,1,"black");
		 else if(j<17) p[j]=new piece(j-8,2,"black");
		 else if(j<26)  p[j]=new piece(j-16,7,"white");
		 else if(j<33)  p[j]=new piece(j-24,8,"white");
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
		piece_setup(){
			for(let j=1;j<9;j++){
			p[j+8].move(p[j+8]);
			p[j+8].pong(p[j+8]);
			}
			for(let j=1;j<9;j++){
			p[j+16].move(p[j+16]);
			p[j+16].pong(p[j+16]);
			}
		}
		
		
	}
	


