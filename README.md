# angular-kaltura

A simple wrapper around Kaltura player

### Installation


To install Kaltura Player from npm:

```bash
npm install angular2-kaltura --save
```


### How to use

Import `KalturaModule` and define it as one of the imports of your application module:

```js
import { NgModule } from '@angular/core';
import { KalturaModule } from 'angular2-kaltura';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        KalturaModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
```

Add the following HTML to the component template in which you want to use the select component:

```html
<kaltura-player [config]="kalturaConfig" 
                [videoId]="videoId" 
                (ready)="doSomethingOnReady(targetId)">
</kaltura-player>
```

`videoId` is the entry_id from Kaltura 
`config` is a `KalturaConfig` object (yes I like Typescript).
`(ready)` is an event which is emitted when the Kaltura Player is ready. `targetId` is the DOM id of the element that wrapps the player.


Within the component class you have to set `KalturaConfig` object.

```js
private kalturaConfig: KalturaConfig;
...

this.kalturaConfig = new KalturaConfig('partner_id', 'uiconfid');
```


To customize the player you can pass the flashvars object to `KalturaConfig` like this:

```js
// flashvars is optional and allows you to set runtime uiVar configuration
this.kalturaConfig.flashvars = {
  autoPlay: false,
  IframeCustomPluginCss1: '/path/to/your/custom.css',
  mediaProxy: {
    entry: {
      name: 'Some title'
    }
  },
  topBarContainer: {
    plugin: true
  }
};

```

