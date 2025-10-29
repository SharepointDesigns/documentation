window.addEventListener("DOMContentLoaded", async () => {
    // Helper function to wait until CMS finishes loading the token
    async function waitForToken() {
        for (let i = 0; i < 20; i++) { // ~10 seconds max
            const token = window.CMS?.store?.getState()?.auth?.token;
            if (token) return token;
            await new Promise(r => setTimeout(r, 500));
        }
        return null;
    }

    const token = await waitForToken();
    if (!token) {
        console.warn("No GitHub token found — user might not be logged in yet.");
        return;
    }

    try {
        // Fetch user info directly from GitHub
        const response = await fetch("https://api.github.com/user", {
            headers: { Authorization: `token ${token}` },
        });

        if (!response.ok) {
            console.error("GitHub API error:", response.status);
            return;
        }

        const user = await response.json();
        console.log("Logged in GitHub user:", user);

        // Show a badge with the logged-in user’s name or login
        const name = user.name || user.login || "GitHub user";
        const badge = document.createElement("div");
        badge.textContent = `👤 Logged in as: ${name}`;
        badge.style.cssText = `
            position: fixed;
            top: 8px;
            right: 16px;
            background: #f6f8fa;
            color: #333;
            font-size: 13px;
            padding: 6px 10px;
            border-radius: 4px;
            z-index: 9999;
            box-shadow: 0 1px 3px rgba(0,0,0,0.15);
            `;
        document.body.appendChild(badge);
    } catch (err) {
        console.error("Error fetching GitHub user:", err);
    }
});
