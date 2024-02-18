//  https://www.w3schools.com/howto/howto_css_modal_images.asp
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}



function checkAnswers6() {
    var correctAnswers = [
      "devět",
      "třicet pět",
      "sto devadesát tři",
      "dva tisíce tři sta padesát šest"
    ];

    var userAnswers = [];
    for (var i = 1; i <= 4; i++) {
      var answer = document.getElementById("q" + i).value.trim();
      if (answer === "") {
        alert("Please fill in all fields before submitting.");
        return;
      }
      userAnswers.push(answer);
    }

    for (var i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        document.getElementById("q" + (i + 1)).className = "correct";
      } else {
        document.getElementById("q" + (i + 1)).className = "incorrect";
      }
    }
  }

function checkAnswers4() {
    var correctAnswers = [
      "patnáct", "dvacet dva", "třicet osm", "devět",
      "sto dvacet tři", "pět set devadesát", "dva tisíce devadesát osm", "šestnáct tisíc tři sta sedmdesát pět",
      "530", "28", "19", "115", "8111", "1300"
    ];

    var userAnswers = [];
    for (var i = 1; i <= 14; i++) {
      var answer = document.getElementById("q" + i).value.trim();
      if (answer === "") {
        alert("Please fill in all fields before submitting.");
        return;
      }
      userAnswers.push(answer);
    }

    for (var i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        document.getElementById("q" + (i + 1)).className = "correct";
      } else {
        document.getElementById("q" + (i + 1)).className = "incorrect";
      }
    }
  }


function checkAnswers2() {
  var form = document.getElementById('testForm30');
  var selects = form.getElementsByTagName('select');
  var resultsDiv = document.getElementById('results10');
  var correctAnswers = ['a', 'e', 'd', 'b', 'c', 'g', 'f'];
  var incorrectCount = 0;

  resultsDiv.innerHTML = '';

  for (var i = 0; i < selects.length; i++) {
      var userAnswer = selects[i].value;
      var listItem = selects[i].parentNode;
      var index = i + 1;

      if (userAnswer === "--") {
          alert("Please fill in all fields before submitting.");
          return;
      }

      if (userAnswer === correctAnswers[i]) {
          listItem.className = 'correct';
      } else {
          listItem.className = 'incorrect';
          resultsDiv.innerHTML += 'Question ' + index + ': Correct answer is ' + correctAnswers[i] + '<br>';
          incorrectCount++;
      }
  }

  if (incorrectCount === 0) {
      resultsDiv.innerHTML = 'All answers are correct!';
  }
}


function checkAnswers1() {
  var form = document.getElementById('testForm1');
  var selects = form.getElementsByTagName('select');
  var resultsDiv = document.getElementById('results1');
  var correctAnswers = ['c', 'b', 'e', 'g', 'f', 'a', 'd'];
  var incorrectCount = 0;

  resultsDiv.innerHTML = ''; 

  for (var i = 0; i < selects.length; i++) {
      var userAnswer = selects[i].value;
      var listItem = selects[i].parentNode;
      var index = i + 1;

      if (userAnswer === "--") {
          alert("Please fill in all fields before submitting.");
          return;
      }

      if (userAnswer === correctAnswers[i]) {
          listItem.className = 'correct';
      } else {
          listItem.className = 'incorrect';
          resultsDiv.innerHTML += 'Question ' + index + ': Correct answer is ' + correctAnswers[i] + '<br>';
          incorrectCount++;
      }
  }

  if (incorrectCount === 0) {
      resultsDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm2() {
  const answers = {
      "profesor": "M",
      "pero": "N",
      "namesti": "N",
      "ucitel": "M",
      "student": "M",
      "cizinka": "F",
      "studentka": "F",
      "muz": "M",
      "zena": "F",
      "otec": "M"
  };

  const form = document.getElementById('testForm2');
  const formData = new FormData(form);
  let wrongAnswers = [];

  formData.forEach((value, key) => {
      if (value.trim() === '') {
          isFormValid = false;
      }
  });

  if (!isFormValid) {
      alert('Please fill in all fields before submitting.');
      return;
  }


  formData.forEach((value, key) => {
      const answer = answers[key];
      const inputField = document.getElementById(key);
      if (value.toUpperCase() === answer) {
          inputField.classList.add('correct');
      } else {
          inputField.classList.add('incorrect');
          wrongAnswers.push(key);
      }
  });

  const resultsDiv = document.getElementById('results2');
  if (wrongAnswers.length > 0) {
      resultsDiv.innerHTML = `Incorrect answers: ${wrongAnswers.join(', ')}`;
  } else {
      resultsDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm3() {
  var form = document.getElementById('testForm3');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['mladá', 'vysoký', 'velké', 'černé', 'starý', 'nová', 'krásná'];

  for (var i = 0; i < inputs.length - 1; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result3');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm8() {
  var resultDiv = document.getElementById('result8');
  resultDiv.innerHTML = 'Ne, ta kočka není bílá, je černá.\nNe, ta váza není zelená, je oranžová. \nNe, ta podlaha není černá, je hnědá. \nNe, to okno není špinavé, je čisté. \nNe, ta skříň není zavřená, je otevřená. \nNe, to zrcadlo není vpravo, je vlevo. \nNe, ta lampa není žlutá, je bílá/oranžová.';
}

function submitForm9() {
  var resultDiv = document.getElementById('result9');
  resultDiv.innerHTML = 'Babička je stará. Dědeček je mladý. Matka je hezká. Kamarádka je ošklivá. Student je velký. Stůl je nový. Květina je jarní. Sestra je krásná. Kočka je špinavá. Židle je černá.'
}

function submitForm10() {
  var resultDiv = document.getElementById('result10');
  resultDiv.innerHTML = 'Bratr, otec, dědeček, babička, syn, teta. RODINA.'
}

function submitForm20() {
  var resultDiv = document.getElementById('result20');
  resultDiv.innerHTML = '1) Mladý kluk, který má hnědé vlasy, pije mléko. 2) Děti nesou těžké tašky. 3) Hladový kluk jí špagety a pije vodu..';
}

function submitForm4() {
  var form = document.getElementById('testForm4');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['můj', 'jeho', 'jejich', 'její', 'naše', 'tvoje', 'moje', 'váš', 'náš'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result4');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitForm5() {
  var form = document.getElementById('testForm5');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['moje', 'její', 'náš', 'vaše', 'jeho', 'jejich', 'tvůj', 'jejich'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result5');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm6() {
  var form = document.getElementById('testForm6');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['máme', 'máte', 'mají', 'máš', 'máš', 'mám', 'máte', 'máme', 'máš'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result6');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm7() {
  var form = document.getElementById('testForm7');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['nemá', 'nemáme', 'nemáte', 'nemáš', 'nemají', 'nemá', 'nemá', 'nemám'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result7');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitForm11() {
  var form = document.getElementById('testForm11');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['Moje', 'velká', 'malá', 'pes', 'maminka', 'tatínek', 'můj', 'bratr', 'mám', 'kde', 'náš strýc', 'sestřenice', 'máma', 'má', 'nemám', 'mám', 'babičky', 'práce', 'nemá', 'čas'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result11');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitForm12() {
  const answers = {
     'q1': 'b',
     'q2': 'a',
     'q3': 'c',
     'q4': 'c',
     'q5': 'b',
     'q6': 'c',
     'q7': 'd'
 };

 const resultsDiv = document.getElementById('result12');
 resultsDiv.innerHTML = '';

 let score = 0;

 for (let i = 1; i <= 7; i++) {
     const questionName = 'q' + i;
     const selectedAnswer = document.querySelector('input[name="' + questionName + '"]:checked');

     if (!selectedAnswer) {
         resultsDiv.innerHTML += 'You missed question ' + i + '.<br>';
     } else {
         const userAnswer = selectedAnswer.value;

         if (userAnswer === answers[questionName]) {
             score++;
             selectedAnswer.parentNode.classList.add('correct');
         } else {
             selectedAnswer.parentNode.classList.add('incorrect');
         }
     }
 }

 resultsDiv.innerHTML += 'Your score is ' + score + ' out of 7.';

}

function submitTestForm() {
  var form = document.getElementById('TestForm');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['manžel', 'manželka', 'dědeček', 'babička', 'sestřenice', 'bratranec', 'sourozence', 'sestra', 'bratr', 'manžel', 'strýc', 'manželka', 'teta', 'maminka', 'manžel', 'tatínek', 'syn', 'dcera', 'sestra', 'sourozenec', 'bratr'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  

  var resultDiv = document.getElementById('TestResult');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function gradeQuiz() {
  var answers = ["NE", "NE", "ANO", "NE", "NE", "ANO", "NE", "NE", "NE", "NE"];
  var score = 0;
  var results = document.getElementById("results");
  var form = document.getElementById("quizForm");
  var formData = new FormData(form);
  var i = 0;

  for (var pair of formData.entries()) {
    if (pair[1] === answers[i]) {
        score++;
        form.elements["q" + (i + 1)].parentNode.classList.remove("incorrect");
        form.elements["q" + (i + 1)].parentNode.classList.add("correct");
    } else {
        form.elements["q" + (i + 1)].parentNode.classList.remove("correct");
        form.elements["q" + (i + 1)].parentNode.classList.add("incorrect");
    }
    i++;
}

  results.innerHTML = "Your score: " + score + "/10<br>";

  for (var j = 0; j < answers.length; j++) {
      results.innerHTML += "Question " + (j + 1) + ": " + answers[j] + "<br>";
  }
}

function quiz() {
    var answers = ["NE", "NE", "ANO", "NE", "ANO"];
    var score = 0;
    var results = document.getElementById("quiz");
    var form = document.getElementById("quiz1");
    var formData = new FormData(form);
    var i = 0;
  
    for (var pair of formData.entries()) {
        // Convert both the answer and the value to uppercase for comparison
        if (pair[1].toUpperCase() === answers[i].toUpperCase()) {
            score++;
            form.elements["q" + (i + 1)].parentNode.classList.remove("incorrect");
            form.elements["q" + (i + 1)].parentNode.classList.add("correct");
        } else {
            form.elements["q" + (i + 1)].parentNode.classList.remove("correct");
            form.elements["q" + (i + 1)].parentNode.classList.add("incorrect");
        }
        i++;
    }
  
    results.innerHTML = "Your score: " + score + "/5<br>";
  
    for (var j = 0; j < answers.length; j++) {
        results.innerHTML += "Question " + (j + 1) + ": " + answers[j] + "<br>";
    }
}


function checkAnswers() {
  var form = document.getElementById('testForm');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['Vstávám', 'Oblékám', 'Obědvá', 'Dělá', 'Posloucháš', 'Hlídáme', 'Neběhám', 'Odpočívám', 'Děláte', 'Poslouchám', 'Nezpívám', 'Čekáte', 'Znáte', 'Neznám'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('testResult');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitAnswers() {
  var table = document.getElementById('testTable');
  var inputs = table.getElementsByTagName('input');
  var correctAnswers = [
      'kupuju', 'dělám', 'vidím', 'říkám', 'kontroluju', 'mluvím',
      'kupuješ', 'děláš', 'vidíš', 'říkáš', 'kontroluješ', 'mluvíš',
      'kupuje', 'dělá', 'vidí', 'říká', 'kontroluje', 'mluví',
      'kupujeme', 'děláme', 'vidíme', 'říkáme', 'kontrolujeme', 'mluvíme',
      'kupujete', 'děláte', 'vidíte', 'říkáte', 'kontrolujete', 'mluvíte',
      'kupují', 'dělají', 'vidí', 'říkají', 'kontrolují', 'mluví'
  ];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim().toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
          inputs[i].classList.remove('incorrect');
      } else {
          inputs[i].classList.add('incorrect');
          inputs[i].classList.remove('correct');
      }
  }
}

function submitAnswers13() {
    var correctCount = 0;
    var table = document.getElementById('testTable2');
    var inputs = table.getElementsByTagName('input');
    var correctAnswers = [
        'jsem', 'jsi', 'je', 'jsme', 'jste', 'jsou'   ];


  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
        alert('Please fill in all fields before submitting.');
        return;
    }
}
  
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim().toLowerCase() === correctAnswers[i]) {
            inputs[i].classList.add('correct');
            inputs[i].classList.remove('incorrect');
            correctCount++;
        } else {
            inputs[i].classList.add('incorrect');
            inputs[i].classList.remove('correct');
        }
    }

    var table = document.getElementById('testTable3');
    var inputs = table.getElementsByTagName('input');
    var correctAnswers = [
        'opakuju', 'píšu', 'čtu', 'jím', 'slyším', 'čekám',
        'opakuješ', 'píšeš', 'čteš', 'jíš', 'slyšíš', 'čekáš',
        'opakuje', 'píše', 'čte', 'jí', 'slyší', 'čeká',
        'opakujeme', 'píšeme', 'čteme', 'jíme', 'slyšíme', 'čekáme',
        'opakujete', 'píšete', 'čtete', 'jíte', 'slyšíte', 'čekáte',
        'opakují', 'píšou', 'čtou', 'jedí', 'slyší', 'čekají'

    ];
  

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
        alert('Please fill in all fields before submitting.');
        return;
    }
}
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim().toLowerCase() === correctAnswers[i]) {
            inputs[i].classList.add('correct');
            inputs[i].classList.remove('incorrect');
            correctCount++;
        } else {
            inputs[i].classList.add('incorrect');
            inputs[i].classList.remove('correct');
        }
    }

    var table = document.getElementById('testTable4');
    var inputs = table.getElementsByTagName('input');
    var correctAnswers = [
        'ovesnou kaši', 'obličej', 'polévku', 'velkou šanci', 'novou košili', 'taxík', 'malou objednávku'
    ];


  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
        alert('Please fill in all fields before submitting.');
        return;
    }
}
  
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim().toLowerCase() === correctAnswers[i]) {
            inputs[i].classList.add('correct');
            inputs[i].classList.remove('incorrect');
            correctCount++;
        } else {
            inputs[i].classList.add('incorrect');
            inputs[i].classList.remove('correct');
        }
    }


    var table = document.getElementById('testTable5');
    var inputs = table.getElementsByTagName('input');
    var correctAnswers = [
        'musím', 'smíme', 'nesmíme', 'chtějí', 'mám', 'nemusíte', 'můžeme', 'můžeš', 'chce', 'musím', 'nesmíte', 'má', 'musíš'
    ];

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
        alert('Please fill in all fields before submitting.');
        return;
    }
}
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim().toLowerCase() === correctAnswers[i]) {
            inputs[i].classList.add('correct');
            inputs[i].classList.remove('incorrect');
            correctCount++;
        } else {
            inputs[i].classList.add('incorrect');
            inputs[i].classList.remove('correct');
        }
    }

    var table = document.getElementById('testTable6');
    var inputs = table.getElementsByTagName('input');
    var correctAnswers = [
        'moje', 'moji učitelku', 'jeho', 'jeho doktora', 'vaše', 'vaši kamarádku', 'její', 'její doktorku', 'její', 'jejího muže'
    ];

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
        alert('Please fill in all fields before submitting.');
        return;
    }
}
  
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim().toLowerCase() === correctAnswers[i]) {
            inputs[i].classList.add('correct');
            inputs[i].classList.remove('incorrect');
            correctCount++;
        } else {
            inputs[i].classList.add('incorrect');
            inputs[i].classList.remove('correct');
        }
    }


  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
        alert('Please fill in all fields before submitting.');
        return;
    }
}

    var table = document.getElementById('testTable7');
    var inputs = table.getElementsByTagName('input');
    var correctAnswers = [
        'žádný', 'něco', 'nic', 'někdy', 'někde', 'nic', 'nikdy'
    ];
  

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
        alert('Please fill in all fields before submitting.');
        return;
    }
}
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim().toLowerCase() === correctAnswers[i]) {
            inputs[i].classList.add('correct');
            inputs[i].classList.remove('incorrect');
            correctCount++;
        } else {
            inputs[i].classList.add('incorrect');
            inputs[i].classList.remove('correct');
        }
    }

    var table = document.getElementById('testTable8');
    var inputs = table.getElementsByTagName('input');
    var correctAnswers = [
        'biopotraviny', 'zdravé potraviny', 'zdravá výživa', 'bio-kosmetika', 'večerka', 'non-stop', 'supermarkety', 'hypermarkety'
    ];


  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === '') {
        alert('Please fill in all fields before submitting.');
        return;
    }
}
  
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim().toLowerCase() === correctAnswers[i]) {
            inputs[i].classList.add('correct');
            inputs[i].classList.remove('incorrect');
            correctCount++;
        } else {
            inputs[i].classList.add('incorrect');
            inputs[i].classList.remove('correct');
        }
    }

    var resultDiv = document.getElementById('resultTest13');

    if (correctCount >= 60){
        var text = "Congrats! You have passed the test!" + "<br />" +  "Number of correct answers: " + correctCount;
        resultDiv.innerHTML = text;
    }
    else {
        var text = "Try it again! You have nnot passed the test :(" + "<br />" +  "Revise all the units and PDF files from them before the next try." + "<br />" + "Number of correct answers: " + correctCount;
        resultDiv.innerHTML = text;
    }

  }

function submitForm15() {
  var form = document.getElementById('testForm15');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['darujeme', 'cestují', 'plánuju', 'netancujete', 'stanujeme', 'sportuješ', 'maluje', 'kupuje', 'telefonujeme', 'opakujete', 'posiluješ', 'fotografuju'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result15');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm16() {
  var resultDiv = document.getElementById('result16');
  resultDiv.innerHTML = '1) Dívají se na televizní zprávy každý večer. 2) Televizní zprávy začínají v osm hodin. 3) Tatínka nejvíce zajímá politika. 4) Tatínek komentuje televizní noviny. 5) Rodina se dívá na televizi a pije čaj.';
}

function submitForm17() {
  var form = document.getElementById('testForm17');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['je', 'hezké', 'začínají', 'bydlíme', 'trvá', 'kupujeme', 'sedíme', 'máme', 'máme', 'dobrou náladu', 'známe', 'pomáháme', 'chodíme', 'sbíráme', 'koupeme', 'veselé'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i]) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result17');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitForm19() {
  var form = document.getElementById('grammarTestForm');
  var inputs = form.getElementsByTagName('input');
  var answers = ['nepije', 'žiju', 'neseš', 'spíme', 'nejíte', 'řeknu', 'se bojíš', 'stojí', 'čtou', 'berete'];
  var resultsDiv = document.getElementById('results');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() !== answers[i]) {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push('Question ' + (i + 1) + ': ' + inputs[i].value.trim() + ' (Correct answer: ' + answers[i] + ')');
      } else {
          inputs[i].classList.remove('incorrect');
          inputs[i].classList.add('correct');
      }
  }

  var resultDiv = document.getElementById('results');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitForm23() {
    var resultDiv = document.getElementById('result23');
    resultDiv.innerHTML = '1) Náš starý dědeček si neholí nohy, protože je muž. 2) Potřebuju mýdlo a ručník, protože se sprchuju. 3) Chceme koupit holící strojek, protože je to dobrý dárek. 4) O víkendu neodpočívají home. 5) Uklízím dům každý den.';
  }

  function submitForm24() {
    var resultDiv = document.getElementById('result24');
    var text = "Jan:  Jak vypadá tvůj den, Marie? Vypadáš špatně." + "<br />" + "Marie: Máš pravdu. Každý den mám hodně práce. Odpočívám jenom o víkendu." + "<br />" + "Jan: Říkáš, že pracuješ každý den?" + "<br />" + "Marie: Ano, učím se a pracuju každý den. Proto mám jeden den volno." + "<br />" + "Jan: Aha. Jaký je tvůj typický pracovní den?"  + "<br />" + "Marie: Vstávám v 6:30 ráno. Potom si myju obličej, snídám, oblékám se a líčím se. Potřebuju jít v 7:30, protože nesmím být pozdě." + "<br />" + "Jan: Pracuješ a učíš se?"  + "<br />" + "Marie: Ano, učím se dopoledne a potom pracuju do 6 večer."   + "<br />" + "Jan: Asi je to těžké.";
    resultDiv.innerHTML = text;
  }

function submitForm25() {
    var resultDiv = document.getElementById('result25');
    var text = "1) — c)" + "<br />" + "2) — b)";
    resultDiv.innerHTML = text;
  }

  function submitForm26() {
    var resultDiv = document.getElementById('result26');
    var text = "1) Eva vstává v 10 hodin, ale o víkendu vstává až ve 12 hodin." + "<br />" + "2) Petr vstává v 6 hodin ráno." + "<br />" + "3) Eva" + "<br />" + "4) Petr je ve škole odpoledne a někdy i večer." + "<br />" + "5) Odpoledne je ve škole, kde pracuje."  + "<br />" + "6) Petr" + "<br />" + "7) Eva"  + "<br />" + "8) Petr"   + "<br />" + "9) Eva" + "<br />" + "10) Eva večeří v 9 hodin, ale Petr večeří v 7 hodin večer.";
    resultDiv.innerHTML = text;
  }

  function submitForm27() {
    var resultDiv = document.getElementById('result27');
    var text = "1) čtyři;" + "<br />" + "2) osm;" + "<br />" + "3) deset;" + "<br />" + "4) dvanáct;" + "<br />" + "5) čtyřicet;"  + "<br />" + "6) šedesát / padesát;" + "<br />" + "7) šestnáct;"  + "<br />" + "8) tři tisice;"   + "<br />" + "9) jedenáct";
    resultDiv.innerHTML = text;
  }

  function submitForm28() {
    var resultDiv = document.getElementById('result28');
    var text = "1) 775 229 476;" + "<br />" + "2) 567 323 121;" + "<br />" + "3) 667 845 907;" + "<br />" + "4) 323 445 076;" + "<br />" + "5) 134 476 515";
    resultDiv.innerHTML = text;
  }

  function submitForm29() {
    var resultDiv = document.getElementById('result29');
    var text = "1) deset;" + "<br />" + "2) třicet pět;" + "<br />" + "3) devadesát;" + "<br />" + "4) dvě stě padesát;" + "<br />" + "5) tisíc osmdesát devět;"  + "<br />" + "6) dva tisíce pět set osmdesát tři";
    resultDiv.innerHTML = text;
  }

  function submitForm30() {
    var resultDiv = document.getElementById('result30');
    var text = "1) je čtvrt na jedenáct a tři minuty;" + "<br />" + "2) je za dvě minuty čtvrt na dvanáct;" + "<br />" + "3) je tři čtvrtě na šest a tři minuty;" + "<br />" + "4) je za čtyři minuty čtvrt na osm;" + "<br />" + "5) je čtvrt na osm a čtyři minuty;"  + "<br />" + "6) je půl druhé a tři minuty;"  + "<br />" + "7) je za čtyři minuty čtvrt na dvanáct;" + "<br />" + "8) je za jednu minutu tři čtvrtě na jedenáct;" + "<br />" + "9) je čtvrt na deset a šest minut";
    resultDiv.innerHTML = text;
  }

  function submitForm31() {
    var resultDiv = document.getElementById('result31');
    var text = "1) je čtvrt na dvanáct;" + "<br />" + "2) je tři čtvrtě na dvě a dvě minuty;" + "<br />" + "3) je čtvrt na pět a jedna minuta;" + "<br />" + "4) je za jednu minutu půl osmé;" + "<br />" + "5) je čtvrt na dvě a čtyři minuty;"  + "<br />" + "6) je půl desáté a čtyři minuty;"  + "<br />" + "7) je za sedm minut čtvrt na deset;" + "<br />" + "8) je půl třetí a devět minut/ za šest minut tři čtvrtě na tři;" + "<br />" + "9) je za pět minut čtvrt na šest";
    resultDiv.innerHTML = text;
  }

  function submitForm32() {
    var resultDiv = document.getElementById('result32');
    var text = "1) je tři čtvrtě na čtyři;" + "<br />" + "2) je devět hodin;" + "<br />" + "3) je čtvrt na jednu;" + "<br />" + "4) je půl druhé;" + "<br />" + "5) je čtvrt na osm;";
    resultDiv.innerHTML = text;
  }


  function submitForm33() {
    var resultDiv = document.getElementById('result33');
    var text = "1) Milého číšníka, starého dědečka, usměvavou ženu, naši tetu, staré křeslo, nemocneho studenta." + "<br />" + "2) Horkou kávu, ovocný a zelený čaj, horkou čokoládu, černé pivo, alkoholický koktejl, červené víno, mexickou tequilu." + "<br />" + "3) Nemocného dědečka, starou babičku, malou sestřenici, vzdálenou příbuznou, českou tchýni." + "<br />" + "4) Smaženou zeleninu, čerstvou rybu, kuřecí maso, tvůj salát, zelenou okurku, balkánský sýr.";
    resultDiv.innerHTML = text;
  }

  function submitForm34() {
    var resultDiv = document.getElementById('result34');
    var text = "1) dobrou housku;" + "<br />" + "2) anglickou knihu a slovník" + "<br />" + "3) vídeňskou kávu;" + "<br />" + "4) bílý papír a růžovou obálku;" + "<br />" + "5) ten francouzský obraz;" + "<br />" + "6) starou známku;" + "<br />" + "7) to ošklivé supermoderní auto;" + "<br />" + "8) krásný barokní kostel;" + "<br />" + "9) drahou voňavku;" + "<br />" + "10) novou knihu;"  + "<br />" + "11) drahý šampon a krém.";
    resultDiv.innerHTML = text;
  }

  function submitForm35() {
    var resultDiv = document.getElementById('result35');
    var text = "Znám jednu starou zahradu, vrátka, žije, opálenou pleť, náhodou, stará vrba, čeká na.";
    resultDiv.innerHTML = text;
  }

  function submitForm36() {
    var resultDiv = document.getElementById('result36');
    var text = "1) Ona se nesmí dívat na televizi." + "<br />" + "2) Oni umí dobře anglicky." + "<br />" + "3) Musime jim pomoci." + "<br />" + "4) On může přijít zítra." + "<br />" + "5) Honza musí vstávat v 7 hodin." + "<br />" + "6) Mohu vás navštívit v pondělí." + "<br />" + "7) Smíme jít do kina." + "<br />" + "8) Musím mu zavolat.";
    resultDiv.innerHTML = text;
  }

  function submitForm37() {
    var resultDiv = document.getElementById('result37');
    var text = "Odpovědi jsou pouze orientační:" + "<br />" + "Ukradli jim auto (oni). Musí zavolat na policii." + "<br />" + "Zapomněl jsem koupit pečivo (já). Musím se vrátit do obchodu." + "<br />" + "Neudělal zkoušku (on). Musi udělat zkoušku znovu." + "<br />" + "Nepíšou domácí úkoly (oni). Potřebují napsat domácí úkoly." + "<br />" + "Kamarádka mě pozvala večer na diskotéku (já). Potřebuju si koupit nové šaty." + "<br />" + "Máme špinavé ruce (my). Potřebujete/potřebujeme si umýt ruce." + "<br />" + "Chtějí jist (oni). Musí se najíst." + "<br />" + "Nemá čas (on). Potřebuje si odpočinout." + "<br />" + "Jezdíme dlouho do školy (my). Music jet autem."  + "<br />" + "Mají málo peněz (oni). Musí jít do práce.";
    resultDiv.innerHTML = text;
  }

  function submitForm38() {
    var resultDiv = document.getElementById('result38');
    var text = "Nechceš, nemůžu, musím, musím, nemůžu, musím, musím, můžu, můžeme.";
    resultDiv.innerHTML = text;
  }

  function submitForm39() {
    var resultDiv = document.getElementById('result39');
    var text = "a) Co hezkého čteš?" + "<br />" + "b) Nebude to nic vážného." + "<br />" + "c) Říkají něco zajímavého." + "<br />" + "d) Chtějí poslouchat něco veselého." + "<br />" + "e) Nic nového už nepotřebuje." + "<br />" + "f) Dáme si něco sladkého." + "<br />" + "g) To nebude nic důležitého." + "<br />" + "h) Objednáš si něco dobreho?"  + "<br />" + "i) Potrebuju něco maleho";
    resultDiv.innerHTML = text;
  }
  
  function submitForm41() {
    var resultDiv = document.getElementById('result41');
    var text = "1) Něco ji baví." + "<br />" + "2) Nebyl tam žádný z těch kluků." + "<br />" + "3) Snad o tom nic neví." + "<br />" + "4) Někomu to řekla." + "<br />" + "5) Neznala je žádná studentka a žádný student." + "<br />" + "6) Tohle určitě něčí bude." + "<br />" + "7) Nikdo nám nepíše.";
    resultDiv.innerHTML = text;
  }

  function submitForm42() {
    var resultDiv = document.getElementById('result42');
    var text = "Víš o tom něco? Nic o tom nevím.." + "<br />" + "Čekáte na někoho? Na nikoho nečekám." + "<br />" + "Jakou kávu máte rádi? Žádnou kávu nemáme rádi." + "<br />" + "Bali se někoho? Nebáli se nikoho." + "<br />" + "Mluvili o nějaké cestě? Nemluvili o žádné cestě." + "<br />" + "Viděli tam nějakou dívku? Neviděli tam žádnou dívku." + "<br />" + "Je ta taška něčí? Není ta taška ničí." + "<br />" + "Rozuměli něčemu? Nerozuměli ničemu." + "<br />" + "Kterým autobusem přijeli? Žádným autobusem nepřijeli."  + "<br />" + "What do you think? Nepíšeme o ničem.";
    resultDiv.innerHTML = text;
  }

  function submitForm43() {
    var resultDiv = document.getElementById('result43');
    var text = "1. Nedívá se na žádný zajímavý film." + "<br />" + "2. Netěší se na nikoho." + "<br />" + "3. Nevědí nic." + "<br />" + "4. Nejedou nikam na víkend." + "<br />" + "5. Nemáme žádné nové informace." + "<br />" + "6. Žádné slovníky nejsou špatné." + "<br />" + "7. Nikdo nepotřebuje telefonovat." + "<br />" + "8. Nejde na žádnou výstavu." + "<br />" + "9. Nikde v Praze není irská restaurace."  + "<br />" + "12. Neznají žádného Američana."  + "<br />" + "11. Nikdo nevolá do Brna.";
    resultDiv.innerHTML = text;
  }

  function submitForm44() {
    var resultDiv = document.getElementById('result44');
    var text = "1. Ne, nemáme žádný slovník." + "<br />" + "2. Ne, nevím ještě nic." + "<br />" + "3. Ne, nejede nikam." + "<br />" + "4. Ne, není tady nikdo" + "<br />" + "5. Ne, nemyslím na nikoho" + "<br />" + "6. Ne, nečtu žádnou knihu." + "<br />" + "7. Ne, tady nikde není" + "<br />" + "8. Ne, nikdy neposlouchám Beatles." + "<br />" + "9. Ne, nečekáme na nikoho.";
    resultDiv.innerHTML = text;
  }

  function submitForm46() {
    var resultDiv = document.getElementById('result46');
    var text = "kadeřnictví, květinářství, lékárna, pekařství, cukrárna, knihkupectví, supermarket.";
    resultDiv.innerHTML = text;
  }

  function submitForm47() {
    var resultDiv = document.getElementById('result47');
    var text = "vozík, košík, kreditní karta (kreditka), peníze (hotovost, bankovka, drobné), taška, účet (účtenka).";
    resultDiv.innerHTML = text;
  }


  function submitForm49() {
    var resultDiv = document.getElementById('result49');
    var text = "Prodavačka: Dobrý den. Co si přejete?" + "<br />" + "Tereza: Chtěla bych chleba." + "<br />" + "P: Celý nebo půlku?" + "<br />" + "T: Půlku." + "<br />" + "P: Ještě něco?" + "<br />" + "T: Dva bílé jogurty a máslo." + "<br />" + "P: Prosím." + "<br />" + "T: Kolik stojí kuře?" + "<br />" + "P: Kilo stojí 52 korun"  + "<br />" +  "T: Vezmu si jedno malé kuře. A ty dva párky." + "<br />" + "P: Je to všechno?"  + "<br />" + "T: Ještě bych chtěla vejce."  + "<br />" + "P: Kolik?" + "<br />" + "T: Deset. A to je všechno." + "<br />" + "P: 130 korun." + "<br />" + "T: Na shledanou.";
    resultDiv.innerHTML = text;
  }

  function submitForm50() {
    var resultDiv = document.getElementById('result50');
    var text = "francouzský sýr, čerstvý rohlík, chleba, černou kávu, červenou papriku, velké brambory, okurku, kozí sýr, džem, cibuli.";
    resultDiv.innerHTML = text;
  }

  function submitForm51() {
    var resultDiv = document.getElementById('result51');
    var text = "1) — N; 2) — N; 3) — A.";
    resultDiv.innerHTML = text;
  }

  function submitForm53() {
    var resultDiv = document.getElementById('result53');
    var text = "Prodavačka prodává v drogerii. Já kupuju párky a nějaké ovoce. Co si přejete? Bohužel, nemám drobné. Kolik stojí deštník? V cukrárně vezmeme jablka. V cukrárně je zavřeno.";
    resultDiv.innerHTML = text;
  }
  

function submitForm21() {
  var form = document.getElementById('grammarTestForm1');
  var inputs = form.getElementsByTagName('input');
  var answers = ['jdeme', 'jde', 'jdou', 'jdeš', 'jdu', 'jdete', 'jdete'];
  var resultsDiv = document.getElementById('results1');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() !== answers[i]) {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push('Question ' + (i + 1) + ': ' + inputs[i].value.trim() + ' (Correct answer: ' + answers[i] + ')');
      } else {
          inputs[i].classList.remove('incorrect');
          inputs[i].classList.add('correct');
      }
  }

  var resultDiv = document.getElementById('results1');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}

function submitForm22() {
  var form = document.getElementById('testForm22');
  var inputs = form.getElementsByTagName('input');
  var wrongAnswers = [];

  for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
          alert('Please fill in all fields before submitting.');
          return;
      }
  }

  var correctAnswers = ['chodím', 'říkají', 'není', 'jezdíme', 'přijdu', 'hraju', 'jsou', 'jedeme', 'leze'];

  for (var i = 0; i < inputs.length; i++) {
      var userAnswer = inputs[i].value.trim();
      if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
          inputs[i].classList.add('correct');
      } else {
          inputs[i].classList.add('incorrect');
          wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
      }
  }

  var resultDiv = document.getElementById('result22');
  if (wrongAnswers.length > 0) {
      resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
  } else {
      resultDiv.innerHTML = 'All answers are correct!';
  }
}


function submitTest() {
    let answers = [
        "nový film",
        "ta sladká jahoda",
        "ten hezký dům",
        "pomerančová limonáda",
        "stará ulice",
        "krásné nové město",
        "německá učebnice",
        "hezký dárek",
        "populární detektivka",
        "velká skříň a drahá televize"
    ];

    let inputs = document.querySelectorAll('.answerBox');
    let correct = true;
    let anyEmpty = false;

    inputs.forEach(function(input, index) {
        let userAnswer = input.value.trim();
        let correctAnswer = answers[index];

        if (userAnswer === '') {
            anyEmpty = true;
            correct = false;
            return;
        }

        if (userAnswer !== correctAnswer) {
            input.classList.add('incorrect');
            correct = false;
        } else {
            input.classList.remove('incorrect');
            input.classList.add('correct');
        }
    });

    if (anyEmpty) {
        alert("Please fill in all fields before submitting.");
    } else if (correct) {
        alert("All answers are correct!");
    }
}


function submitTest1() {
    let answers = [
        "umí",
        "může",
        "umíme",
        "můžeme",
        "umíš",
        "můžeš",
        "umíte",
        "můžete",
        "umí",
        "můžeš",
        "umějí",
        "můžou",
        "umí",
        "může"
    ];

    let inputs = document.querySelectorAll('.answerBox');
    let correct = true;
    let anyEmpty = false;

    inputs.forEach(function(input, index) {
        let userAnswer = input.value.trim();
        let correctAnswer = answers[index];

        if (userAnswer === '') {
            anyEmpty = true;
            correct = false;
            return;
        }

        if (userAnswer !== correctAnswer) {
            input.classList.add('incorrect');
            correct = false;
        } else {
            input.classList.remove('incorrect');
            input.classList.add('correct');
        }
    });

    if (anyEmpty) {
        alert("Please fill in all the boxes.");
    } else if (correct) {
        alert("All answers are correct!");
    }
}


function submitForm40() {
    var form = document.getElementById('testForm40');
    var inputs = form.getElementsByTagName('input');
    var wrongAnswers = [];

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            alert('Please fill in all fields before submitting.');
            return;
        }
    }

    var correctAnswers = ['Snídám', 'si dávám', 'čtu', 'se dívat', 'připravuju', 'kontroluju', 'Nasnídám se', 'dám si', 'se podívám', 'přečtu', 'připravím', 'zkontrolovat'];

    for (var i = 0; i < inputs.length; i++) {
        var userAnswer = inputs[i].value.trim();
        if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
            inputs[i].classList.add('correct');
        } else {
            inputs[i].classList.add('incorrect');
            wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
        }
    }

    var resultDiv = document.getElementById('result40');
    if (wrongAnswers.length > 0) {
        resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
    } else {
        resultDiv.innerHTML = 'All answers are correct!';
    }
}

function submitForm45() {
    var form = document.getElementById('testForm45');
    var inputs = form.getElementsByTagName('input');
    var wrongAnswers = [];

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            alert('Please fill in all fields before submitting.');
            return;
        }
    }

    var correctAnswers = ['Sám', 'za', 'co'];

    for (var i = 0; i < inputs.length; i++) {
        var userAnswer = inputs[i].value.trim();
        if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
            inputs[i].classList.add('correct');
        } else {
            inputs[i].classList.add('incorrect');
            wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
        }
    }

    var resultDiv = document.getElementById('result45');
    if (wrongAnswers.length > 0) {
        resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
    } else {
        resultDiv.innerHTML = 'All answers are correct!';
    }
}


function submitForm48() {
    var form = document.getElementById('testForm48');
    var inputs = form.getElementsByTagName('input');
    var wrongAnswers = [];

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            alert('Please fill in all fields before submitting.');
            return;
        }
    }

    var correctAnswers = ['cena', 'velikost', 'prášky', 'drobné', 'hotově', 'kabinky'];

    for (var i = 0; i < inputs.length; i++) {
        var userAnswer = inputs[i].value.trim();
        if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
            inputs[i].classList.add('correct');
        } else {
            inputs[i].classList.add('incorrect');
            wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
        }
    }

    var resultDiv = document.getElementById('result48');
    if (wrongAnswers.length > 0) {
        resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
    } else {
        resultDiv.innerHTML = 'All answers are correct!';
    }
}


function submitForm52() {
    var form = document.getElementById('testForm52');
    var inputs = form.getElementsByTagName('input');
    var wrongAnswers = [];

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            alert('Please fill in all fields before submitting.');
            return;
        }
    }

    var correctAnswers = ['Zdravím', 'nové', 'boty', 'Určitě', 'červené'];

    for (var i = 0; i < inputs.length; i++) {
        var userAnswer = inputs[i].value.trim();
        if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
            inputs[i].classList.add('correct');
        } else {
            inputs[i].classList.add('incorrect');
            wrongAnswers.push((i + 1) + '. ' + correctAnswers[i]);
        }
    }

    var resultDiv = document.getElementById('result52');
    if (wrongAnswers.length > 0) {
        resultDiv.innerHTML = 'Wrong answers: ' + wrongAnswers.join(', ');
    } else {
        resultDiv.innerHTML = 'All answers are correct!';
    }
}
