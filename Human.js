class Human {
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    checkApple(apple){
        return !apple.isEmpty();
    }

    eat(apple){
        if(this.checkApple(apple)){
            apple.decrease(1);
        }else {
            alert("An het roi con dau");
        }
    }

    say(str){
        alert(this.name + " say: " + str);
    }

    getWeight(){
        return this.weight;
    }
}
