class Apple {
    constructor(weight) {
        this.weight = weight;
    }

    decrease(value){
        this.weight-=value;
    }

    isEmpty(){
        if(this.weight <= 0) return true;
        else return false;
    }

    getWeight(){
        return this.weight;
    }
}
