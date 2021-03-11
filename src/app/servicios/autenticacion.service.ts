import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  rol: string = 'comercial'; 

  constructor() { }

  isRrhhAccess() {
    return this.rol === 'rrhh';
  }

}
