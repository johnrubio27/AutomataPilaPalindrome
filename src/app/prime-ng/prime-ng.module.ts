import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    DividerModule,
    FieldsetModule,
    InputTextModule,
    ListboxModule,
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    TooltipModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
