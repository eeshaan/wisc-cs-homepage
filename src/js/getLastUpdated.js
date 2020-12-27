async function getDateText() {
  await fetch("./././last_updated.txt")
    .then((res) => res.text())
    .then((data) => (obj = data));

  const lastUpdated = document.querySelector(".last-updated");
  lastUpdated.innerHTML = new Date(obj).toLocaleString();
}

getDateText();
