import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagePipe } from './noImage.pipe';
import { ImagesPipe } from './images.pipe';
import { AveragePipe } from './average.pipe';
import { NoProfilePipe } from './noProfile.pipe';
import { NoLogoPipe } from './noLogo.pipe';



@NgModule({
  declarations: [
    NoImagePipe,
    ImagesPipe,
    AveragePipe,
    NoProfilePipe,
    NoLogoPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoImagePipe,
    ImagesPipe,
    AveragePipe,
    NoProfilePipe,
    NoLogoPipe,
  ]
})
export class PipesModule { }
