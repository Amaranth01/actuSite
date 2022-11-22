import {ViewArticle} from "./article";

let requestURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2f11819de4e64c5fbea67a325d5a906b";

export const News = function () {
    this.initJson = () => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("GET", requestURL);
        xhr.onload = function () {
            if (xhr.status !== 200) {
                console.log('erreur');
            }
            let viewArticle = new ViewArticle(xhr.response);
            viewArticle.article();
        }
        xhr.send();
    }
}

