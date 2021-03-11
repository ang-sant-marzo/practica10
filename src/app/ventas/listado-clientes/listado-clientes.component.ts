import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  titulo: string;
  clientes: any;

  constructor(private ruta: ActivatedRoute,
              private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.titulo = this.ruta.snapshot.data.titulo;
    this.clientes = this.clientesService.getClientes();
  }

}
