import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ElementsModule } from '../elements.module';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent
  ]
})
export class CardModule { }
