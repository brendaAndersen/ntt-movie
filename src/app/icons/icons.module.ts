import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Heart } from 'ng-bootstrap-icons/icons';
import { CollectionComponent } from '../components/collection/collection.component';
import { CommonModule } from '@angular/common';

const icons = {
 Heart
};

@NgModule({
  imports: [
    BootstrapIconsModule.pick(icons),
    CollectionComponent, CommonModule
  ],
  exports: [
    BootstrapIconsModule, CollectionComponent
  ],

})
export class IconsModule { }