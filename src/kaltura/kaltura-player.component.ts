import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { KalturaConfig } from './kaltura-config';

@Component({
  selector: 'kaltura-player',
  template: '<div id="kaltura_player_{{playerId}}"></div>'
})
export class KalturaPlayerComponent implements OnInit {

  @Input() playerId: string;
  @Input() secure: boolean;
  @Input() videoId: string;
  @Input() config: KalturaConfig;

  @Output() ready: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.loadScript();
  }

  public loadScript() {

    if (document.getElementById('kalturaLib') === null) {
      let src = `http${ this.secure ? 's' : '' }://cdnapi${ this.secure ? 'sec' : '' }.kaltura.com/p/${ this.config.pid }/sp/${ this.config.pid }00/embedIframeJs/uiconf_id/${ this.config.uiconfid }/partner_id/${ this.config.pid }`;

      const node = document.createElement('script');
      node.id = 'kalturaLib';
      node.src = src;
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';

      node.onload = this.onKalturaScriptLoaded.bind(this);

      document.getElementsByTagName('head')[0].appendChild(node);
    } else {
      this.onKalturaScriptLoaded();
    }
  }

  onKalturaScriptLoaded() {
    const intervalID = setInterval(() => {
      if (typeof (<any>window).kWidget === `undefined`) {
        console.log('Kaltura script not loaded.');
        return;
      }

      clearInterval(intervalID);

      const target = this.playerId ? `kaltura_player_${ this.playerId }` : `kaltura_player_`;

      (<any>window).kWidget.embed({
        'targetId': target,
        'wid': `_${ this.config.pid }`,
        'uiconf_id': this.config.uiconfid,
        'flashvars': this.config.flashvars,
        'cache_st': Math.random(),
        'entry_id': this.videoId // this.config.entryid
      });

      (<any>window).kWidget.addReadyCallback( ( targetId: string ) => {
        this.ready.emit(targetId);
      });

    }, 50);
  }
}
