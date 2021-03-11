import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class RrhhGuard implements CanActivate {

  constructor(private autenticacionService: AutenticacionService,
              private router: Router) {}
  
  canActivate(): boolean {
    if (this.autenticacionService.isRrhhAccess()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
