import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

const listaMascotas: Mascota[] = [
  {nombre: 'Abel', edad: 2, raza: 'golden', color: 'Gris', peso: 21},
  {nombre: 'Ciro', edad: 2, raza: 'golden', color: 'Gris', peso: 21},
  {nombre: 'Julia', edad: 5, raza: 'Chsco', color: 'Plomo', peso: 10},
  {nombre: 'Shado', edad: 1, raza: 'Grande', color: 'Amarillo', peso: 25},
  {nombre: 'Karina', edad: 2, raza: 'Perro', color: 'Carne', peso: 11},
  {nombre: 'Julio', edad: 2, raza: 'Piquenes', color: 'Naranja', peso: 14},
  {nombre: 'Maria', edad: 5, raza: 'Chuco', color: 'Gris', peso: 6},
  {nombre: 'Vanesa', edad: 9, raza: 'Toro', color: 'Negro', peso: 8},
  {nombre: 'Ludo', edad: 2, raza: 'Tarro', color: 'Verde', peso: 3}
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements AfterViewInit, OnInit  {

    displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
    dataSource = new MatTableDataSource<Mascota>(listaMascotas);

    loading: boolean = false;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private _snackBar: MatSnackBar, private _mascotaService:MascotaService){

    }
    ngOnInit(): void {
      this.obtenerMascotas();
    }


    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.paginator._intl.itemsPerPageLabel ='Items por Pagina';
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    obtenerMascotas(){
      this._mascotaService.getMascotas().subscribe(data => {
        console.log(data);
      })
    }

    eliminarMascota(){
      this.loading = true
      setTimeout(() => {    
        this.loading = false;    
        this._snackBar.open('La mascota fue eliminada conexito','',{
          duration:4000,
          horizontalPosition:'right'
        } );
      }, 3000);

    }
  
}
