import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

interface Token {
  token: string;
}

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private tokensCollections: AngularFirestoreCollection<any>;
  
  constructor(
    private swUpdate: SwUpdate,
    private fireMessaging: AngularFireMessaging,
    private databaseFirestore: AngularFirestore
  ) {
    this.tokensCollections = this.databaseFirestore.collection<Token>('tokens');
  }

  ngOnInit(): void {
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }

  updatePWA() {
    this.swUpdate.available.subscribe(value => {
      console.log('update:', value);
      window.location.reload();      
    })
  }

  requestPermission() {
    this.fireMessaging.requestToken
      .subscribe(token => {
        console.log(token);
        this.tokensCollections.add({token})
      });
  }

  listenNotifications() {
    this.fireMessaging.messages
      .subscribe(message => {
        console.log(message);
      })
  }
}
