class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get checkName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    /**
     * @param {any} firstName
     */
    set humanName(firstName){
        this.name = firstName
    }

    setAge(myAge){
        this.age = myAge
    }
}

const firstHuman = new Human("James", 45)
console.log(firstHuman.getAge)
console.log(firstHuman.checkName)
console.log(firstHuman.age)

console.log(firstHuman.humanName("Tola"))


