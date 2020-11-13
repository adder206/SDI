class EmailClient {
    constructor() {
        this.inbox = [
		  {
			messageId: 5235,
			from: 'Camron',
			contents: 'Juelz, I need those beats',
			attachmentURIs: [ 'https://i.imgur.com/RvOoJ3q.jpg' ],
			sizeInKilobytes: 1965,
			priority: 'high'
		  },
		  {
			messageId: 7518,
			from: 'Norah Jones',
			contents: 'Hey, hope you\'re well. Not sure why I didn\'t call but wanted to make sure you listened to my latest album "Pick Me Up off the Floor"',
			attachmentURIs: [ 'https://open.spotify.com/track/1WDjQbknrgSYStsdavC3Rk' ],
			sizeInKilobytes: 2178
		  },
		  {
			messageId: 7518,
			from: 'Hip Hop Harry',
			contents: 'Who\'s Next!?',
			attachmentURIs: [ 'https://youtu.be/mpqhpSHEpuQ' ],
			sizeInKilobytes: 1547
		  },
		  {
			messageId: 7512,
			from: 'Lord Zeus',
			contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			attachmentURIs: [ 'https://youtu.be/mpqhpSHEpuQ' ],
            sizeInKilobytes: 1547,
            priority: 'high'
		  }
		];
	  
        this.contacts = [
		  {
			name: 'Camron',
			emailAddress: 'pink@dipset.com'
		  },
		  {
			name: 'Norah Jones',
			emailAddress: 'laidback@af.com'
		  }
		];
    }
    
	// return all messages from a given sender

	viewMessagesFromSender = (sender) => {
		return this.inbox.filter(function(message) {
			return message.from == sender
		} 
	)};

	// return all messages less than 100 characters

	viewSmallMessages = () => {
		return this.inbox.filter(function(message) {
			return message.contents.length < 100
		}
	)};

	// return all messages from unknown senders

	filterSpam = () => {
		return this.inbox.filter(function(message) {
			return myClient.contacts.forEach(function(contact) {
				let isInContactList = message.from === contact.name
				if (isInContactList) {
					return console.log(message);
				}
			}) 
		})
    };
    
	// write a function that makes all emails high priority

    highPriority = () => {
        this.inbox.forEach(function(message){
            message['priority'] = 'high';
        });
    }

    // write a function that allows you to add a contact
    
    addContact = (name, email) => {
        this.contacts.push({name:name, emailAddress:email});
    }

	// return `sizeInKilobytes` of all messages, in total (1 value) 
    // (should accept an array of messages and return their total `sizeInKilobytes`)
    
    sizeInKilobytes = () => {
        return this.inbox.reduce((sum, current) => sum + current.sizeInKilobytes, 0);
    }

    // BONUS: write a function that returns emails sorted by their priority, descending
    
    messagePriority() 
    {
        this.inbox.forEach((message, index) =>
        {
            if (message.priority == "high") 
            {
                this.inbox.splice(index, 1);
                this.inbox.splice(0, 0, message);
            }
        });
    }
   
}

var myClient = new EmailClient();

// ALL CONSOLELOGS TO TEST FUNCTIONS. NOTE: HAVEN'T FIXED A BUG THAT REMOVES UNNECESSARY UNDEFINED STATEMENTS IN THE CONSOLELOGS

//console.log(myClient.viewMessagesFromSender('Camron'));

//console.log(myClient.viewSmallMessages()); 

//console.log(myClient.filterSpam());

//console.log(myClient.highPriority());
//console.log(myClient.inbox);

//console.log(myClient.addContact('Logan McDuffie', 'loganmcduffie@utah.com'));
//console.log(myClient.contacts);

//console.log(myClient.sizeInKilobytes());

//console.log(myClient.messagePriority());
//console.log(myClient.inbox);