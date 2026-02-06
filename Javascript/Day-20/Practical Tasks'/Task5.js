function student(name,age){
    this.name = name;
    this.age = age;
}

let s1 =new student("Sugi" ,19);
let s2=new student ("Syed",20);

student.prototype.sayhello=function(){
    console.log("hello , my name is "+this.name);
}

s1.sayhello();
s2.sayhello();