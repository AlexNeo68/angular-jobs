import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

interface Item {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items$: any;

  constructor(private firestore: Firestore) {
    this.items$ = collectionData(collection(firestore, 'roles'));
  }

  ngOnInit(): void {
    this.items$.subscribe((data) => console.log(data));
  }

  title = 'angular-jobs';
}
