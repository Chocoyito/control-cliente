import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) {  }

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  id: string

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.clienteService.getCliente(this.id).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  editarCliente({value, valid}: NgForm): void{
    value.id = this.id
    // Modificamos el cliente
    this.clienteService.editarCliente(value) 
    this.router.navigate(['/'])
  }

  eliminarCliente(): void{
    if (confirm("¿Seguro que desea eliminar el cliente?")){
      this.clienteService.eliminarCliente(this.cliente)
      this.router.navigate(['/'])
    }
  }
}
