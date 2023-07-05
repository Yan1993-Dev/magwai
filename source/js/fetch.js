const btnMore = document.querySelector('.card__btn-js')

const loadMore = async () => {
    async function getResponse() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let content = await response.json()
        content = content.splice(0, 5)
    
        let key;
    
        let list = document.querySelector('.card__list')
    
        for (key in content) {
            list.innerHTML += `
            <li class="card__list-item">
                <img src="https://via.placeholder.com/600/random" alt="" class="card__list-img">
                <div class="card__list-inner">
                <h3 class="card__list-title">${content[key].title}</h3>
                <p class="card__list-body">${content[key].body}</p>
                <a href="#" class="card__list-link" aria-label="прочитать больше">Continue reading</a>
                </div>
            </li>
            `
        }
    }
    getResponse()
}

btnMore.addEventListener('click', loadMore)
btnMore.click();