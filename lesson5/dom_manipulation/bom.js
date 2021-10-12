function deleteItem() {
    document.querySelector(".listItem").remove();
    document.querySelector("#favchap").focus();
}


function addChapter() {
    let chapterName = document.querySelector("#favchap").value;
    if (chapterName != "") {
        let list = document.querySelector(".list");

        let listItem = document.createElement("li");
        listItem.setAttribute("class", "listItem");
        listItem.textContent = chapterName;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.setAttribute("class", "deleteButton");
        deleteButton.addEventListener("click", deleteItem);

        list.appendChild(listItem);
        listItem.appendChild(deleteButton);

        
        document.querySelector("#favchap").focus();
        document.querySelector("#favchap").value = "";
    }

}


document.querySelector("#submitButton").addEventListener("click", addChapter);