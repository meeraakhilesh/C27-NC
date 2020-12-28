class Roof {

	constructor(x,y,w,h){

		var options={
			isStatic:true
		}

		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;

		this.body=Bodies.rectangle(x,y,w,h,options)
		World.add(world,this.body);

	}
	display () 
	{

		var rpos=this.body.position;
		
		rectMode(CENTER);
		fill("brown")
		rect(rpos.x,rpos.y,this.w,this.h)
	

	}

}


	