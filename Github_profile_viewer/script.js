const GITHUB_API = 'https://api.github.com/users/';
const search = document.getElementById('search');
const profile = document.getElementById('profile');
const searchButton = document.getElementById('searchBtn');


const getUser = async (username) => {
    try {
        const response = await fetch(`${GITHUB_API}${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};

const getRepos = async (username) => {
    try {
        const response = await fetch(`${GITHUB_API}${username}/repos`);
        if (!response.ok) {
            throw new Error('Repos not found');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching repos:', error);
        return [];
    }
};


searchButton.addEventListener('click', async () => {
    const username = search.value.trim();
    if (!username) return;

    const userData = await getUser(username);
    if (userData) {
        const repos = await getRepos(username);
        updateUI(userData, repos);
    }
});


const updateUI = (userData, repos) => {
    profile.innerHTML = `
        <div class="profile-info">
            <img src="${userData.avatar_url}" alt="Profile Picture">
            <h3>${userData.name || userData.login}</h3>
            <p>${userData.bio || 'No bio available'}</p>
            <div class="stats">
                <span>Followers: ${userData.followers}</span>
                <span>Following: ${userData.following}</span>
                <span>Repos: ${userData.public_repos}</span>
            </div>
            <a href="${userData.html_url}" target="_blank">View Profile</a>
        </div>
        <div class="repos">
            <h4>Latest Repositories</h4>
            ${repos.slice(0, 5).map(repo => `
                <div class="repo">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <p>${repo.description || 'No description available'}</p>
                    <span>⭐ ${repo.stargazers_count}</span>
                </div>
            `).join('')}
        </div>
    `;
};


search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});
