# angular-kaltura

A simple wrapper around Kaltura player

### Installation


To install Kaltura Player from npm:

```bash
npm install angular2-kaltura --save
```


### How to use

Just add following your component template:

```html
<kaltura-player [config]="kalturaConfig" [videoId]="videoId"></kaltura-player>
```

`videoId` is the entry_id from Kaltura and `config` is a `KalturaConfig` object (yes I like Typescript).

and in your component you'll need:

```js
private kalturaConfig: KalturaConfig;
...

this.kalturaConfig = new KalturaConfig('partner_id', 'uiconfid');

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

