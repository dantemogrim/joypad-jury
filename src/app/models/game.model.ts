export class Game {
  public id: string;
  public name: string;
  public review: string;

  constructor(id: string, name: string, review: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.review = review;
  }
}
