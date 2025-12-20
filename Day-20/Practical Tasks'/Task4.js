class shape{
    constructor(name){
        this.name=name;
    }
}

class circle extends shape{
    constructor(radius){
        super("Circle");
        this.radius=radius;
    }

    area(){
        return 3.14*this.radius*this.radius;
    }
}

let c1=new circle(5);
console.log("shape :",c1.name);
console.log("area :", c1.area());

