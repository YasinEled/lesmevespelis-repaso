import { Component } from '@angular/core';
import { ServeiPerfilsService } from '../servei-perfils.service';
import { Perfil } from '../modelsdedades/perfil';

@Component({
  selector: 'app-perfils',
  templateUrl: './perfils.component.html',
  styleUrl: './perfils.component.css'
})
export class PerfilsComponent {

  constructor (private serveiPerfil: ServeiPerfilsService) { }

  llistaFitxers: File[] = []  // només hi haurà un fitxer però treballem genèricament amb una llista
  previewFitxer = ''  // aquí generarem la imatge en base64 del fitxer carregat
  perfilSeleccionat?: Perfil;
  nomFitxerAvatarVell=''
  uid=''
  email=''
  nom=''
  urlAvatar=''
  tpc = 0;      // percentatge de càrrega al pujar la imatge
  nouFitxer=''

  ngOnInit(): void {   
    this.getPerfil()
  }

  triarFitxer(event: any): void {
    this.llistaFitxers = event.target.files
    this.generarPrevisualitzacio();
  }

  generarPrevisualitzacio(): void {
    if (this.llistaFitxers[0]) {
      const file = this.llistaFitxers[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.previewFitxer = reader.result as string; // Assignem la previsualització
      };
      reader.readAsDataURL(file); // Llegeix el fitxer com a URL base64
    }
  }

  getPerfil() {
    this.serveiPerfil.getPerfil().subscribe(dades => {
      this.perfilSeleccionat=<Perfil> dades
      if (dades != null) {
        this.urlAvatar=this.perfilSeleccionat.urlAvatar
        this.uid=this.perfilSeleccionat.uid
        this.email=this.perfilSeleccionat.email
        this.nom=this.perfilSeleccionat.nom
        this.nomFitxerAvatarVell=this.perfilSeleccionat.nomFitxerAvatar
      }
    })
  }

  // pugem el fitxer i actualitzem el nom i els altres camps
  updPerfil(): void {
    if (this.llistaFitxers) {
      const imatge: File | null = this.llistaFitxers[0];     // agafem el primer (únic)
      this.llistaFitxers = []
      if (imatge) {
        this.perfilSeleccionat = new Perfil(imatge);  // fem una instància de la classe Avatar utilizant el constructor al que li passem el fitxer a pujar
        this.perfilSeleccionat.email=this.email
        this.perfilSeleccionat.nom=this.nom
        this.perfilSeleccionat.uid=this.uid
        this.perfilSeleccionat.nomFitxerAvatar=imatge.name
        // primer eliminem l'avatar antic si existia
        this.serveiPerfil.eliminarFitxer(this.perfilSeleccionat!, this.nomFitxerAvatarVell)

        // inserim el perfil amb el nou avatar
        this.serveiPerfil.pushPerfil(this.perfilSeleccionat).subscribe(
          percentatge => {
            this.tpc = Math.round(percentatge ? percentatge : 0);
            this.getPerfil()
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }


}
