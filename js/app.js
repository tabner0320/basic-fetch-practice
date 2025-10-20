const API_URL = 'https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json';
const container = document.getElementById('card-container');
const loading = document.getElementById('loading');

// Utility: Show/Hide Loading Message
function showLoading() {
  loading.style.display = 'block';
}

function hideLoading() {
  loading.style.display = 'none';
}

async function fetchUsers() {
  try {
    showLoading();
    const res = await fetch(API_URL);
    const data = await res.json();
    hideLoading();
    return data;
  } catch (error) {
    hideLoading();
    alert('Failed to fetch users. Please try again.');
  }
}

function createCard(user) {
  const card = document.createElement('div');
  card.classList.add('user-card');
  card.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Company:</strong> ${user.company.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Years Employed:</strong> ${user.company.years_employed}</p>
  `;
  container.appendChild(card);
}

function clearCards() {
  container.innerHTML = '';
}

document.getElementById('showAllBtn').addEventListener('click', async () => {
  clearCards();
  const users = await fetchUsers();
  users?.forEach(createCard);
});

document.getElementById('filteredBtn').addEventListener('click', async () => {
  clearCards();
  const users = await fetchUsers();
  users
    ?.filter(user => user.company.years_employed < 10)
    .forEach(createCard);
});

document.getElementById('clearBtn').addEventListener('click', clearCards);

