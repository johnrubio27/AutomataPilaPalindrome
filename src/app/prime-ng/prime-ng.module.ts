import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {KeyFilterModule} from 'primeng/keyfilter';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    KeyFilterModule,
    TooltipModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
