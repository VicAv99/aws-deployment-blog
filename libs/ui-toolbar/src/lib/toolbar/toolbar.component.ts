import { Component } from '@angular/core';

@Component({
  selector: 'workspace-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  links = [
    { path: '/random', label: 'Random Joke', icon: 'shuffle' },
    { path: '/search', label: 'Search Jokes', icon: 'search' },
  ];
}
