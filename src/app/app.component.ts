import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  server = false;
  collections = [];
  onToogleDetails() {
    this.collections.push((this.collections.length)+1);
    return this.server = !this.server;
  }
}
