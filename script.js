// переключение табов


const tabsBts = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(" .tabs__item")

// Скрывает табы и убирает класс actve

function hideTabs(){
    tabsItems.forEach(item=> item.classList.add("hide"));
    tabsBts.forEach(btn => btn.classList.remove("active"));
}

// Показывает переданный номер таба и делает соот-ю нопку активной

function showTab(index){
    tabsItems[index].classList.remove("hide");
    tabsBts[index].classList.add("active")
}

tabsBts.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}))




// якори

const anchors = document.querySelectorAll(".header__nav a");

console.log(anchors);

anchors.forEach(anc => {
    anc.addEventListener("click", function(event){
        event.preventDefault();

        const id = anc.getAttribute("href");

        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 80,
            behavior: "smooth"
        });
    });
})
