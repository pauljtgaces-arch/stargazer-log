const list = document.querySelector("#starred");
const status = document.querySelector("#status");

fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to load starred repositories (${response.status})`);
    }
    return response.json();
  })
  .then((events) => {
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
    status.textContent = `Loaded ${events.length} starred repositories.`;
  })
  .catch((error) => {
    status.textContent = "Unable to load starred repositories. Please try again later.";
    console.error(error);
  });