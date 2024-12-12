import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganesListPage } from './organes-list.page';

describe('OrganesListPage', () => {
  let component: OrganesListPage;
  let fixture: ComponentFixture<OrganesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
