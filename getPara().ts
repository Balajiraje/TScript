abstract class Shape {
    color: string;
    constructor(color: string) {
      this.color = color;
    }
    abstract getPerimeter(): number;
  }
  class Circle extends Shape {
    radius: number;
    constructor(color: string, radius: number) {
      super(color);
      this.radius = radius;
    }
    getPerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
    class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(color: string, width: number, height: number) {
      super(color);
      this.width = width;
      this.height = height;
    }
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  const myCircle = new Circle("Red", 5);
  const myRectangle = new Rectangle("Blue", 4, 6);
  console.log(`Circle Perimeter: ${myCircle.getPerimeter()}`);       
  console.log(`Rectangle Perimeter: ${myRectangle.getPerimeter()}`);
  