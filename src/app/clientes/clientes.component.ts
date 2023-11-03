import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './services/cliente.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
  
  clientes: Cliente[] = [];
  private _clientSubsbription: Subscription = new Subscription;

  constructor(private _clienteService: ClienteService) { 
  }

  ngOnInit(): void {
    this._clientSubsbription = this._clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  ngOnDestroy(): void {
    this._clientSubsbription.unsubscribe();
  }


}
