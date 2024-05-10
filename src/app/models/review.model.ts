export class Review {
  public id: string;
  public game: string;
  public text: string;

  constructor(id: string, game: string, text: string, imagePath: string) {
    this.id = id;
    this.game = game;
    this.text = text;
  }
}
