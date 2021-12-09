import { CoursesService } from './../service/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>; // Precisa iniciar a variavel dentro do construtor;

  displayedColumns = ['name', 'category'];

  // CoursesService: CoursesService;

  constructor(private CoursesService: CoursesService) {
   // this.CoursesService = new CoursesService();

   this.courses$ = this.CoursesService.list();

  }

  ngOnInit(): void {

  }

}
