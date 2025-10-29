window.addEventListener('DOMContentLoaded', () => {
    const getUser = () => window.CMS?.store?.getState()?.auth?.user;

    // Display logged-in user badge
    const showUserName = () => {
        const user = getUser();
        console.log(user);

        if (user && user.name) {
            const userEl = document.createElement('div');
            userEl.textContent = `👤 Logged in as: ${user.name}`;
            userEl.style.cssText = `
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
            document.body.appendChild(userEl);
        }
    };

    // Wait until user is loaded
    const checkReady = setInterval(() => {
        const user = getUser();
        console.log(user);

        if (user) {
            clearInterval(checkReady);
            showUserName();
        }
    }, 500);

    // Auto-add author to frontmatter before saving
    CMS.registerEventListener({
        name: 'preSave',
        handler: ({ entry }) => {
            const user = getUser();
            if (user && user.name) {
                const updated = entry.get('data').set('author', user.name);
                return entry.set('data', updated);
            }
            return entry;
        },
    });
});
