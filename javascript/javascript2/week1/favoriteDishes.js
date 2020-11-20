const favoriteDishes = ['dish1', 'dish2', 'dish3', 'dih4'];
const ul = document.querySelector('ul');
for (dish of favoriteDishes) {
    const li = document.createElement('li');
    li.innerText = dish;
    ul.appendChild(li);
}