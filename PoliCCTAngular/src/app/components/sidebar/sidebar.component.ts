import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    
    { path: '/request-management', title: 'Gestion De Solicitudes',  icon:'content_paste', class: '' },
    { path: '/registro', title:'Registro', icon: 'person', class:''},
    { path: '/employee-registration', title:'Empleados', icon: 'person', class:''},
    { path: '/empleado', title: 'Registro de empleado', icon:'person', class:''},
    { path: '/user-profile', title: 'Usuarios',  icon:'person', class: '' },
    { path: '/actividad', title: 'Actividad',  icon:'assignment_ind', class: '' },
    { path: '/criterio', title: 'Criterio',  icon:'assignment_late', class: '' },
    { path: '/documento', title: 'Documento',  icon:'assignment', class: '' },
    { path: '/registrodependencias', title: 'Registro de Dependencias',  icon:'assignment', class: '' },
    { path: '/seguridadFisica', title: 'Consulta Autorización',  icon:'search', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' }

    
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
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
