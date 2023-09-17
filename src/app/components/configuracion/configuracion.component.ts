import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/models/configuracion.model';
import { ConfiguracionService } from 'src/app/services/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  permitirRegistro: boolean
  constructor(private router: Router, private configuracionService: ConfiguracionService) { }

  guardar(){
    let configuracion: Configuracion = {permitirRegistro: this.permitirRegistro}
    this.configuracionService.modificarConfiguracion(configuracion)
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.configuracionService.getConfiguracion().subscribe(
      (configuracion: Configuracion) => {
        if (configuracion)
          this.permitirRegistro = configuracion.permitirRegistro
      }
    )
  }

}
