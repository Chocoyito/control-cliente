import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  clientes: Cliente[]

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes
      }
    )
  }

  getSaldoTotal(){
    let saldoTotal: number = 0
    if (this.clientes){
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo
      })
    }
    return saldoTotal
  }

}
