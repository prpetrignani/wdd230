const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    //input.value = '';//

    if(myItem.length === 0) {
        alert("Please, enter a valid chapter name and number!")
    } else {
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');
        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = "\u274C";
        list.appendChild(listItem);
        document.getElementById('favchap').value = "";
        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });
        }



    input.focus();
});