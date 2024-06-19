const posts = [
    {
        title: 'Copa Libertadores da América de 2023',
        content: "O Fluminense conquistou o seu primeiro título na competição ao superar o Boca Juniors na final por 2–1, após a prorrogação. Com isso, teve o direito de enfrentar o campeão da Copa Sul-Americana de 2023 na Recopa Sul-Americana de 2024, assim como se classificou automaticamente para a fase de grupos da Copa Libertadores da América de 2024 e para a Copa do Mundo de Clubes de 2023 e o Mundial de Clubes de 2025."
    },
    {
        title: 'Copa Libertadores da América de 2022',
        content: "Após chegar a sua terceira final em quatro anos, o Flamengo conquistou seu terceiro título da competição de forma invicta, superando o Athletico Paranaense na final por 1–0.[4] Com isso, garantiu enfrentar o campeão da Copa Sul-Americana de 2022 na Recopa Sul-Americana de 2023, assim como se classificou automaticamente para a fase de grupos da Copa Libertadores da América de 2023 e para a Copa do Mundo de Clubes da FIFA de 2022. Ademais, em 14 de março de 2023 a FIFA confirmou a participação do campeão do torneio no Mundial de Clubes FIFA de 2025, nos Estados Unidos."
    },
    {
        title: 'Copa Libertadores da América de 2021',
        content: "O Palmeiras conquistou seu terceiro título da competição – o segundo seguido, já que conquistou a Copa Libertadores da América de 2020 – ao vencer o Flamengo na final por 2–1. Com isso, ganhou o direito de representar a CONMEBOL na Copa do Mundo de Clubes da FIFA de 2021, nos Emirados Árabes Unidos, de enfrentar o campeão da Copa Sul-Americana de 2021 na Recopa Sul-Americana de 2022, assim como se classificou automaticamente para a fase de grupos da Copa Libertadores da América de 2022. Ademais, em 14 de março de 2023 a FIFA confirmou a participação do campeão do torneio no Mundial de Clubes FIFA de 2025, nos Estados Unidos."
    }
];

const wrapper = document.getElementById('posts');

for (var i=0; i<posts.length; i++) {
    const postData = posts[i];
    console.log(postData);

    const article = document.createElement('article');
    article.classList.add('article');

    const title = document.createElement('h2');
    title.classList.add('article-title');
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);
    article.appendChild(title);
    
    const content = document.createElement('p');
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);
    
    wrapper.appendChild(article);
}