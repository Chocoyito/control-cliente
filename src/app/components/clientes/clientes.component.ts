import { Component, ElementRef, NgProbeToken, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessage } from 'angular2-flash-messages/module/flash-message';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService, private flashMessages: FlashMessagesService) { }

  clientes: Cliente[]
  
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  @ViewChild('f') clienteForm: NgForm
  @ViewChild('btnCerrar') btnCerrar: ElementRef

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

  agregarCliente(form: NgForm){
    const value: Cliente = form.value;
    const valid = form.valid;
    console.log(JSON.stringify(value))


    this.clienteService.agregarCliente(value)
    this.clienteForm.resetForm()
    this.cerrarModal()

    // if (!valid){
    //   this.flashMessages.show('Por favor llene el formulario correctamente', {
    //     cssClass: 'alert-danger', 
    //     timeout: 4000
    //   })
    // }
  }


  private cerrarModal(){
    this.btnCerrar.nativeElement.click()
  }
}
