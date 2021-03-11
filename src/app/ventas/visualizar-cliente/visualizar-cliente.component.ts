import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-visualizar-cliente',
  templateUrl: './visualizar-cliente.component.html',
  styleUrls: ['./visualizar-cliente.component.css']
})
export class VisualizarClienteComponent implements OnInit {

  cliente: any;

  constructor(private ruta: ActivatedRoute,
              private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.cliente = this.clientesService.getCliente(this.ruta.snapshot.params['id']);
  }

}
