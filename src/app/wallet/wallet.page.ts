import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrganesService } from '../organes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  organes: any = [];
  organesSubscription: Subscription | undefined;
  totalPrice: number = 0;

  constructor(
    private organesService: OrganesService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.fetchOrganes();
  }

  fetchOrganes() {
    this.organesService.getAll().subscribe((data) => {
      this.organes = data;
      this.totalPrice = this.getTotalPrice(); 
    });
  }

  getTotalPrice(): number {
    return this.organes.reduce((total: number, organe: any) => {
      return total + (organe.quantite * organe.prix);
    }, 0);
  }
}
