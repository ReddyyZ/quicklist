let itemsCount = 2;

const input = document.querySelector("#item");
const submitBtn = document.querySelector("#submit-btn");
const itemList = document.querySelector("#item-list");
const alert = document.querySelector("#alert");
const closeAlertBtn = document.querySelector("#alert button");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const inputValue = input.value;
    if(!inputValue) return;
    
    addNewItem(inputValue);
});

closeAlertBtn.onclick = (e) => {
    e.preventDefault();
    alert.classList.add("hidden")
}

function addNewItem(item) {
    const itemId = itemsCount++;
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    itemContainer.id = `item-${itemId}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const itemName = document.createElement("p");
    itemName.textContent = item;

    const deleteBtn = document.createElement("button");
    const btnIcon = document.createElement("img");
    btnIcon.src = "img/trash.png";

    deleteBtn.append(btnIcon);
    deleteBtn.onclick = (e) => {
        e.preventDefault();
        deleteItem(itemId);
    };

    itemContainer.append(
        checkbox,
        itemName,
        deleteBtn
    );

    itemList.append(itemContainer);
}

function deleteItem(id) {
    const item = document.querySelector(`#item-${id}`);
    item.remove();
    itemsCount--;
    alert.classList.remove("hidden");
}