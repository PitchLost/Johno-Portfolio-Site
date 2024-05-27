// Variables:
const accountApi = '/getAccount';
const nameDOM = document.getElementById('name-display');

// Account object
let accountInfo = {
    username: 'guest',
    password: ''
};

// Functions:

async function getAccount() {
    console.log('Current account info =', accountInfo);
    const accountInfoString = JSON.stringify(accountInfo);
    if (connectedToServer) {
        console.log(accountInfoString);
        try {
            const response = await fetch(serverAddress + accountApi, {
                method: 'POST',
                body: accountInfoString,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const responseBody = await response.json();
                accountInfo = responseBody[0]
                console.log('Response from account API =', responseBody);
                // Update the DOM or handle the response data as needed
                console.log('Test:', accountInfo.username)
                nameDOM.textContent = accountInfo.username;
            } else {
                console.error('Failed to get account info trying again now!');
                setTimeout(() => {
                    getAccount();
                }, 100);
            }
        } catch (error) {
            console.error('Error fetching account info:', error);
            setTimeout(() => {
                getAccount();
            }, 100);
        }
    } else {
        console.log('Not yet connected retrying now!');
        setTimeout(() => {
            getAccount();
        }, 100);
    }
}

async function createAccount() {
    // Implementation for createAccount function
}
