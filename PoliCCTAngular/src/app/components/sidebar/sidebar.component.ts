import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/actividad', title: 'Actividad',  icon:'assignment_ind', class: '' },
    { path: '/ciudad', title: 'Ciudad',  icon:'assignment_city', class: '' },
    { path: '/seguridadFisica', title: 'Consulta Autorización',  icon:'search', class: '' },
    { path: '/registro', title:'Contratistas', icon: 'person', class:''},
    { path: '/criterio', title: 'Criterio',  icon:'assignment_late', class: '' },
    { path: '/registrodependencias', title: 'Dependencias',  icon:'assignment', class: '' },
    { path: '/documento', title: 'Documento',  icon:'assignment', class: '' },
    { path: '/employee-registration', title:'Empleados', icon: 'person', class:''},
    { path: '/request-management', title: 'Gestion De Solicitudes',  icon:'content_paste', class: '' },
    { path: '/sede', title: 'Sede',  icon:'assignment_campus', class: '' },
    { path: '/ubicacion', title: 'Ubicacion',  icon:'assignment_location', class: '' },
    { path: '/Formulario-Usuario', title: 'Usuario',  icon:'person', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
