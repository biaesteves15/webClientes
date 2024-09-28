import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta-clientes',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css'
})
export class ConsultaClientesComponent {

  clientes: any[] = [];

  constructor(
    private httpCliente: HttpClient
  ){}

  ngOnInit(){
    
    this.httpCliente
      .get('http://localhost:8081/api/clientes')
      .subscribe({
        next: (data) =>{
          this.clientes = data as any[];
        }
      })
  }
}
