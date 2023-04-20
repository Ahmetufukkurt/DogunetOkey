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
  let currentLeft = 5;
  let currentTop = 5;
  const itemsPerRow = 3;
  const itemsPerReset = 6;
  let itemsCounter = 0;
  if (window.matchMedia("(min-width: 1700px)").matches) {
    for (let i = 0; i < tas.length; i++) {
      tas[i].style.left = currentLeft + "px";
      tas[i].style.top = currentTop + "px";

      currentLeft += 33; // her öğenin genişliği ve aralık için 20 piksel sağa kaydır

      if ((i + 1) % itemsPerRow === 0) {
        // yeni bir satır başlat
        currentLeft = 300;
        currentTop += 40; // her öğenin yüksekliği ve aralık için 20 piksel aşağı kaydır
      }

      // öğelerin stil sınıflarını güncelle
      if (tas[i].className == "opennig-tas") {
        tas[i].classList.replace("opennig-tas", "active");
      } else {
        tas[i].classList.replace("active-2", "active");
      }

      area.appendChild(tas[i]);

      itemsCounter++;
      if (itemsCounter === itemsPerReset) {
        itemsCounter = 0;
        currentLeft = 5;
        let currentTop = 10;
        currentTop += tas[i].offsetHeight + 12; // her öğenin yüksekliği ve aralık için 20 piksel aşağı kaydır
      }
    }
  } else {
    let currentLeft = 3;
    let currentTop = 5;

    for (let i = 0; i < tas.length; i++) {
      tas[i].style.left = currentLeft + "px";
      tas[i].style.top = currentTop + "px";
      currentLeft += 17; // her öğenin genişliği ve aralık için 20 piksel sağa kaydır

      if ((i + 1) % itemsPerRow === 0) {
        // yeni bir satır başlat
        currentLeft = 170;
        currentTop += 25; // her öğenin yüksekliği ve aralık için 20 piksel aşağı kaydır
      }

      // öğelerin stil sınıflarını güncelle
      if (tas[i].className == "opennig-tas") {
        tas[i].classList.replace("opennig-tas", "active");
      } else {
        tas[i].classList.replace("active-2", "active");
      }

      area.appendChild(tas[i]);

      itemsCounter++;
      if (itemsCounter === itemsPerReset) {
        itemsCounter = 0;
        currentLeft = 3;
        let currentTop = 10;
        currentTop += tas[i].offsetHeight + 12; // her öğenin yüksekliği ve aralık için 20 piksel aşağı kaydır
      }
    }
  }
});

ciftbtn.addEventListener("click", () => {
  tas.forEach((e) => e.classList.replace("tas", "opennig-tas"));
  let currentLeft = 10;
  let currentTop = 5;
  if (window.matchMedia("(min-width: 1700px)").matches) {
    let currentLeft = 5;
    let currentTop = 5;
    const itemsPerRow = 2;

    for (let i = 0; i < tas.length; i++) {
      tas[i].style.left = currentLeft + "px";
      tas[i].style.top = currentTop + "px";

      currentLeft += 27; // her öğenin genişliği ve aralık için 20 piksel sağa kaydır
      if ((i + 1) % itemsPerRow === 0) {
        // yeni bir satır başlat
        currentLeft = 5;
        currentTop += 41; // her öğenin yüksekliği ve aralık için 20 piksel aşağı kaydır
      }

      // öğelerin stil sınıflarını güncelle
      if (tas[i].className == "opennig-tas") {
        tas[i].classList.replace("opennig-tas", "active-2");
      } else {
        tas[i].classList.replace("active", "active-2");
      }

      rightarea.appendChild(tas[i]);
    }
  } else {
    let currentLeft = 3;
    let currentTop = 3;
    const itemsPerRow = 2;

    for (let i = 0; i < tas.length; i++) {
      tas[i].style.left = currentLeft + "px";
      tas[i].style.top = currentTop + "px";

      currentLeft += 20; // her öğenin genişliği ve aralık için 20 piksel sağa kaydır
      if ((i + 1) % itemsPerRow === 0) {
        // yeni bir satır başlat
        currentLeft = 3;
        currentTop += 25; // her öğenin yüksekliği ve aralık için 20 piksel aşağı kaydır
      }

      // öğelerin stil sınıflarını güncelle
      if (tas[i].className == "opennig-tas") {
        tas[i].classList.replace("opennig-tas", "active-2");
      } else {
        tas[i].classList.replace("active", "active-2");
      }

      rightarea.appendChild(tas[i]);
    }
  }
});
