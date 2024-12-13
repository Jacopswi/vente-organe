import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrganesService } from '../organes.service';

@Component({
  selector: 'app-organes-list',
  templateUrl: './organes-list.page.html',
  styleUrls: ['./organes-list.page.scss'],
})
export class OrganesListPage implements OnInit {

  organes: any = [];
  organesSubscription: Subscription | undefined;

  constructor(private Organe : OrganesService) {

   }

  ngOnInit() {
    this.Organe.getAll().subscribe((data) => {
      this.organes = data;
    });
  }

}
