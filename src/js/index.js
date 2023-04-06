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
