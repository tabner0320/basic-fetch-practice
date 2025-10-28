const userContainer = document.getElementById("userContainer");
const getUsersBtn = document.getElementById("getUsers");
const getFilteredUsersBtn = document.getElementById("getFilteredUsers");
const clearUsersBtn = document.getElementById("clearUsers");

const DATA_URL = "https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json";

// Fetch and render users
async function fetchUsers(filterTenYears = false) {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error("Network response was not ok");
    const users = await response.json();

    // Optional filtering
    const filteredUsers = filterTenYears
      ? users.filter(user => user.years_employed < 10)
      : users;

    displayUsers(filteredUsers);
  } catch (error) {
    console.error("Fetch error:", error);
    console.error("Fetch error:", error);
  }
}


// Dynamically create user cards
function displayUsers(users) {
  clearUsers();
  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
      <img src="${user.image}" alt="${user.name}">
      <h2>${user.name}</h2>
      <p><strong>Company:</strong> ${user.company}</p>
      <p><strong>Job Title:</strong> ${user.job_title}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Years Employed:</strong> ${user.years_employed}</p>
    `;
    userContainer.appendChild(card);
  });
}

// Remove all cards
function clearUsers() {
  userContainer.innerHTML = "";
}

// Event Listeners
getUsersBtn.addEventListener("click", () => fetchUsers(false));
getFilteredUsersBtn.addEventListener("click", () => fetchUsers(true));
clearUsersBtn.addEventListener("click", clearUsers);


