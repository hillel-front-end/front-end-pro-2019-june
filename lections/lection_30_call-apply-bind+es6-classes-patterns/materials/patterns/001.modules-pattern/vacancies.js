let vacancies = (function vacanciesModule(ACTUAL_CANDIDATES) {
    let vacanciesList = [
        {name: 'Front-end', needSkills: ['js'], candidates:[]}, 
        {name: 'Java', needSkills: ['java core'], candidates:[]}
    ];


    function createVacainsies (name, needSkills) {
        if(!name || !needSkills.length) {
            return alert('Сталася помилка');
        }

        vacanciesList.push({name, needSkills});
    }


    function getVacansiesList () {
        return vacanciesList;
    }

    function cadidateAssigne (candidate) {
        console.log('assigne candidates in vacansies')
    }

    return {
        createVacainsies,
        getVacansiesList
    }
    
})(candidates);