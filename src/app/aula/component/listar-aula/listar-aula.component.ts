import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/core/model';
import { AulaService } from '../../service/aula.service';

@Component({
  selector: 'app-listar-aula',
  templateUrl: './listar-aula.component.html',
  styleUrls: ['./listar-aula.component.css'],
})
export class ListarAulaComponent implements OnInit {

  private aulas: Aula[];

  constructor(private aulaService: AulaService) { }

  ngOnInit() {
    this.getAulas();
  }

  getAulas(): void {
    this.aulaService.listarAulas().subscribe(response => {
      this.aulas = response;
    }, err => console.log(err));
  }

  delete(id: number){
    console.log(this.aulas[id]);
  }

}
