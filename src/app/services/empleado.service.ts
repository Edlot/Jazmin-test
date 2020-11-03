import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  getEmpleado() {
    return this.httpClient.get<Empleado[]>(this.URL + 'empleados');
  }
}
