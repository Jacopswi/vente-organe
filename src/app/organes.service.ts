import { Injectable } from '@angular/core';
import { Organes } from './models/organes.model';
import { Firestore, collection, collectionData, CollectionReference } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrganesService {

  private dbPath = '/vente-organe';
  //private organesCollection: CollectionReference;
  private organesData : AngularFirestoreCollection<Organes> ;

  constructor(private firestore: AngularFirestore) {
    //this.organesCollection = collection(this.firestore, this.dbPath);
    this.organesData = this.firestore.collection('vente-organe');
  }

  getAll():Observable<Organes[]>{
    return this.organesData.valueChanges({idField: 'id'}) as Observable<Organes[]>;
  }

  addOrgan(organ: Organes): Promise<void> {
    const id = this.firestore.createId(); // Création d'un ID unique
    return this.organesData.doc(id).set(organ);
  }



  /*getOrganes() {
    return collectionData(this.organesCollection, { idField: 'id' }).pipe(  // Utiliser collectionData ici
      map((items: any) => {
        return items.map((item: any) => {
          return item;  // Pas besoin de .data() ici, car `collectionData` fait déjà le mappage.
        });
      })
    );
  }*/
}
