import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrarComUsuarioESenhaPage } from './entrar-com-usuario-e-senha.page';

describe('EntrarComUsuarioESenhaPage', () => {
  let component: EntrarComUsuarioESenhaPage;
  let fixture: ComponentFixture<EntrarComUsuarioESenhaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarComUsuarioESenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrarComUsuarioESenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
