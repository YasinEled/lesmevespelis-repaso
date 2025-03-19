import { Component } from '@angular/core';
import { Plataforma } from '../modelsdedades/plataforma';
import { ServeiPlataformesService } from '../servei-plataformes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plataformes',
  templateUrl: './plataformes.component.html',
  styleUrl: './plataformes.component.css'
})
export class PlataformesComponent {

  constructor(public serveiPlataforma: ServeiPlataformesService, private router: Router) { }
  
  vPlataformes: Plataforma[] = [];
  formVisible = false
  titolForm = ""
  op = ""
  plataformaSeleccionada: Plataforma = { idPlataforma: '', nomPlataforma: '', fitxerLogo: '' ,url: ''}

  ngOnInit(): void {   
    this.getPlataformes()
  }

  getPlataformes() {
    this.vPlataformes = [];
    this.serveiPlataforma.getPlataformes().subscribe(dades => {
      dades.forEach(linia => {
        this.vPlataformes.push(<Plataforma>linia);
      })
    })
  }

  novaPlataforma() {
    this.op = "A"
    this.titolForm = "Nova Plataforma"
    this.plataformaSeleccionada = { idPlataforma: '', nomPlataforma: '', fitxerLogo: '', url: '' }
    this.formVisible = true
  }

  addPlataforma() {
    this.serveiPlataforma.addPlataforma(this.plataformaSeleccionada);
    this.formVisible = false;
    this.vPlataformes = []
    this.router.navigateByUrl('/plataformes');
  }

  modificarPlataforma(p: Plataforma) {
    this.op="M"
    this.plataformaSeleccionada.idPlataforma = p.idPlataforma
    this.plataformaSeleccionada.nomPlataforma = p.nomPlataforma
    this.plataformaSeleccionada.fitxerLogo = p.fitxerLogo
    this.titolForm="Modificar Plataforma"
    this.formVisible=true;
  }

  updPlataforma() {
    this.serveiPlataforma.updPlataforma(this.plataformaSeleccionada);
    this.formVisible=false;
    this.vPlataformes=[]
    this.router.navigateByUrl('/plataformes');
  }

  eliminarPlataforma(p: Plataforma) {
    this.op = "B"
    this.plataformaSeleccionada.idPlataforma = p.idPlataforma
    this.plataformaSeleccionada.nomPlataforma = p.nomPlataforma
    this.plataformaSeleccionada.fitxerLogo = p.fitxerLogo
    this.titolForm = "Eliminar Plataforma"
    this.formVisible = true;
  }

  delPlataforma() {
    this.serveiPlataforma.delPlataforma(this.plataformaSeleccionada);
    this.formVisible = false;
    this.vPlataformes = []
  }

  cancelar() {
    this.formVisible = false
  }
  redirigirBusqueda(nomPlataforma: string) {
    if (nomPlataforma) {
        const url = `https://www.${nomPlataforma}.com`;
        window.open(url, '_blank');
    }
  }

}
