import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const RoutesAdministrador: RouteInfo[] = [
    { path: '/actividad', title: 'Actividad',  icon:'assignment_ind', class: '' },
    { path: '/ciudad', title: 'Ciudad',  icon:'location_city', class: '' },
    { path: '/criterio', title: 'Criterio',  icon:'assignment_late', class: '' },
    { path: '/registrodependencias', title: 'Dependencias',  icon:'home_work', class: '' },
    { path: '/documento', title: 'Documento',  icon:'assignment', class: '' },
    { path: '/sede', title: 'Sede',  icon:'apartment', class: '' },
    { path: '/ubicacion', title: 'Ubicacion',  icon:'place', class: '' },
    { path: '/Formulario-Usuario', title: 'Usuario',  icon:'face', class: '' },
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' }
];
export const RoutesSeguridad: RouteInfo[] = [
  { path: '/seguridadFisica', title: 'Consulta Autorización',  icon:'search', class: '' }
];
export const RoutesContratista: RouteInfo[] = [
  { path: '/registro', title:'Contratistas', icon: 'business_center', class:''},
  { path: '/employee-registration', title:'Empleados', icon: 'group_add', class:''},
  { path: '/request-management', title: 'Gestion De Solicitudes',  icon:'content_paste', class: '' }
];
export const RoutesEmpleado: RouteInfo[] = [
  { path: '/video', title: 'video',  icon:'video_library', class: '' }
];   
  
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuAdminitrador: any[];
  menuSeguridad: any[];
  menuContratista: any[];
  menuEmpleado: any[];

  panelOpenState = false;
  
  constructor() { }

  ngOnInit() {
    this.menuAdminitrador = RoutesAdministrador.filter(menuAdminitrador => menuAdminitrador);
    this.menuSeguridad = RoutesSeguridad.filter(menuSeguridad => menuSeguridad);
    this.menuContratista = RoutesContratista.filter(menuContratistas => menuContratistas);
    this.menuEmpleado = RoutesEmpleado.filter(menuEmpleado => menuEmpleado);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}