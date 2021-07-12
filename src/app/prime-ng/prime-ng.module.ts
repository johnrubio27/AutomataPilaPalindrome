import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    FieldsetModule,
    InputTextModule,
    ListboxModule,
    KeyFilterModule,
    TooltipModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
