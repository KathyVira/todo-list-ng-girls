import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    
    <app-list-manager></app-list-manager>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My To Do List APP";
}
