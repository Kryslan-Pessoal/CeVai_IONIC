import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracoesContaPage } from './configuracoes-conta.page';

describe('ConfiguracoesContaPage', () => {
  let component: ConfiguracoesContaPage;
  let fixture: ComponentFixture<ConfiguracoesContaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracoesContaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracoesContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
