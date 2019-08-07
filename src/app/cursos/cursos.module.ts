import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { AlunoComponent } from '../alunos/aluno/aluno.component';

@NgModule({
  declarations: [CursosComponent, AlunoComponent],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent, AlunoComponent]
})
export class CursosModule { }
