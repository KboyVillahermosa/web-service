const exercises = [
    { name: 'Squats', image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/06/Female_Squat_Studio_1296x728-header-1-1296x728.jpg?w=1155&h=1528'},
    { name: 'Push-ups', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3sDVYN90cX8im2hpVfyJu0UTDPZGlVH8qg&usqp=CAU'},
    { name: 'Jumping Jacks', image: 'https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2020/04/GRT-two-people-jumping-jacks-1296x728-header.jpg?w=1155&h=1528' },
    { name: 'Lunges', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxFp1DqiLTRnho6QYPTWJUVOSo6jCuI1JVA&usqp=CAU' },
    { name: 'Plank', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR0CNF6RB2dc4OhRjc1eRhvtV7j_61uayAQ&usqp=CAU' },
    { name: 'Crunches', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPNrc7TtPFABTDBkF-Y5Db2VR9LgLElYOqw&usqp=CAU' },
    { name: 'Burpees', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJHlOYSnV66NKLMqj9u5jmm-zmTclKS9CDg&usqp=CAU' },
    { name: 'Bicycle Crunches', image: 'https://st2.depositphotos.com/22663846/46947/v/450/depositphotos_469472034-stock-illustration-girl-doing-bicycle-criss-cross.jpg' },
    { name: 'Tricep Dips', image: 'https://media1.popsugar-assets.com/files/thumbor/usTzhBdV7Ksdphcb9q_lQKgPun0/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2014/04/25/773/n/1922729/71dfb70a7ef96be8_c58b14640c2032c6_triceps-dips.jpg.xxxlarge/i/Triceps-Dips.jpg' },
    { name: 'Mountain Climbers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTRH3kKWqB7kAZ_wR7QgpO-VGUPC_FDWyGg&usqp=CAU' },
    { name: 'High Knees', image: 'https://media.istockphoto.com/id/1309477262/vector/high-knees-exercise-woman-colorful-cartoon-vector-illustration-concept.jpg?s=612x612&w=0&k=20&c=m9OP8-JRuNRi9Y0wST6iWU7A8WNSp001yLG2uNP2Kwk=' },
    { name: 'Jumping Squats', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdoL8LyWaigBjTZn5SNOf1E-ibBG4eVm-vSw&usqp=CAU' }
  ];
  
  const exerciseContainer = document.getElementById('exercise');
  const exerciseImage = document.getElementById('exercise-image');
  const generateButton = document.getElementById('generate-button');
  
  generateButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * exercises.length);
    const exercise = exercises[randomIndex];
    exerciseContainer.innerText = exercise.name;
    exerciseImage.src = exercise.image;
  });

