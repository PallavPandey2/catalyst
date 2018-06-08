export namespace ViewModels {
  export class Question {
    public Id: number;
    public Title: string;
    public Description: string;
    public Likes: number;
    public Answers: number;
    public Tags: string;
    public Mentions: string;
    public Author: string;
    public Created: Date;

    constructor(args: any) {
      this.Id = args.Id || 0;
      this.Title = args.Title;
      this.Description = args.Description;
      this.Likes = args.Likes;
      this.Answers = args.Answers;
      this.Tags = args.Tags;
      this.Mentions = args.Mentions;
      this.Author = args.Author;
      this.Created = args.Created;
    }
  }
}
