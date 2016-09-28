import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KalturaPlayerComponent } from './kaltura/kaltura';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ KalturaPlayerComponent ],
  exports: [ KalturaPlayerComponent ]
})
export class KalturaModule {
}
