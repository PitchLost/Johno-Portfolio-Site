const ticketButton = document.getElementById('submit')
let ticket = { 
    title: 'No title', 
    name: '',
    contact: '', 
    desc: '', 
    other: ''
}
const ticket_name = accountInfo.username
let ticketDOM = { 
    title: document.getElementById('ticket-label').value, 
    contact: document.getElementById('ticket-discord').value, 
    desc: document.getElementById('ticket-desc').value, 
    other: document.getElementById('other').value
}



function createTicket() { 
    // Set the ticket properties
    const confirmTicket = confirm('Are you sure you want to submit a ticket?')
    if (confirmTicket) { 
        console.log('Sending request stand by...')
    
    ticketDOM = { 
        title: document.getElementById('ticket-label').value, 
        contact: document.getElementById('ticket-discord').value, 
        desc: document.getElementById('ticket-desc').value, 
        other: document.getElementById('other').value
    }

    ticket = { 
        title: ticketDOM.title, 
        name: ticket_name, 
        desc: ticketDOM.desc, 
        other: ticketDOM.other
    }
    // Log the ticket to the console
    console.log(ticket)
    // Convert the ticket into JSON
    ticket = JSON.stringify(ticket)

}


    // Make the server request with the ticket
}

ticketButton.addEventListener('click', e => { 
    createTicket()
})