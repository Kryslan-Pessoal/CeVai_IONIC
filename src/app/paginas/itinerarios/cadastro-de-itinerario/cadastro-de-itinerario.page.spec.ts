import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroDeItinerarioPage } from './cadastro-de-itinerario.page';

describe('CadastroDeItinerarioPage', () => {
  let component: CadastroDeItinerarioPage;
  let fixture: ComponentFixture<CadastroDeItinerarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeItinerarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroDeItinerarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
