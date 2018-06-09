import { ViewModels } from "../Models/ViewModels";

export class DataService {
  public GetQuestions = (): Promise<Array<ViewModels.Question>> => {
    return new Promise<Array<ViewModels.Question>>(
      (
        resolve: (Questions: Array<ViewModels.Question>) => void,
        reject: (error: any) => void
      ): void => {
        fetch("http://catalystwebap.azurewebsites.net/api/questions", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(reponseJson => {
            debugger;
            var data = JSON.parse(reponseJson);
            var Questions = new Array<ViewModels.Question>();
            data.forEach(elem => {
              var ques = new ViewModels.Question({
                Id: elem.ID,
                Title: elem.Title,
                Description: elem.Description,
                Likes: elem.Likes,
                AnswersCount: elem.AnswersCount,
                Tags: elem.Tags,
                Author: elem.Author,
                Mentions: elem.Mentions,
                Created: elem.Created
              });
              Questions.push(ques);
            });
            resolve(Questions);
          })
          .catch(error => {});
      }
    );
  };

  public GetSelectedQuestion = (questionId: number): Promise<ViewModels.Question> => {
    return new Promise<ViewModels.Question>((resolve: (Questions: ViewModels.Question) => void, reject: (error: any) => void): void => {
        fetch("http://catalystwebap.azurewebsites.net/api/questions/"+ questionId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
        .then(reponseJson => {
          debugger;
          var data = JSON.parse(reponseJson);
          var answers = Array<ViewModels.Answer>();
          if(data.Answers && data.Answers.length > 0)
          {
            data.Answers.forEach(elem => {
              var ans = new ViewModels.Answer({
                Id: elem.ID,
                Answer: elem.Answer,
                Likes: elem.Likes,
                Accepted: elem.Accepted,
                Author: elem.Author,
                Mentions: elem.Mentions,
                Created: elem.Created
              });
              answers.push(ans);
            });
          }
          var ques = new ViewModels.Question({
            Id: data.ID,
            Title: data.Title,
            Description: data.Description,
            Likes: data.Likes,
            AnswersCount: data.AnswersCount,
            Answers: answers,
            Tags: data.Tags,
            Author: data.Author,
            Mentions: data.Mentions,
            Created: data.Created
          });
          resolve(ques);
        })
        .catch(error => {});
      }
    );
  };
  public AddQuestion = (question: ViewModels.Question): Promise<boolean> => {
    return new Promise<boolean>((resolve: (isAdded: boolean) => void, reject: (error: any) => void): void => {
        fetch("http://catalystwebap.azurewebsites.net/api/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "Title":question.Title,
            "Description":question.Description,
            "Likes":0,
            "Tags":question.Tags,
            "Author":question.Author,
            "Mentions":question.Mentions
          })
        })
        .then(response => response.json())
        .then(reponseJson => {
            resolve(reponseJson);
        })
        .catch(error => {});
      }
    );
  };

  public AddNewAnswer = (newAnswer: ViewModels.Answer): Promise<Array<ViewModels.Answer>> => {
    return new Promise<Array<ViewModels.Answer>>((resolve: (updatedAnswers: Array<ViewModels.Answer>) => void, reject: (error: any) => void): void => {
        fetch("http://catalystwebap.azurewebsites.net/api/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          // body: JSON.stringify({
          //   "Title":newAnswer.Title,
          //   "Description":question.Description,
          //   "Likes":0,
          //   "Tags":question.Tags,
          //   "Author":question.Author,
          //   "Mentions":question.Mentions
          // })
        })
        .then(response => response.json())
        .then(reponseJson => {
            resolve(reponseJson);
        })
        .catch(error => {});
      }
    );
  };
}

export default new DataService();
