

// Variables:
const accountApi = '/getAccount';
const nameDOM = document.getElementById('name-display');

// Account object
let accountInfo = {
    username: 'guest',
    password: ''
};
const maxAttempts = 5; 
let failedAttempts = 0;
// Functions:

async function getAccount() {
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
            } 
        } catch (error) {
            console.error('Error fetching account info:', error);
            accountInfo = { 
                username: 'Local Host', 
                password: ''
            }        }
    } else {
        if (failedAttempts < maxAttempts) { 
            failedAttempts++
            getAccount()
        } else { 
            console.log('Failed to many times. Applying offline mode')
            accountInfo = { 
                username: 'Offline', 
                password: ''
            }
            nameDOM.textContent = accountInfo.username
            console.log(accountInfo)
        }
    }
    }



async function createAccount() {
    // Implementation for createAccount function
}



