const canFly = {
    fly(){
        console.log('Puedo volar');
    }
}

const canSwim = {
    swim(){
        console.log('puedo nadar');
        
    }
}

class Animal {
    constructor(name) {
        this._name = name 
    }

    speak(){
        console.log(`Soy ${this._name}`);
    }
}


class Bird extends Animal {
    constructor(name) {
        super(name)
        Object.assign(this, canFly, canSwim);
    }
}

const bird = new Bird('Pajaro')
bird.speak()
bird.fly()
bird.swim()

