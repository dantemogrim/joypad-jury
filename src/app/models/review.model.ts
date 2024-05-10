export class Review {
  public developer?: string;
  public game: string;
  public id: string;
  public imagePath?: string;
  public score: string;
  public text: string;

  constructor(
    developer: string,
    game: string,
    id: string,
    imagePath: string,
    score: string,
    text: string
  ) {
    this.developer = developer;
    this.game = game;
    this.id = id;
    this.imagePath = imagePath;
    this.score = score;
    this.text = text;
  }
}
