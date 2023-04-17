const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("dragstart", () => {
    // Gecikmeden sonra öğeye sürükleme sınıfı ekleiyoruz
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  // Sürükleme işlemi sonlandığında öğeden sürükleme classını alıyoruz.
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector(".dragging");
  //  Şu anda sürükleme yapılan öğeler hariç diğer öğelerin sürükelenen işleme göre bir dizi oluşturma
  let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

  // Sürüklenen öğenin hangi kardeş öğeden sonra yerleştirileceğini bulma.
  let nextSibling = siblings.find((sibling) => {
    const rect = sibling.getBoundingClientRect();
    const verticalMidpoint = rect.top + rect.height / 2;
    const horizontalMidpoint = rect.left + rect.width / 2;
    return e.clientY <= verticalMidpoint && e.clientX <= horizontalMidpoint;
  });

  //  Bulunan kardeş öğeyi öncesine sürüklenenen öğeyi eklemek için
  sortableList.insertBefore(draggingItem, nextSibling);
};

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());

const seribtn = document.querySelector(".seri");

const ciftbtn = document.querySelector(".cift");
const rightarea = document.querySelector(".right-side");
const tas = document.querySelectorAll(".isteka-area .tas");
const area = document.querySelector(".area");
const star = document.querySelectorAll("istek-area .tas img");

seribtn.addEventListener("click", () => {
  tas.forEach((e) => e.classList.replace("tas", "opennig-tas"));
  let currentLeft = 10;
  let currentTop = 5;
  for (let i = 0; i < tas.length; i++) {
    currentLeft += 50;
    tas[i].style.left = currentLeft + "px";
    if ((i + 1) % 3 === 0) {
      currentTop += 60;
      currentLeft = 10;
    }
    tas[i].style.top = currentTop + "px";
    tas[i].classList.replace("opennig-tas", "active");

    area.appendChild(tas[i]);
  }
});

ciftbtn.addEventListener("click", () => {
  tas.forEach((e) => e.classList.replace("tas", "opennig-tas"));
  let currentLeft = 10;
  let currentTop = 5;
  for (let i = 0; i < tas.length; i++) {
    currentLeft += 0;
    tas[i].style.left = currentLeft + "px";
    rightarea.appendChild(tas[i]);
    if (tas[i] == 1) {
      currentLeft = 10;
    } else if ((i + 1) % 2 === 0) {
      currentTop += 60;
      currentLeft = 10;
      console.log(tas[i]);
    } else {
      currentLeft = 60;
    }
    tas[i].style.top = currentTop + "px";
    tas[i].classList.replace("opennig-tas", "active");

    rightarea.appendChild(tas[i]);
  }
});
