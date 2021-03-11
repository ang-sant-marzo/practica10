import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isRrhh: boolean;

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.isRrhh = this.autenticacionService.isRrhhAccess();
  }

}
