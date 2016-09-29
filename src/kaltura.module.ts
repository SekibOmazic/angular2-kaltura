import { NgModule } from '@angular/core';
import { KalturaPlayerComponent } from './kaltura/kaltura-player.component';

@NgModule({
  declarations: [ KalturaPlayerComponent ],
  exports: [ KalturaPlayerComponent ]
})
export class KalturaModule {
}
