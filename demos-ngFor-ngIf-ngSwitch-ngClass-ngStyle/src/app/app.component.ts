import { Component, OnInit, ɵConsole } from '@angular/core';
import { StudentsColoum } from './app.contants';
import { Students } from './model/student.class.construct';
import { StudentsInit } from './model/student.class.no.construct';
import { StudentConstant } from './model/student.const.more';
import { STUDENT_NAME } from './model/student.const.sigle';
import { StudentEnumTest } from './model/student.enum';
import { StudentInterfaceTest } from './model/student.interfance';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demos-ngFor-ngIf-ngSwitch-ngClass-ngStyle';
  public student = new Students();
  public studentsInit = new StudentsInit();
  public studentInterfaceTest: StudentInterfaceTest = {id: 1, name: 'lvxin', sex: '女', detail: []};
  public studentInterfaceTests: Array<StudentInterfaceTest> = [{ id: 1, name: 'lvxin', sex: '女', detail: []}];
  public students: Array<StudentsColoum> = [
    {
      name: 'lvxin',
      sex: '女',
      age: 18,
      details: [
        {month: 1, maths: 100, chinese: 60, english: 50},
        {month: 2, maths: 100, chinese: 60, english: 50 },
        { month: 3, maths: 100, chinese: 60, english: 50 }
      ],
    },
     {
      name: 'liyuchen',
      sex: '男',
    },
    {
      name: 'xufengfeng',
      sex: '女',
      age: 22,
      details: [
        { month: 1, maths: 60, chinese: 100, english: 80 },
        { month: 2, maths: 60, chinese: 100, english: 80 },
        { month: 3, maths: 60, chinese: 100, english: 80 }
      ],
    },
  ];
  public studentsObj = {
    name: 'lvxin',
    sex: '女',
  };
  public objectKeys = Object.keys;
  public isValid = false;
  public stud = [
    {id: 1, name: 'lvxin', className: '2'},
    { id: 1, name: 'zhangming', className: '1' },
    { id: 1, name: 'lvxin' },
  ];
  ngOnInit() {
    console.log(this.student);
    console.log(this.studentsInit);
    console.log(StudentConstant.STUDENT_URL);
    console.log(STUDENT_NAME);
    console.log(StudentEnumTest.ID);
    console.log(this.studentInterfaceTest);
    console.log(this.studentInterfaceTests);
  }
  setNameLineClass(data) {
    switch (data) {
      case 0:
        return 'green';
        case 1:
        return 'yellow';
        case 2:
          return 'red';
    }
  }
  chooseTrClass(data: boolean) {
    if (data) {
      return 'text-success';
    }
    return 'text-faild';
  }
}
