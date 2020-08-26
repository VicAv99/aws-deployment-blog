import { Component, OnInit } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { JokesService, Joke } from '@workspace/core-data';

@Component({
  selector: 'workspace-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  joke$: Observable<Joke>;

  constructor(
    private clipboard: Clipboard,
    private jokesService: JokesService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getRandomJoke();
  }

  getRandomJoke() {
    this.joke$ = this.jokesService.radom();
  }

  copy(joke: string) {
    this.clipboard.copy(joke);
    this.snackbar.open('Joke copied to you Clipboard!', 'Ok', {
      duration: 2000
    })
  }

}
