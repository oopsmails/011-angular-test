export class Card {
  public title: string;
  public text: string;
  public hide: boolean;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

export interface ExampleItemData {
  id: number;
  name: string;
  text?: string;
}
