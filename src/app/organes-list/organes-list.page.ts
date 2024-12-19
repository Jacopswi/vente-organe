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

  fetchOrganes() {
    this.organesService.getAll().subscribe((data) => {
      this.organes = data;
    });
  }

  async deleteOrgane(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmer la suppression',
      message:
        'Êtes-vous sûr de vouloir supprimer cet organe ? Cette action est irréversible.',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel', 
          handler: () => {
            console.log('Suppression annulée');
          },
        },
        {
          text: 'Supprimer',
          role: 'destructive', 
          handler: () => {
            this.organesService.deleteOrgan(id).then(() => {
              console.log('Organe supprimé');
              this.fetchOrganes(); 
            });
          },
        },
      ],
    });

    await alert.present();
  }

  async editOrgane(organe: any) {
    const alert = await this.alertController.create({
      header: 'Modifier Organe',
      inputs: [
        {
          name: 'organe',
          type: 'text',
          value: organe.organe,
          placeholder: "Nom de l'organe",
        },
        {
          name: 'quantite',
          type: 'number',
          value: organe.quantite,
          placeholder: 'Quantité',
        },
        {
          name: 'etat',
          type: 'text',
          value: organe.etat,
          placeholder: "État de l'organe",
        },
        {
          name: 'prix',
          type: 'number',
          value: organe.prix,
          placeholder: "Prix de l'organe",
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Modifier',
          handler: (data) => {
            this.organesService
              .updateOrgan(organe.id, {
                organe: data.organe,
                quantite: data.quantite,
                etat: data.etat,
                prix: data.prix,
              })
              .then(() => {
                console.log('Organe modifié');
                this.fetchOrganes(); // Mise à jour de la liste
              });
          },
        },
      ],
    });

    await alert.present();
  }
}
