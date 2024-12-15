import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganesFormPage } from './organes-form.page';

describe('OrganesFormPage', () => {
  let component: OrganesFormPage;
  let fixture: ComponentFixture<OrganesFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganesFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
