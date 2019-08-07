import { Injectable } from '@angular/core';

@Injectable()

export class AlunoService {

  private alunos: string[];

  constructor() {
    this.alunos = [
      "Pedro",
      "Vinicius",
      "Victor",
      "Miguel"
    ]
   }

   getAlunos() {
     return this.alunos;
   }
}
