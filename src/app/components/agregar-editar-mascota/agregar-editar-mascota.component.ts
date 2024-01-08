import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from 'src/app/interfaces/mascota';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit {
loading: boolean = false;
formMascota : FormGroup;

constructor(private fb: FormBuilder){
  this.formMascota = this.fb.group({
    nombre: ['', Validators.required],
    raza: ['', Validators.required],
    color: ['', Validators.required],
    edad: ['', Validators.required],
    peso: ['', Validators.required]
  })

}
  ngOnInit(): void {
  
}
agregarMascota(){
 /*const nombre = this.formMascota.get('nombre')?.value;*/
 const nombre = this.formMascota.value.nombre;

 //armando el objeto para agregar
 const mascota: Mascota ={
  nombre: this.formMascota.value.nombre,
  raza: this.formMascota.value.raza,
  color: this.formMascota.value.color,
  edad: this.formMascota.value.edad,
  peso: this.formMascota.value.peso

 }
 console.log(mascota);

}
}
