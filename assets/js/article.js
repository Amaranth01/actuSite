let title = document.createElement('h2');
let contentArticle = document.querySelector('#contentArticle');

export const ViewArticle = function (data) {
    this.article = () => {
        for(let i = 0; i < data.articles.length; i++) {

            title = document.createElement('h2');
            title.className = "title";
            contentArticle.appendChild(title);
            title.innerHTML = data.articles[i].title;
            console.log(data.articles[i])
            title.addEventListener('click', function () {
                let containerArticle = document.createElement('div');
                let content = document.createElement('p');
                let body = document.querySelector('body');

                containerArticle.style.backgroundColor = "darkgrey";
                containerArticle.style.position = "absolute";
                containerArticle.style.top = "0";
                containerArticle.style.right = "0";
                containerArticle.style.left = "0";
                containerArticle.style.bottom = "0";

                body.appendChild(containerArticle);
                containerArticle.className = "containerArticle";

                containerArticle.appendChild(content);
                content.className = "content";
                content.innerHTML = data.articles[i].content;

            });

            let resume = document.createElement('p');
            resume.className = "resume";
            contentArticle.appendChild(resume);
            resume.innerHTML = data.articles[i].description;

            let image = document.createElement('img');
            image.className = "image";
            contentArticle.appendChild(image);
            image.src = data.articles[i].urlToImage;

            let author = document.createElement('p');
            author.className = "author";
            contentArticle.appendChild(author);
            author.innerHTML = data.articles[i].author;

            let date = document.createElement('p');
            date.className = "date";
            contentArticle.appendChild(date);
            date.innerHTML = data.articles[i].publishedAt;
        }
    }
}