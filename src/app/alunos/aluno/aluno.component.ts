import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  providers: [AlunoService]
})
export class AlunoComponent implements OnInit {

  public alunos: string[];

  constructor(private serviceAluno: AlunoService) { }

  ngOnInit() {
    this.alunos = this.serviceAluno.getAlunos();
  }

}
