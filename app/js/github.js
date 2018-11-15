class GitHub {
	constructor() {
		this.client_id = "c7626881753c2315e722";
		this.client_secret = "7e2c341bbf09f004d94a1106984a5b130521f707";
		this.repos_count = 5;
		this.repos_sort = "created: asc"
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
		const profile = await profileResponse.json();
		const repos = await repoResponse.json();
		return { profile, repos }
	}
}