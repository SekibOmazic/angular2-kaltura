import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KalturaPlayerComponent } from './kaltura/kaltura';
import { KalturaConfig } from './kaltura/kaltura-config';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ KalturaPlayerComponent, KalturaConfig ],
  exports: [ KalturaPlayerComponent, KalturaConfig ]
})
export class KalturaModule {
}
