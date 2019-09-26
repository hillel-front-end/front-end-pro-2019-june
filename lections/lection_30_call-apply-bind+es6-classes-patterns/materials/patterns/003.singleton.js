function Candidates(name, age, skills) {
    const instance = this;


    this.name = name;
    this.age = age;
    this.skills = skills;


    Candidates = function (anotherValue) {
        instance.anotherValue = anotherValue;
        return instance;
    }

    return instance;
}

let candidateFirst = new Candidates('Valera', 12, ['css', 'html', 'js']);
let candidateSecond = new Candidates();

console.log(candidateFirst, candidateSecond);

console.log(candidateFirst === candidateSecond);
