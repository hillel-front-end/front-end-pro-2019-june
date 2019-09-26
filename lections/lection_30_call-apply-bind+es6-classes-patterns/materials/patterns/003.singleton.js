function Candidates(name, age, skills) {
    const instance = this;


    this.name = name;
    this.age = age;
    this.skills = skills;


    Candidates = function () {
        return instance;
    }

    return instance;
}

let candidateFirst = new Candidates('Valera', 12, ['css', 'html', 'js']);
let candidateSecond = new Candidates();

