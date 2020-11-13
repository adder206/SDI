class EmailClient 
{
    constructor() 
    {
        this.contacts = [
            {
              name: 'Cam\'ron',
              emailAddress: 'pink@dipset.com'
            },
            {
              name: 'Norah Jones',
              emailAddress: 'laidback@af.com'
            }];
        this.messages = [
              {
                messageId: 5235,
                from: 'Cam\'ron',
                contents: 'Juelz, I need those beats',
                attachmentURIs: [
                  'https://i.imgur.com/RvOoJ3q.jpg'
                ],
                sizeInKilobytes: 1965,
                priority: 'high'
              },
              {
                messageId: 7518,
                from: 'Norah Jones',
                contents: 'Hey, hope you\'re well. Not sure why I didn\'t call but wanted to make sure you listened to my latest album "Pick Me Up off the Floor"',
                attachmentURIs: [
                  'https://open.spotify.com/track/1WDjQbknrgSYStsdavC3Rk'
                ],
                sizeInKilobytes: 2178
              },
              {
                messageId: 7518,
                from: 'Norah Jones',
                contents: 'awjkdnajkbsfukbwakfbjsdf',
                attachmentURIs: [
                  'https://open.spotify.com/track/1WDjQbknrgSYStsdavC3Rk'
                ],
                sizeInKilobytes: 2178
              },
              {
                messageId: 7519,
                from: 'Hip Hop Harry',
                contents: 'Who\'s Next!?',
                attachmentURIs: [
                  'https://youtu.be/mpqhpSHEpuQ'
                ],
                sizeInKilobytes: 1547
              },
              {
                messageId: 7529,
                from: 'Hip Hop Harry',
                contents: 'Who\'s Next!asdawdasdwadsawsdw?',
                attachmentURIs: [
                  'https://youtu.be/mpqhpSHEpuQ'
                ],
                sizeInKilobytes: 1547,
                priority: 'high'
              }];
    }

    ReturnMsgFromSender(sender)
    {
        return this.messages.filter(function(element)
        {
            return element.from === sender;
        });
    }

    GetShortMessages()
    {
        return this.messages.filter(function(element)
        {
            return element.contents.length < 100;
        })
    }

    GetUnknownSenderMessages()
    {
        return this.messages.filter(message =>
        {
            return this.contacts.filter(function(contact)
            {
                return message.from === contact.name;
            }).length > 0;
        });
    }

    SetAllMessagesHighPriority()
    {
        this.messages.forEach(function(message)
        {
            message['priority'] = 'high';
        });
    }

    AddContact(name, email)
    {
        this.contacts.push({name:name, emailAddress:email});
    }

    GetSizeInKilobytes(messages)
    {
        return messages.reduce(function(element, message)
        {
            return message.sizeInKilobytes + element;
        }, 0);
    }

    SortMessagesByPriority() 
    {
        this.messages.forEach((message, index) =>
        {
            if (message.priority == "high") 
            {
                this.messages.splice(index, 1);
                this.messages.splice(0, 0, message);
            }
        });
    }
}

var client = new EmailClient();


// *** return all message from a given sender
// *** return all messages less than 100 chars
// *** return all messages from unk senders
// *** write a function that makes all emails high priority
// *** write a function you to add a contact
// *** return sizeInKilobytes of all messages (should accept an array of messages and return their sizeInKilobytes)

//console.log(client.ReturnMsgFromSender('Norah Jones'));
//console.log(client.GetShortMessages());
//console.log(client.GetUnknownSenderMessages());

//client.SetAllMessagesHighPriority()
//console.log(client.messages);

//client.AddContact("joe", "joe@something.com");
//console.log(client.contacts);

//console.log(client.GetSizeInKilobytes(client.messages));

//client.SortMessagesByPriority();
//console.log(client.messages);