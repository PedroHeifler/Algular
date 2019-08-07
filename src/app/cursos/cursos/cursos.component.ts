import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursoService]
})
export class CursosComponent implements OnInit {

  exibicao: string[];

  constructor(private serviceCurso: CursoService) { }

  ngOnInit() {
    this.exibicao = this.serviceCurso.getCursos();
  }

}
