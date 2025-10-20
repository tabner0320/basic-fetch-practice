async function fetchUserData() {
  const response = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
  if (!response.ok) throw new Error("Failed to fetch data");
  return await response.json();
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("user-card");

  card.innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Company:</strong> ${user.company}</p>
    <p><strong>Years Employed:</strong> ${user.years_employed}</p>
  `;

  return card;
}

