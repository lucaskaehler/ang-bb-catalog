import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/@shared/models/company';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Firestore, collectionData, collection, addDoc, query, getDocs, where, onSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private firestore: Firestore) { }

  users: any[] = [];
  
  async getUsers(){
    let businessCollection = query(collection(this.firestore, "users"));

    const querySnapshot = await getDocs(businessCollection);

    querySnapshot.forEach((doc) => {
      this.users.push(doc.data() as []);
    });
  }

  

  ngOnInit(): void {
  }

}
