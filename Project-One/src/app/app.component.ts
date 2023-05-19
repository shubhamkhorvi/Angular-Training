import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-One';
  greeting: string = "Good Afternoon!!";

  propertyBiding1 = "blue";
  propertyBiding2 = "purple";

  success = 'green';
  fail = 'red';
  hasError = false;

  cssClassNameForRedText = 'text-red';

  friendsList: Array<string> = ["Sanah", "Katti", "Girish", "Shashi", "Sacchya", "Akash", "Bhende", "Manoj", "Sahana"];
  friendsColor: string[] = ["cyan", "blue", "orange","green", "red", "yellow", "purple", "grey", "pink"];
  

}
