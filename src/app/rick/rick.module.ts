import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickRoutingModule } from './rick-routing.module';
import { MortyComponent } from './components/morty/morty.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MortyComponent
  ],
  imports: [
    CommonModule,
    RickRoutingModule,
    MaterialModule
  ]
})
export class RickModule { }
