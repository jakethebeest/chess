class bord{
	
	
	constructor(){
	let	p=[];
		

	 
	 for(let j=0;j<32;j++){
		 if(j<9)
		 p[j]=new piece(j+1,1,"black");
		 else if(j<16) p[j]=new piece(j+1,2,"black");
		 else if(j<25)  p[j]=new piece(j+1,7,"white");
		 else if(j<32)  p[j]=new piece(j+1,8,"white");
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
			
			
		}
		
		
	}
	


