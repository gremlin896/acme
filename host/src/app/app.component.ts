import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {SharedComponentsComponent} from '@acme/shared/components'
import {SharedComponent} from '@acme/shared'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SharedComponentsComponent, SharedComponent],
  selector: 'acme-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'host';
}
