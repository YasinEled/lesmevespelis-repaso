import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ServeiAutenticarService } from '../servei-autenticar.service';
import { ServeiPerfilsService } from '../servei-perfils.service';
import { Perfil } from '../modelsdedades/perfil';

@Component({
  selector: 'app-menusuperior',
  templateUrl: './menusuperior.component.html',
  styleUrl: './menusuperior.component.css'
})
export class MenusuperiorComponent {
  showDropdown = false;
  isMenuOpen = false;
  email: any;
  urlAvatar = ''

  constructor(public serveiAutenticar: ServeiAutenticarService, private serveiPerfil: ServeiPerfilsService) {}

  ngOnInit(): void {
    this.email=localStorage.getItem("email")?.toString()
    this.getAvatar()
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }



  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    this.serveiAutenticar.logout();
    this.showDropdown = false;
  }
  getAvatar() {
    this.serveiPerfil.getPerfil().subscribe((dades) => {
   if (dades != null) {
    this.urlAvatar = (<Perfil>dades).urlAvatar
   }
   })
   }
}

