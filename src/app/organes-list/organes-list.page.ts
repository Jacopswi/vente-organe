import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrganesService } from '../organes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-organes-list',
  templateUrl: './organes-list.page.html',
  styleUrls: ['./organes-list.page.scss'],
})
export class OrganesListPage implements OnInit {

  organes: any = [];
  organesSubscription: Subscription | undefined;

  constructor(
    private organesService: OrganesService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.fetchOrganes();
  }

  // Récupération des organes
  fetchOrganes() {
    this.organesService.getAll().subscribe((data) => {
      this.organes = data;
    });
  }

  // Suppression d'un organe
  deleteOrgane(id: string) {
    this.organesService.deleteOrgan(id).then(() => {
      console.log('Organe supprimé');
      this.fetchOrganes();
    });
  }

  // Modification d'un organe avec une alerte
  async editOrgane(organe: any) {
    const alert = await this.alertController.create({
      header: 'Modifier Organe',
      inputs: [
        {
          name: 'organe',
          type: 'text',
          value: organe.organe,
          placeholder: 'Nom de l\'organe'
        },
        {
          name: 'quantite',
          type: 'number',
          value: organe.quantite,
          placeholder: 'Quantité'
        },
        {
          name: 'etat',
          type: 'text',
          value: organe.etat,
          placeholder: 'État de l\'organe'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Modifier',
          handler: (data) => {
            this.organesService.updateOrgan(organe.id, {
              organe: data.organe,
              quantite: data.quantite,
              etat: data.etat
            }).then(() => {
              console.log('Organe modifié');
              this.fetchOrganes(); // Mise à jour de la liste
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
