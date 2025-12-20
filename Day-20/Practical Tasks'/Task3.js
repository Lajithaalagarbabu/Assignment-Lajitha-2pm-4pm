class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  display() {
    console.log(
      "Name: " + this.name +
      ", Age: " + this.age +
      ", Course: " + this.course
    );
  }
}

// Create 3 students
let s1 = new Student("Abi", 20, "Computer Science");
let s2 = new Student("Raji", 21, "IT");
let s3 = new Student("Kumari", 22, "AI");

// Display student details
s1.display();
s2.display();
s3.display();
