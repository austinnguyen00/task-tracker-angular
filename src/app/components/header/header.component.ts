import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: String = 'Task Tracker';

  toggleAddTask() {
    console.log('toggle');
  }
}


