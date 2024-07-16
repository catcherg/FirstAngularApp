import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  imports: [HomeComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
  //test
}

