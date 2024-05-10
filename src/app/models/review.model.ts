export class Review {
  public id;
  public game: string;
  public score: string;
  public text: string;

  constructor(id: string, game: string, score: string, text: string) {
    this.id = id;
    this.game = game;
    this.score = score;
    this.text = text;
  }
}
