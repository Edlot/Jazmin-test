import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../model/cliente';
import { ClienteService } from './../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    private clienteService: ClienteService) { }

   clientes: Cliente[];

  ngOnInit(): void {
    this.clienteService.getCliente().subscribe(
      res => {
        this.clientes = res;
      }
    );
  }

}