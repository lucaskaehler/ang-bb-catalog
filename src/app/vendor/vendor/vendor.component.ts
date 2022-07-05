import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, query, getDocs, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Company } from 'src/app/@shared/models/company';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor(private firestore: Firestore) { }

  

  ngOnInit(): void {
  }

}
