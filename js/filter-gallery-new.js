const buttonsRef = document.querySelectorAll("#myBtnContainer .filter-btn");
const galeryItemsRef = document.querySelectorAll(
  ".portfolio-list .portfolio-item "
);
// console.log(buttonsRef);
// console.log(galeryItemsRef);

showAllGallaryItems();

buttonsRef.forEach((btn) => {
  btn.addEventListener("click", onBtnClick);
});

function onBtnClick(event) {
  const product = event.currentTarget.dataset.product;
  product === "all" ? showAllGallaryItems() : showSelectedItems(product);
  // console.log(product);
  toggleBtnClass(product);
}

function toggleBtnClass(product) {
  buttonsRef.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.product === product);
  });
}

function showAllGallaryItems() {
  galeryItemsRef.forEach((galeryItem) => {
    galeryItem.classList.add("show");
  });
}

function showSelectedItems(product) {
  galeryItemsRef.forEach((galeryItem) => {
    if (galeryItem.classList.contains(product)) {
      galeryItem.classList.add("show");
    } else galeryItem.classList.remove("show");
  });
}
