import { Component } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-catalogos',
  standalone: true,
  imports: [MultiSelectModule],
  templateUrl: './catalogos.component.html',
  styleUrl: './catalogos.component.css'
})
export class CatalogosComponent {

}
