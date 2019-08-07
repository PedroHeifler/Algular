import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CursoService {

  private cursos: string[] = [];

  constructor() {
    this.cursos = [
      "Tecnico em Informatica",
      "Tecnico em Redes",
      "Superior em Analise e Desenvolvimento",
      "Superior Superior"
    ]
  }

  getCursos() {
    return this.cursos;
  }
}
