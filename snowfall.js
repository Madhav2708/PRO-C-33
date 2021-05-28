class Snowfall{

    constructor(){

        var options = {

            isStatic:false
    
        }

        this.snowfall = Bodies.rectangle(random(1,800),0,40,40,options);
        World.add(world, this.snowfall);

    }

    display(){

        imageMode(CENTER);
        image(snowImg, this.snowfall.position.x, this.snowfall.position.y, 40,40);

    }
    
}