import { Component } from '@angular/core';

interface ExampleItemData {
  id: number;
  name: string;
  text?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
