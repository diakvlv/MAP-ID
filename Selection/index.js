const levels = document.querySelectorAll('.level');
const courseTitle = document.getElementById('course-title');
const courseDetails = document.getElementById('course-details');
const levelDescriptions = { A1: {
    title: 'Beginner Course',
    description: 'This is a beginner-level course suitable for those with little or no prior knowledge of the language.',
    units: '21 video and text units',
    exercises: 'over 120 oral and text exercises',
    vocabulary: '20 texts and themes improving vocabulary', },
  A2: {
    title: 'Elementary Course',
    description: 'This is an elementary-level course designed for learners who have basic language skills.',
    units: '24 video and text units',
    exercises: 'Over 140 oral and text exercises',
    vocabulary: '7 texts and themes improving vocabulary',  },
  B1: {
    title: 'Intermediate Course',
    description: 'This is an intermediate-level course for learners who have a good understanding of the language.',
    units: 'N/A video and text units',
    exercises: 'Over N/A oral and text exercises',
    vocabulary: 'N/A texts and themes improving vocabulary', },
  B2: {
    title: 'Advanced Course',
    description: 'This is an advanced-level course for learners who want to refine their language skills.',
    units: 'N/A video and text units',
    exercises: 'Over N/A oral and text exercises',
    vocabulary: 'N/A texts and themes improving vocabulary',},
};


const defaultLevel = 'A1';
document.querySelector(`.level[data-level="${defaultLevel}"]`).classList.add('selected');


const defaultDescription = levelDescriptions[defaultLevel];
courseTitle.innerHTML = `<h2>${defaultDescription.title}</h2><p>${defaultDescription.description}</p>`;
courseDetails.innerHTML = `<h2>Course Details</h2><ul><li>Units: ${defaultDescription.units}</li><li>Exercises: ${defaultDescription.exercises}</li><li>Vocabulary: ${defaultDescription.vocabulary}</li></ul>`;

levels.forEach(level => {
  level.addEventListener('click', () => {
     levels.forEach(l => l.classList.remove('selected'));
    level.classList.add('selected');

    const selectedLevel = level.getAttribute('data-level');
    const selectedDescription = levelDescriptions[selectedLevel];

    courseTitle.innerHTML = `<h2>${selectedDescription.title}</h2><p>${selectedDescription.description}</p>`;
    courseDetails.innerHTML = `<h2>Course Details</h2><ul><li>Units: ${selectedDescription.units}</li><li>Exercises: ${selectedDescription.exercises}</li><li>Vocabulary: ${selectedDescription.vocabulary}</li></ul>`;
  });
});