export class KalturaConfig {
  constructor(
    public pid: string,
    public uiconfid: string,
    public flashvars: any = {}
  ) {}
}
