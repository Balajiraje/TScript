class Student {
    private name: string;
    protected studentId: number;
  
    constructor(name: string, studentId: number) {
      this.name = name;
      this.studentId = studentId;
    }
  
    public displayInfo(): void {
      console.log(`Student Name: ${this.name}, Student ID: ${this.studentId}`);
    }
  }
  
  // Example usage:
  const student = new Student("Piri Lily", 12);
  student.displayInfo(); 
  