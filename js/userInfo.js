export function userInfo(props) {
    return `
        <div class="tg-container tg-padding-large">
            <div class="tg-avatar tg-avatar-large">
                <!-- User avatar content will go here -->
            </div>
            <div class="tg-user-info">
                <div class="tg-user-name">${props.userInfo.username}</div>
                <div class="tg-user-bio">${props.userInfo.bio}</div>
            </div>
        </div>
    `;
}