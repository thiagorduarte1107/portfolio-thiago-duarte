import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="bg-[var(--background)] min-h-screen">
      <app-hero></app-hero>
      <app-projects></app-projects>
      <app-skills></app-skills>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: var(--background);
    }
  `]
})
export class AppComponent {}