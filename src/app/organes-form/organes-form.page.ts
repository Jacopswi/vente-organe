import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganesService } from '../organes.service';
import { Organes } from '../models/organes.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-organes-form',
  templateUrl: './organes-form.page.html',
  styleUrls: ['./organes-form.page.scss'],
})
export class OrganesFormPage {
  organForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private organesService: OrganesService,
    private toastController: ToastController // Pour les notifications
  ) {
    this.organForm = this.fb.group({
      organe: ['', Validators.required],
      etat: ['', Validators.required],
      quantite: ['', [Validators.required, Validators.min(0)]],
    });
  }

  async onSubmit() {
    if (this.organForm.valid) {
      const newOrgan: Organes = this.organForm.value;

      try {
        await this.organesService.addOrgan(newOrgan);
        this.showToast('Organe ajouté avec succès !');
        this.organForm.reset();
      } catch (error : any) {
        this.showToast('Erreur : ' + error.message);
      }
    } else {
      this.showToast('Veuillez remplir tous les champs correctement.');
    }
  }

  // Affichage des notifications
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
