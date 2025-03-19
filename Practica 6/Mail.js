const EmailNotifier = (superclass)=> class extends superclass{
    sendEmail(message){
        console.log(`Enviado email: ${message}`);
    }
}

const SMSNotifer = (superclass) => class extends superclass {
    send(message){
        console.log(`Enviando SMS: ${message}`);
        
    }
}

class Notifer{
    notify(message){
        console.log(`Notificacion general: ${message}`);
    }
}

class MultiMotifer extends EmailNotifier(SMSNotifer(Notifer)){}

const notifer = new MultiMotifer();
                                
notifer.notify('hola a todos')
notifer.sendEmail('correo importante')
notifer.send('Mensaje urgente')