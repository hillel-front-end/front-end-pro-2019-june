let candidates = (function candidatesModule() {
  const candidatesList = [
    {name: 'Sergey', skills: ['css','html', 'js']},
    {name: 'Artem', skills: ['php', 'java core']},
  ];
  
  function getCandidatesList () {
    return candidatesList;
  }

  function setCandidateList(candidate) {
    if(candidate.skills && candidate.skills.length > 1) {
      candidatesList.push(candidate)
    }

  }

  return {
    getCandidatesList,
    setCandidateList
  }
})();
