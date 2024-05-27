// Variables: 
let connectedToServer = false; 
const serverAddress = 'http://localhost:3300'
const connectApi = '/connect'


async function initConnection() { 
    try {
    const response = await fetch(serverAddress + connectApi, { 
        method: 'GET', 
        headers: { 
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) { 
        connectedToServer = true;
        console.log("Connection to server is established!", connectedToServer)
    } else { 
        console.error('Connection to server failed :(')
    }
} catch { 
    console.error('Connection Failed')
}
}