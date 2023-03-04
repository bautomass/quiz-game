function quizGameTitles(subject1, subject2, subject3, subject4, subject5, subject6) {
  class AppLayoutTop {
    constructor(subject1, subject2, subject3, subject4, subject5, subject6) {
      this.subject1 = subject1
      this.subject2 = subject2
      this.subject3 = subject3
      this.subject4 = subject4
      this.subject5 = subject5
      this.subject6 = subject6
    }
    generateTop() {
      const gameTop = `
      <div class="overlay">
      <div class="game-wrapper">
          <h1 class="game-name">Zināšanu Cīņas<br>
          </h1>
      </div>
      <div class="scoreTable">
        <div class="teamOne">
          <p id="teamOneScore">TEAM 
            <span>🟢</span>
              <span class="updateScoreT1" id="updateScoreT1"></span>
          </p>
        </div>
        <div class="teamsVs">
          <img src="/vs.png" alt="" srcset="" style="width: 80px;">
        </div>
        <div class="teamTwo">
          <p id="teamTwoScore">TEAM 
            <span>🔵</span>
            <span class="updateScoreT2" id="updateScoreT2"></span>
          </p>
        </div>
      </div>
      <div class="main-grid">
        <div class="grid--title">${this.subject1}</div>
        <div class="grid--title">${this.subject2}</div>
        <div class="grid--title">${this.subject3}</div>
        <div class="grid--title">${this.subject4}</div>
        <div class="grid--title">${this.subject5}</div>
        <div class="grid--title">${this.subject6}</div>
      </div>
    `
const showGame = document.createElement("div")
showGame.innerHTML = gameTop
document.getElementById("quiz-game-top").appendChild(showGame)
    }
  }
const newAppLayoutTop = new AppLayoutTop(subject1, subject2, subject3, subject4, subject5, subject6)
newAppLayoutTop.generateTop()
}

quizGameTitles("Ģeogrāfija", "Dziesmas", "Aktieri", "Mūziķi", "Dzīvnieki", "Cilvēki")

function quizGameCards(card, subject, points, question) {
  class AppLayoutBottom {
    constructor(card, subject, points, question) {
      this.card = card
      this.subject = subject
      this.points = points
      this.question = question
    }
    generateBottom() {
      const gameBottom = `
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">${this.card}
        </div>
        <div class="flip-card-back">
          <h1>${this.subject}</h1> 
          <p class="points">${this.points} Punkti</p> 
          <p class="question">${this.question}</p>
        </div>
      </div>
    </div>
    </div>
      `
const showCards = document.createElement("div")
showCards.classList.add("game-card")
showCards.innerHTML = gameBottom
document.querySelector(".main-grid").appendChild(showCards)
    }
  }
const newAppLayoutBottom = new AppLayoutBottom(card, subject, points, question)
newAppLayoutBottom.generateBottom()
}

quizGameCards("200", "Ģeogrāfija", "200", "JAUTĀJUMS")
quizGameCards("200", "Dziesmas", "200", "JAUTĀJUMS")
quizGameCards("200", "Aktieri", "200", "JAUTĀJUMS")
quizGameCards("200", "Mūziķi", "200", "JAUTĀJUMS")
quizGameCards("200", "Dzīvnieki", "200", "JAUTĀJUMS")
quizGameCards("200", "Cilvēki", "200", "JAUTĀJUMS")
quizGameCards("400", "Ģeogrāfija", "400", "JAUTĀJUMS")
quizGameCards("400", "Dziesmas", "400", "JAUTĀJUMS")
quizGameCards("400", "Aktieri", "400", "JAUTĀJUMS")
quizGameCards("400", "Mūziķi", "400", "JAUTĀJUMS")
quizGameCards("400", "Dzīvnieki", "400", "JAUTĀJUMS")
quizGameCards("400", "Cilvēki", "400", "JAUTĀJUMS")
quizGameCards("600", "Ģeogrāfija", "600", "JAUTĀJUMS")
quizGameCards("600", "Dziesmas", "600", "JAUTĀJUMS")
quizGameCards("600", "Aktieri", "600", "JAUTĀJUMS")
quizGameCards("600", "Mūziķi", "600", "JAUTĀJUMS")
quizGameCards("600", "Dzīvnieki", "600", "JAUTĀJUMS")
quizGameCards("600", "Cilvēki", "600", "JAUTĀJUMS")
quizGameCards("800", "Ģeogrāfija", "800", "JAUTĀJUMS")
quizGameCards("800", "Dziesmas", "800", "JAUTĀJUMS")
quizGameCards("800", "Aktieri", "800", "JAUTĀJUMS")
quizGameCards("800", "Mūziķi", "800", "JAUTĀJUMS")
quizGameCards("800", "Dzīvnieki", "800", "JAUTĀJUMS")
quizGameCards("800", "Cilvēki", "800", "JAUTĀJUMS")
quizGameCards("1000", "Ģeogrāfija", "1000", "JAUTĀJUMS")
quizGameCards("1000", "Dziesmas", "1000", "JAUTĀJUMS")
quizGameCards("1000", "Aktieri", "1000", "JAUTĀJUMS")
quizGameCards("1000", "Mūziķi", "1000", "JAUTĀJUMS")
quizGameCards("1000", "Dzīvnieki", "1000", "JAUTĀJUMS")
quizGameCards("1000", "Cilvēki", "1000", "JAUTĀJUMS")

function loadQuestion(topic, points, question, choices, answer) {
    class Game {
      constructor(topic, points, question, choices, answer) {
        this.topic = topic
        this.points = points
        this.question = question
        this.choices = choices
        this.answer = answer
      }
      showQuestion() {
        const questions = `
          <div class="container">
            <p id="topic">${this.topic}</p>
            <p id="points">${this.points}</p>
            <p id="question">${this.question}</p>
            <button class="choices">${this.choices[0]}</button>
            <button class="choices">${this.choices[1]}</button>
            <button class="choices">${this.choices[2]}</button>
          </div>
        `
        const newContent = document.createElement("div");
        newContent.innerHTML = questions + `<br>`;
        document.getElementById("quiz-game").appendChild(newContent);

        const userChoice = newContent.querySelectorAll(".choices")
        userChoice.forEach(button => {
            button.addEventListener("click", checkAnswer.bind(this))
        })
        function checkAnswer(button) {
            const currentButton = button.target;
            if (currentButton.textContent === this.answer) {
              console.log("Jūs Atbildējāt Pareizi!");
            } else {
              console.log("Jūs Atbildējāt Nepareizi!");
            }
          }
      }
    }
    const newGame = new Game(topic, points, question, choices, answer)
    newGame.showQuestion()
  }

  function getQuestions(){
const allQuestions = [
q1 = loadQuestion('Ģeogrāfija', '200', 'Kura ir Francijas Galvas Pilsēta?', ['Parīze', 'Berlīne', 'Madride'], 'Parīze'),
q2 = loadQuestion('Ģeogrāfija', '400', 'Kura ir vecākā pilsēta Latvijā?', ['Ludza', 'Valmiera', 'Cēsis'], 'Ludza'),
q3 = loadQuestion('Ģeogrāfija', '600', 'Kurš Ir Lielākais Kontinents?', ['Āfrika', 'Āzija', 'Austrālija'], 'Āzija'),
q4 = loadQuestion('Ģeogrāfija', '800', 'Garākā Upe Āfrikā?', ['Zambezi', 'Kongo', 'Nīla'], 'Nīla'),
q5 = loadQuestion('Ģeogrāfija', '1000', 'Pasaulē Vismazāk Apdzīvotā Pilsēta?', ['Vatikāns', 'Alūksne', 'Ngerulmuda'], 'Ngerulmuda'),
q6 = loadQuestion('Dziesmas', '200', 'Kā sauc Latvijas Himnas Autoru?', ['Kalniņš Imants', 'Kalniņš Alfrēds', 'Baumaņu Kārlis'], 'Baumaņu Kārlis'),
q7 = loadQuestion('Dziesmas', '400', 'Kurš Ir Populārākais Mūzikas Novirziens Pasaulē?', ['Roks', 'Hip-Hop/Rap', 'Pop'], 'Pop'),
q8 = loadQuestion('Dziesmas', '600', 'Kurš No Šiem Singliem Ir Vispopulārākais Singls Jebkad?', ['Ed Sheeran - Shape of You', 'Queen - Bohemian Rhapsody', 'Michael Jackson - Billie Jean'], 'Michael Jackson - Billie Jean'),
q9 = loadQuestion('Dziesmas', '800', 'Kura Dziesma Ieguva 2020 Grammy Balvu Kā Song Of The Year?', ['Billie Eilish - Bad Guy', 'Lewis Capaldi - Someone You Loved', 'Lil Nas X ft. Billy Ray Cyrus - Old Town Road'], 'Billie Eilish - Bad Guy'),
q10 = loadQuestion('Dziesmas', '1000', 'Kurš Ir Dziesmas Work Hard Play Hard Autors?', ['Dr. Dre', 'Wiz Khalifa', '2Pac'], 'Wiz Khalifa'),
q11 = loadQuestion('Aktieri', '200', 'Galvenās Lomas Atveidotājs Filmā Titāniks?', ['Steven Seagal', 'Leonardo Di Kaprio', 'Rowan Atkinson'], 'Leonardo Di Kaprio'),
q12 = loadQuestion('Aktieri', '400', 'Kurš Ieguva Labākā Aktiera Titulu 2022 Gadā?', ['Anthony Hopkins', 'Gary Oldman', 'Tom Hanks'], 'Anthony Hopkins'),
q13 = loadQuestion('Aktieri', '600', 'Kurš Ieguva Oskara Balvu Kā Labākais Aktieris Filmā The Godfather?', ['Marlon Brando', 'Al Pacino', 'Robert De Niro'], 'Robert De Niro'),
q14 = loadQuestion('Aktieri', '800', 'Kurš Aktieris Attēloja Indiana Jones Galveno Lomu?', ['Tom Cruise', 'Sean Connery', 'Harrison Ford'], 'Harrison Ford'),
q15 = loadQuestion('Aktieri', '1000', 'Kura Aktiere Atveidoja Moniku Seriālā Sirds Mīļā Monika?', ['Rēzija Kalniņa', 'Mirdza Martinsone', 'Dārta Daneviča'], 'Mirdza Martinsone'),
q16 = loadQuestion('Mūziķi', '200', 'Kādu Instrumentu Spēlē Ģitārists?', ['Klavieres', 'Bungas', 'Ģitāru'], 'Ģitāru'),
q17 = loadQuestion('Mūziķi', '400', 'Kura Māksliniece Ir Zināma Kā Queen Of Pop?', ['Madonna', 'Mariah Carey', 'Whitney Houston'], 'Madonna'),
q18 = loadQuestion('Mūziķi', '600', 'Kurš Ir Lead Singer Grupā Queen?', ['Freddie Starr', 'Elvis Presley', 'Freddie Mercury'], 'Freddie Mercury'),
q19 = loadQuestion('Mūziķi', '800', 'Kurš Ir Lead Singer Grupā The Rolling Stones?', ['Steven Tyler', 'Freddie Mercury', 'Mick Jagger'], 'Mick Jagger'),
q20 = loadQuestion('Mūziķi', '1000', 'Kura Ir Vispopulārākā Elvis Presley Dziesma?', ['If I Can Dream', 'Always On My Mind', 'Cant Help Falling In Love'], 'Cant Help Falling In Love'),
q21 = loadQuestion('Dzīvnieki', '200', 'Kuram Dzīvniekam Ir garš kakls un Plankumi?', ['Žirafe', 'Zebra', 'Zīlonis'], 'Žirafe'),
q22 = loadQuestion('Dzīvnieki', '400', 'Lielākais Zīdītājs Uz Zemes?', ['Nīlszirgs', 'Grizlij Lācis', 'Āfrikas Zīlonis'], 'Āfrikas Zīlonis'),
q23 = loadQuestion('Dzīvnieki', '600', 'Kurš Ir Ātrākais Dzīvnieks uz Zemes?', ['Gepards', 'Leopards', 'Lauva'], 'Gepards'),
q24 = loadQuestion('Dzīvnieki', '800', 'Kura No Šīm Zivīm Ir Zivs?', ['Zobenzivs', 'Medūza', 'Jūras Zvaigzne'], 'Zobenzivs'),
q25 = loadQuestion('Dzīvnieki', '1000', 'Kā Dēvē Daudz Flamingi Vienu Viet (Bars Ar Flamingo)?', ['Ganāmpulks', 'Spiets', 'Kolonija'], 'Kolonija'),
q26 = loadQuestion('Cilvēki', '200', 'Kura Ķermeņa Daļa Tiek Izmantota Ožai?', ['Deguns', 'Ausis', 'Kājas'], 'Deguns'),
q27 = loadQuestion('Cilvēki', '400', 'Kurš Ir Lielākais Orgāns Cilvēka Ķermenī?', ['Aknas', 'Plaušas', 'Āda'], 'Āda'),
q28 = loadQuestion('Cilvēki', '600', 'Kurš Ir Garākais Kauls Cilvēka Ķermenī?', ['Stilba kauls (Tibia)', 'Augšdelma kauls (Humerus)', 'Ciskas kauls (Femur)'], 'Ciskas kauls (Femur)'),
q29 = loadQuestion('Cilvēki', '800', 'Jūtīgākais Cilvēka Orgāns?', ['Deguns', 'Āda', 'Acis'], 'Āda'),
q30 = loadQuestion('Cilvēki', '1000', 'Cik % No Kopējiem Skābekļa Un Asins Resursiem Patērē Smadzenes?', ['25%', '20%', '17%'], '20%')
]
}
console.log(getQuestions.allQuestions.loadQuestion[1](topic, points, question, choices, answer));

// const revealQuestion = gameBottom.querySelectorAll(".question")
// revealQuestion.forEach(button => {
// button.addEventListener("click", loadQuestion())
// })