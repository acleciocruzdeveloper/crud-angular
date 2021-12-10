import { CoursesService } from './../service/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, pipe } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>; // Precisa iniciar a variavel dentro do construtor;

  displayedColumns = ['name', 'category'];

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.CoursesService.list()
    .pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos!');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}
}
