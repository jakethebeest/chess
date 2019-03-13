let	p=[];
let pressed=[];
		
class bord{
	
	
	constructor(){
	
		

	 
	 for(let j=1;j<33;j++){
		 if(j<9)
		 p[j]=new piece(j,1,"black");
		 else if(j<17){ p[j]=new piece(j-8,2,"black");pressed[j]="undeturmened";}
		 else if(j<25) { p[j]=new piece(j-16,7,"white");pressed[j]="undeturmened";}
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
			if(p[j+8].y==8||pressed[j+8]!="undeturmened"){
				
				//lockwhite=true;
				if(key=='q'&&keyIsPressed
				&&pressed[j+8]!="b"
				&&pressed[j+8]!="r"
				&&pressed[j+8]!="k"
				||pressed[j+8]=="q"){
			pressed[j+8]="q";
			p[j+8].move(p[j+8]);
			p[j+8].queen(p[j+8]);
			
				}
				else if(key=='k'&&keyIsPressed
				&&pressed[j+8]!="b"
				&&pressed[j+8]!="r"
				&&pressed[j+8]!="q"
				
				||pressed[j+8]=="k"){
					pressed[j+8]="k";
			p[j+8].move(p[j+8]);
			p[j+8].knight(p[j+8]);
				}
				else if(key=='r'
				&&pressed[j+8]!="b"
				&&pressed[j+8]!="k"
				&&pressed[j+8]!="q"
				&&keyIsPressed||pressed[j+8]=="r"){
			p[j+8].move(p[j+8]);
			p[j+8].rook(p[j+8]);
			pressed[j+8]="r";
				}
				else if(key=='b'&&keyIsPressed||pressed[j+8]=="b"){
			p[j+8].move(p[j+8]);
			p[j+8].bish(p[j+8]);		
			pressed[j+8]="b";
				}
			}
			else {
			p[j+8].move(p[j+8]);
			p[j+8].pong(p[j+8]);
			
			}
			}
//======================================================================================================================================}
		
	for(let j=1;j<9;j++){
			if(p[j+16].y==0||pressed[j+16]!="undeturmened"){
				
				//lockwhite=true;
				if(key=='q'&&keyIsPressed
				&&pressed[j+16]!="b"
				&&pressed[j+16]!="r"
				&&pressed[j+16]!="k"
				||pressed[j+16]=="q"){
			pressed[j+16]="q";
			p[j+16].move(p[j+16]);
			p[j+16].queen(p[j+16]);
			
				}
				else if(key=='k'&&keyIsPressed
				&&pressed[j+16]!="b"
				&&pressed[j+16]!="r"
				&&pressed[j+16]!="q"
				
				||pressed[j+16]=="k"){
					pressed[j+16]="k";
			p[j+16].move(p[j+16]);
			p[j+16].knight(p[j+16]);
				}
				else if(key=='r'
				&&pressed[j+16]!="b"
				&&pressed[j+16]!="k"
				&&pressed[j+16]!="q"
				&&keyIsPressed||pressed[j+16]=="r"){
			p[j+16].move(p[j+16]);
			p[j+16].rook(p[j+16]);
			pressed[j+16]="r";
				}
				else if(key=='b'&&keyIsPressed||pressed[j+16]=="b"){
			p[j+16].move(p[j+16]);
			p[j+16].bish(p[j+16]);		
			pressed[j+16]="b";
				}
			}
			else {
			p[j+16].move(p[j+16]);
			p[j+16].pong(p[j+16]);
			
			}
		
	}
//===============================================================================================
 for(let j=1;j<33;j++){
	 p[j].move(p[j])
 }
p[1].rook(p[1]);
p[2].knight(p[2]);
p[3].bish(p[3]);
p[4].queen(p[4]);
p[5].king(p[5]);
p[6].bish(p[6]);
p[7].knight(p[7]);
p[8].rook(p[8]);

p[25].rook(p[25]);
p[26].knight(p[26]);
p[27].bish(p[27]);
p[28].queen(p[28]);
p[29].king(p[29]);
p[30].bish(p[30]);
p[31].knight(p[31]);
p[32].rook(p[32]);

}
}

