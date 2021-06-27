import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsqueceuASenhaPage } from './esqueceu-a-senha.page';

describe('EsqueceuASenhaPage', () => {
  let component: EsqueceuASenhaPage;
  let fixture: ComponentFixture<EsqueceuASenhaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EsqueceuASenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsqueceuASenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
