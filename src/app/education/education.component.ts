import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  education: Array<any> = [];
  ngOnInit(): void {
    let education1 = {
      fecha: '2018-2021',
      ubicacion: 'Cordoba, Ver.',
      nivel: 'Preparatoria',
      institucion: 'Escuela Hispano Mexicana',
    };

    let education2 = {
      fecha: '2021-Presente',
      ubicacion: 'Ixtasoctitlan, Ver.',
      nivel: 'Ingeniería de Software',
      institucion: 'Universidad Veracruzana',
    };

    this.education.push(education1);
    this.education.push(education2);
    console.log(this.education);
  }
}

