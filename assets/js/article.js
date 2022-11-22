let contentArticle = document.querySelector('#contentArticle');

export const ViewArticle = function (data) {
    this.article = () => {
        for(let i = 0; i < data.articles.length; i++) {
            console.log(data.articles[i]);
            let title = document.createElement('p');
            title.className = "title";
            contentArticle.appendChild(title);
            title.innerHTML = data.articles[i].title;

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