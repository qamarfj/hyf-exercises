const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];
const ul = document.querySelector('ul');
for (pod of podcasts) {
    const li = document.createElement('li');
    const h1 = document.createElement('h1')
    h1.innerText = pod.name;
    li.appendChild(h1);
    if (pod.imageUrl) {
        imageInserter(pod.imageUrl, li)
    }
    ul.appendChild(li)
}
function imageInserter(imageUrl, elementToAppendImageTo) {
    const img = document.createElement('img');
    img.src = imageUrl;
    elementToAppendImageTo.appendChild(img);
}