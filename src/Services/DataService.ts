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
}

export default new DataService();
