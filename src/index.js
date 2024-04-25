const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $nickname = document.querySelector('h2');
const $description = document.querySelector('p');


const data = 
{
    name: "Guillermo Prituluk",
    nickname: "@Prituluk",
    description: "Estudiante en la Academia de Platzi, cursando la carrera de Desarrollo Web Frontend. Busco adquirir y ampliar mis habilidades y conocimientos para destacar en el ámbito del desarrollo web.",
    avatar: "...",
    social: 
    [
      {
        name: "twitter",
        url: "https://twitter.com/",
        username: "",
      },
      {
        name: "instagram",
        url: "https://instagram.com/",
        username: "",
      },
    ],
    
    links: 
    [
      {
        name: "GitHub",
        url: "https://github.com/Prituluk",
        color: "red",
        emoji: "📖",
      },
    ],
    footer: "Made with Love on Argentina",
};


const main = () => {
    let name = document.createTextNode(data?.name);
    let nickname = document.createTextNode(data?.nickname);
    let description = document.createTextNode(data?.description);
    let links = data?.links.map((link) => {
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
          href="${link.url}" target="_blank">
          ${link.name}
        </a>
        <span>${link.emoji}</span>
      </div>`;
    }).join('');
    let newItem = document.createElement('section');
    newItem.innerHTML = links;
    $links.appendChild(newItem);
    $name.appendChild(name);
    $nickname.appendChild(nickname);
    $description.appendChild(description);

}

main();