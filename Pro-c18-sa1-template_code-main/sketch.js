var student1, student2
function setup() {
  createCanvas(400,400);
student1 = new Student("Veer", 12, 7)
student2 = new Student("Madhiva", 12, 7)
}

function draw() 
{
  background(30);
  student1.display()
  student2.display()
}




