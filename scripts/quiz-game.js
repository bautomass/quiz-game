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


  function generateTitles() {
    const gameTitles = `
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
      <div class="grid--title">Ģeogrāfija</div>
      <div class="grid--title">Dziesmas</div>
      <div class="grid--title">Aktieri</div>
      <div class="grid--title">Mūziķi</div>
      <div class="grid--title">Dzīvnieki</div>
      <div class="grid--title">Cilvēki</div>
    </div>
  `
  const loadTitles = document.createElement("div")
  loadTitles.innerHTML = gameTitles
  document.getElementById("quiz-game").appendChild(loadTitles)
  }

generateTitles()

function generateCards(topic) {
  class QuestionsCards {
    constructor(topic) {
      this.topic = topic
    }
  }
  const gameCards = `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front" id="topic">200${this.topic}
        </div>
        <div class="flip-card-back">
          <h1>Ģeogrāfija</h1> 
          <p class="points">200 Punkti</p> 
          <p class="question" onclick="loadQuestion('Ģeogrāfija', '200', 'Kura ir Francijas Galvas Pilsēta?', ['Parīze', 'Berlīne', 'Madride'], 'Parīze')">JAUTĀJUMS</p>
        </div>
      </div>
    </div>
  </div>
  `
const loadCards = document.createElement("div")
loadCards.innerHTML = gameCards
document.getElementById("quiz-game").appendChild(loadCards)

const newQuestionsCards = new QuestionsCards(topic)
newQuestionsCards.generateCards()
}

generateCards("Ģeogrāfija")
// generateCards("Ģeogrāfija")
// generateCards("Ģeogrāfija")
// generateCards("Ģeogrāfija")
// generateCards("Ģeogrāfija")
// generateCards()
// generateCards()
// generateCards()
// generateCards()







  // loadQuestion('Ģeogrāfija', '200', 'Kura ir Francijas Galvas Pilsēta?', ['Parīze', 'Berlīne', 'Madride'], 'Parīze')
  // loadQuestion('Ģeogrāfija', '400', 'Kura ir vecākā pilsēta Latvijā?', ['Ludza', 'Valmiera', 'Cēsis'], 'Ludza')
  // loadQuestion('Ģeogrāfija', '600', 'Kurš Ir Lielākais Kontinents?', ['Āfrika', 'Āzija', 'Austrālija'], 'Āzija')
  // loadQuestion('Ģeogrāfija', '800', 'Garākā Upe Āfrikā?', ['Zambezi', 'Kongo', 'Nīla'], 'Nīla')
  // loadQuestion('Ģeogrāfija', '1000', 'Pasaulē Vismazāk Apdzīvotā Pilsēta?', ['Vatikāns', 'Alūksne', 'Ngerulmuda'], 'Ngerulmuda')

  // loadQuestion('Dziesmas', '200', 'Kā sauc Latvijas Himnas Autoru?', ['Kalniņš Imants', 'Kalniņš Alfrēds', 'Baumaņu Kārlis'], 'Baumaņu Kārlis')
  // loadQuestion('Dziesmas', '400', 'Kurš Ir Populārākais Mūzikas Novirziens Pasaulē?', ['Roks', 'Hip-Hop/Rap', 'Pop'], 'Pop')
  // loadQuestion('Dziesmas', '600', 'Kurš No Šiem Singliem Ir Vispopulārākais Singls Jebkad?', ['Ed Sheeran - Shape of You', 'Queen - Bohemian Rhapsody', 'Michael Jackson - Billie Jean'], 'Michael Jackson - Billie Jean')
  // loadQuestion('Dziesmas', '800', 'Kura Dziesma Ieguva 2020 Grammy Balvu Kā Song Of The Year?', ['Billie Eilish - Bad Guy', 'Lewis Capaldi - Someone You Loved', 'Lil Nas X ft. Billy Ray Cyrus - Old Town Road'], 'Billie Eilish - Bad Guy')
  // loadQuestion('Dziesmas', '1000', 'Kurš Ir Dziesmas Work Hard Play Hard Autors?', ['Dr. Dre', 'Wiz Khalifa', '2Pac'], 'Wiz Khalifa')
  
  // loadQuestion('Aktieri', '200', 'Galvenās Lomas Atveidotājs Filmā Titāniks?', ['Steven Seagal', 'Leonardo Di Kaprio', 'Rowan Atkinson'], 'Leonardo Di Kaprio')
  // loadQuestion('Aktieri', '400', 'Kurš Ieguva Labākā Aktiera Titulu 2022 Gadā?', ['Anthony Hopkins', 'Gary Oldman', 'Tom Hanks'], 'Anthony Hopkins')
  // loadQuestion('Aktieri', '600', 'Kurš Ieguva Oskara Balvu Kā Labākais Aktieris Filmā The Godfather?', ['Marlon Brando', 'Al Pacino', 'Robert De Niro'], 'Robert De Niro')
  // loadQuestion('Aktieri', '800', 'Kurš Aktieris Attēloja Indiana Jones Galveno Lomu?', ['Tom Cruise', 'Sean Connery', 'Harrison Ford'], 'Harrison Ford')
  // loadQuestion('Aktieri', '1000', 'Kura Aktiere Atveidoja Moniku Seriālā Sirds Mīļā Monika?', ['Rēzija Kalniņa', 'Mirdza Martinsone', 'Dārta Daneviča'], 'Mirdza Martinsone')

  // loadQuestion('Mūziķi', '200', 'Kādu Instrumentu Spēlē Ģitārists?', ['Klavieres', 'Bungas', 'Ģitāru'], 'Ģitāru')
  // loadQuestion('Mūziķi', '400', 'Kura Māksliniece Ir Zināma Kā Queen Of Pop?', ['Madonna', 'Mariah Carey', 'Whitney Houston'], 'Madonna')
  // loadQuestion('Mūziķi', '600', 'Kurš Ir Lead Singer Grupā Queen?', ['Freddie Starr', 'Elvis Presley', 'Freddie Mercury'], 'Freddie Mercury')
  // loadQuestion('Mūziķi', '800', 'Kurš Ir Lead Singer Grupā The Rolling Stones?', ['Steven Tyler', 'Freddie Mercury', 'Mick Jagger'], 'Mick Jagger')
  // loadQuestion('Mūziķi', '1000', 'Kura Ir Vispopulārākā Elvis Presley Dziesma?', ['If I Can Dream', 'Always On My Mind', 'Cant Help Falling In Love'], 'Cant Help Falling In Love')

  // loadQuestion('Dzīvnieki', '200', 'Kuram Dzīvniekam Ir garš kakls un Plankumi?', ['Žirafe', 'Zebra', 'Zīlonis'], 'Žirafe')
  // loadQuestion('Dzīvnieki', '400', 'Lielākais Zīdītājs Uz Zemes?', ['Nīlszirgs', 'Grizlij Lācis', 'Āfrikas Zīlonis'], 'Āfrikas Zīlonis')
  // loadQuestion('Dzīvnieki', '600', 'Kurš Ir Ātrākais Dzīvnieks uz Zemes?', ['Gepards', 'Leopards', 'Lauva'], 'Gepards')
  // loadQuestion('Dzīvnieki', '800', 'Kura No Šīm Zivīm Ir Zivs?', ['Zobenzivs', 'Medūza', 'Jūras Zvaigzne'], 'Zobenzivs')
  // loadQuestion('Dzīvnieki', '1000', 'Kā Dēvē Daudz Flamingi Vienu Viet (Bars Ar Flamingo)?', ['Ganāmpulks', 'Spiets', 'Kolonija'], 'Kolonija')

  // loadQuestion('Cilvēki', '200', 'Kura Ķermeņa Daļa Tiek Izmantota Ožai?', ['Deguns', 'Ausis', 'Kājas'], 'Deguns')
  // loadQuestion('Cilvēki', '400', 'Kurš Ir Lielākais Orgāns Cilvēka Ķermenī?', ['Aknas', 'Plaušas', 'Āda'], 'Āda')
  // loadQuestion('Cilvēki', '600', 'Kurš Ir Garākais Kauls Cilvēka Ķermenī?', ['Stilba kauls (Tibia)', 'Augšdelma kauls (Humerus)', 'Ciskas kauls (Femur)'], 'Ciskas kauls (Femur)')
  // loadQuestion('Cilvēki', '800', 'Jūtīgākais Cilvēka Orgāns?', ['Deguns', 'Āda', 'Acis'], 'Āda')
  // loadQuestion('Cilvēki', '1000', 'Cik % No Kopējiem Skābekļa Un Asins Resursiem Patērē Smadzenes?', ['25%', '20%', '17%'], '20%')

