import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'acme-shared-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-components.component.html',
  styleUrls: ['./shared-components.component.css'],
})
export class SharedComponentsComponent {}
