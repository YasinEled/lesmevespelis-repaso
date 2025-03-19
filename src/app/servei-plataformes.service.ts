import { Injectable } from '@angular/core';
import { Plataforma } from './modelsdedades/plataforma';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ServeiPlataformesService {

  bdPlataformes = '/plataformes/'

  constructor(private bd: AngularFireDatabase) { }

  getPlataformes() {
    return this.bd.list(this.bdPlataformes).valueChanges();
    // valueChanges() és un Observable que permetrà fer operacions asíncrones amb subscribe (callback)
  }

  addPlataforma(p: Plataforma) {
    const dades = {
      idPlataforma: p.idPlataforma.toUpperCase(),
      nomPlataforma: p.nomPlataforma,
      fitxerLogo: p.fitxerLogo
    }

    // aquí utilitzem promise enlloc de callback
    this.bd.object(this.bdPlataformes+'/'+p.idPlataforma).update(dades) // update equival a insert si no existeix l'element 
      .then(d => { console.log("Dades de la plataforma inserides correctament") })
      .catch(error => { console.log("Error accedint a les Plataformes") })

  }

  updPlataforma(p: Plataforma) {
    const dades = {
      idPlataforma: p.idPlataforma,
      nomPlataforma: p.nomPlataforma,
      fitxerLogo: p.fitxerLogo
    }

    // aquí utilitzem promise enlloc de callback
    this.bd.object(this.bdPlataformes + '/' + p.idPlataforma + '/').update(dades)
      .then(d => { console.log("Dades de la plataforma modificades correctament") })
      .catch(error => { console.log("Error accedint a les Plataformes") })
  }

  delPlataforma(p: Plataforma) {

    // aquí utilitzem promise enlloc de callback
    this.bd.object(this.bdPlataformes + '/' + p.idPlataforma).remove()
      .then(d => { console.log("Plataforma eliminada correctament") })
      .catch(error => { console.log("Error accedint a les Plataformes") })
  }


}
