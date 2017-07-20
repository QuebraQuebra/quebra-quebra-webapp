import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalPageComponent, ModalPageDirective } from '.';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { FolhaCamaraModule, FolhaCamaraComponent } from '../folha-camara';
import { FolhaSenadoModule, FolhaSenadoComponent } from '../folha-senado';
import { SobreModule, SobreComponent } from '../sobre';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    FolhaCamaraModule,
    FolhaSenadoModule,
    SobreModule
  ],
  declarations: [
    ModalPageComponent,
    ModalPageDirective
  ],
  exports: [ModalPageComponent],
  entryComponents: [
    FolhaCamaraComponent,
    FolhaSenadoComponent,
    SobreComponent
  ]
})
export class ModalPageModule { }
