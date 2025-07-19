const item = document.getElementById("item");
const btnAddItem = document.getElementById("btnAddItem");

btnAddItem.addEventListener('click', addItem) 

function addItem(event) {
  event.preventDefault();
  if (item.value.trim() === "") return;

  const listItem = document.getElementById("shoppingList");

  const newItem = createItem(item.value);
  
  listItem.prepend(newItem);
  item.value = " "
}

function createItem(text) {
  const li = document.createElement("li");

  let p = document.createElement("p");
  p.innerText = text

  let button = document.createElement("button");
  button.addEventListener('click', () => {
    li.remove();
    document.querySelector(".alertError").classList.add('erro');
    setTimeout(() => {
      document.querySelector(".alertError").classList.remove("erro");
    }, 2000);
  })

  let img = document.createElement("img");
  img.setAttribute("src", "assets/images/trash.svg");
  button.append(img)

  li.append(p, button);

  li.addEventListener('click', () => li.classList.toggle("checked"));

  return li;
} 