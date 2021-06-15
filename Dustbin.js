class Dustbin
{
	constructor(x,y,width,height)
	{
		this.width=width;
		this.height=height;
		
		
		this.image=loadImage("dustbingreen.png")
		
		
		this.Body=Bodies.rectangle(x,y,width,height,{isStatic:true})
		
		World.add(world, this.Body);

	}

	display()
	{
	var pos=this.Body.position;
	fill ("green")
	rectMode(CENTER)
	rect(pos.x,pos.y,this.width,this.height)
	imageMode(CENTER)
	image(this.image,1150,590,145,150)
	

			

		
			
	}

}