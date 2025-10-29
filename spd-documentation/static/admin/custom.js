window.addEventListener("load", () => {
    const siteUrl = "https://sharepointdesigns.github.io/documentation";

    // Wait for user login (GitHub avatar visible)
    const checkLogin = setInterval(() => {
        const userAvatar = document.querySelector('img[src*="https://avatars.githubusercontent.com"]');
        if (userAvatar) {
            clearInterval(checkLogin);

            // Extract GitHub user ID from avatar URL
            const match = userAvatar.src.match(/avatars\.githubusercontent\.com\/u\/(\d+)/);
            if (match && match[1]) {
                const userId = match[1];

                // Fetch GitHub user data
                fetch(`https://api.github.com/user/${userId}`)
                    .then(res => res.json())
                    .then(data => {
                        const username = data.login || "Unknown";


                        // Once logged in and username is fetched, modify or add link
                        const interval = setInterval(() => {
                            const links = document.querySelectorAll(`a[href='${siteUrl}']`);
                            if (links.length > 0) {
                                clearInterval(interval);
                                links.forEach(link => {
                                    link.textContent = `🌐 View Site | ${username}`;
                                    link.target = "_blank";
                                    link.rel = "noopener noreferrer";
                                });
                            }
                        }, 500);
                    })
                    .catch(err => console.error("Failed to fetch GitHub user:", err));
            }
        }
    }, 500);
});
