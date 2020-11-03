import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from './../../model/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(
    private empleadoService: EmpleadoService) { }

   empleados: Empleado[];

  ngOnInit(): void {
    this.empleadoService.getEmpleado().subscribe(
      res => {
        this.empleados = res;
      }
    );
  }

}
