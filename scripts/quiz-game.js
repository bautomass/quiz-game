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


  function generateLayout() {
    const gameLayout = `
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

      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="frontgeo200">200
          </div>
          <div class="flip-card-back">
            <h1>Ģeogrāfija</h1> 
            <p class="points">200 Punkti</p> 
            <p class="question" onclick="loadQuestion('Ģeogrāfija', '200', 'Kura ir Francijas Galvas Pilsēta?', ['Parīze', 'Berlīne', 'Madride'], 'Parīze')">JAUTĀJUMS</p>
            <param id="first-question" value="Ludza">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p200" value="200">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="frontd200">200
          </div>
          <div class="flip-card-back">
            <h1>Dziesmas</h1> 
            <p class="points">200 Punkti</p> 
            <p class="question" id="d200">JAUTĀJUMS</p>
            <param id="second-question" value="Baumaņu Kārlis">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p200" value="200">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="fronta200">200
          </div>
          <div class="flip-card-back">
            <h1>Aktieri</h1> 
            <p class="points">200 Punkti</p> 
            <p class="question" id="a200">JAUTĀJUMS</p>
            <param id="third-question" value="Leonardo Di Kaprio">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p200" value="200">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="musician200">200
          </div>
          <div class="flip-card-back">
            <h1>Mūziķi</h1> 
            <p class="points">200 Punkti</p> 
            <p class="question" id="m200">JAUTĀJUMS</p>
            <param id="forth-question" value="Ģitāru">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p200" value="200">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="animal200">200
          </div>
          <div class="flip-card-back">
            <h1>Dzīvnieki</h1> 
            <p class="points">200 Punkti</p> 
            <p class="question" id="dz200">JAUTĀJUMS</p>
            <param id="fifth-question" value="Žirafe">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p200" value="200">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="peopl200">200
          </div>
          <div class="flip-card-back">
            <h1>Cilvēki</h1> 
            <p class="points">200 Punkti</p> 
            <p class="question" id="c200">JAUTĀJUMS</p>
            <param id="sixth-question" value="Deguns">
          </div>
        </div>
      </div>

      <!-- 200 END -->

      <div class="flip-card">
        <param id="p400" value="400">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="frontgeo400">400
          </div>
          <div class="flip-card-back">
            <h1>Ģeogrāfija</h1> 
            <p class="points">400 Punkti</p> 
            <p class="question" id="g400">JAUTĀJUMS</p>
            <param id="seventh-question" value="Āzija">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p400" value="400">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="frontd400">400
          </div>
          <div class="flip-card-back">
            <h1>Dziesmas</h1> 
            <p class="points">400 Punkti</p> 
            <p class="question" id="d400">JAUTĀJUMS</p>
            <param id="eith-question" value="Pop">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p400" value="400">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="fronta400">400
          </div>
          <div class="flip-card-back">
            <h1>Aktieri</h1> 
            <p class="points">400 Punkti</p> 
            <p class="question" id="a400">JAUTĀJUMS</p>
            <param id="ninth-question" value="Anthony Hopkins">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p400" value="400">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="musician400">400
          </div>
          <div class="flip-card-back">
            <h1>Mūziķi</h1> 
            <p class="points">400 Punkti</p> 
            <p class="question" id="m400">JAUTĀJUMS</p>
            <param id="tenth-question" value="Madonna">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p400" value="400">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="animal400">400
          </div>
          <div class="flip-card-back">
            <h1>Dzīvnieki</h1> 
            <p class="points">400 Punkti</p> 
            <p class="question" id="dz400">JAUTĀJUMS</p>
            <param id="eleventh-question" value="Āfrikas Zīlonis">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p400" value="400">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="peopl400">400
          </div>
          <div class="flip-card-back">
            <h1>Cilvēki</h1> 
            <p class="points">400 Punkti</p> 
            <p class="question" id="c400">JAUTĀJUMS</p>
            <param id="twelveth-question" value="Āda">
          </div>
        </div>
      </div>

      <!-- 400 END -->

      <div class="flip-card">
        <param id="p600" value="600">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="frontgeo600">600
          </div>
          <div class="flip-card-back">
            <h1>Ģeogrāfija</h1> 
            <p class="points">600 Punkti</p> 
            <p class="question" id="g600">JAUTĀJUMS</p>
            <param id="trnth-question" value="Parīze">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p600" value="600">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="frontd600">600
          </div>
          <div class="flip-card-back">
            <h1>Dziesmas</h1> 
            <p class="points">600 Punkti</p> 
            <p class="question" id="d600">JAUTĀJUMS</p>
            <param id="frtnth-question" value="Michael Jackson - Billie Jean">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p600" value="600">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="fronta600">600
          </div>
          <div class="flip-card-back">
            <h1>Aktieri</h1> 
            <p class="points">600 Punkti</p> 
            <p class="question" id="a600">JAUTĀJUMS</p>
            <param id="fifthnth-question" value="Marlon Brando">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p600" value="600">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="musician600">600
          </div>
          <div class="flip-card-back">
            <h1>Mūziķi</h1> 
            <p class="points">600 Punkti</p> 
            <p class="question" id="m600">JAUTĀJUMS</p>
            <param id="sixtnth-question" value="Freddie Mercury">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p600" value="600">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="animal600">600
          </div>
          <div class="flip-card-back">
            <h1>Dzīvnieki</h1> 
            <p class="points">600 Punkti</p> 
            <p class="question" id="dz600">JAUTĀJUMS</p>
            <param id="seventhn-question" value="Gepards">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p600" value="600">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="peopl600">600
          </div>
          <div class="flip-card-back">
            <h1>Cilvēki</h1> 
            <p class="points">600 Punkti</p> 
            <p class="question" id="c600">JAUTĀJUMS</p>
            <param id="eitn-question" value="Ciskas kauls">
          </div>
        </div>
      </div>

      <!-- 600 END -->

      <div class="flip-card">
        <param id="p800" value="800">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="frontgeo800">800
          </div>
          <div class="flip-card-back">
            <h1>Ģeogrāfija</h1> 
            <p class="points">800 Punkti</p> 
            <p class="question" id="g800">JAUTĀJUMS</p>
            <param id="nith-question" value="Nīla">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p800" value="800">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="frontd800">800
          </div>
          <div class="flip-card-back">
            <h1>Dziesmas</h1> 
            <p class="points">800 Punkti</p> 
            <p class="question" id="d800">JAUTĀJUMS</p>
            <param id="twenth-question" value="Billie Eilish - Bad Guy">
          </div>
        </div>
      </div>
      <div class="flip-card">
        <param id="p800" value="800">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="fronta800">800
          </div>
          <div class="flip-card-back">
            <h1>Aktieri</h1> 
            <p class="points">800 Punkti</p> 
            <p class="question" id="a800">JAUTĀJUMS</p>
            <param id="twenthone-question" value="Harrison Ford">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p800" value="800">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="musician800">800
          </div>
          <div class="flip-card-back">
            <h1>Mūziķi</h1> 
            <p class="points">800 Punkti</p> 
            <p class="question" id="m800">JAUTĀJUMS</p>
            <param id="twenthtwo-question" value="Mick Jagger">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p800" value="800">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="animal800">800
          </div>
          <div class="flip-card-back">
            <h1>Dzīvnieki</h1> 
            <p class="points">800 Punkti</p> 
            <p class="question" id="dz800">JAUTĀJUMS</p>
            <param id="twenththree-question" value="Zobenzivis">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p800" value="800">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="peopl800">800
          </div>
          <div class="flip-card-back">
            <h1>Cilvēki</h1> 
            <p class="points">800 Punkti</p> 
            <p class="question" id="c800">JAUTĀJUMS</p>
            <param id="twenthtfourth-question" value="Āda">
          </div>
        </div>
      </div>

      <!-- 800 END -->

      <div class="flip-card">
        <param id="p1000" value="1000">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="frontgeo1000">1000
          </div>
          <div class="flip-card-back">
            <h1>Ģeogrāfija</h1> 
            <p class="points">1000 Punkti</p> 
            <p class="question" id="g1000">JAUTĀJUMS</p>
            <param id="twenthtfifth-question" value="Ngerulmuda">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p1000" value="1000">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="frontd1000">1000
          </div>
          <div class="flip-card-back">
            <h1>Dziesmas</h1> 
            <p class="points">1000 Punkti</p> 
            <p class="question" id="d1000">JAUTĀJUMS</p>
            <param id="twentysix-question" value="Wiz Khalifa">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p1000" value="1000">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="fronta1000">1000
          </div>
          <div class="flip-card-back">
            <h1>Aktieri</h1> 
            <p class="points">1000 Punkti</p> 
            <p class="question" id="a1000">JAUTĀJUMS</p>
            <param id="twentyseven-question" value="Mirdza Martinsone">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p1000" value="1000">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="musician1000">1000
          </div>
          <div class="flip-card-back">
            <h1>Mūziķi</h1> 
            <p class="points">1000 Punkti</p> 
            <p class="question" id="m1000">JAUTĀJUMS</p>
            <param id="twentyei-question" value="Cant Help Falling In Love">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p1000" value="1000">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="animal1000">1000
          </div>
          <div class="flip-card-back">
            <h1>Dzīvnieki</h1> 
            <p class="points">1000 Punkti</p> 
            <p class="question" id="dz1000">JAUTĀJUMS</p>
            <param id="twentynine-question" value="Kolonija">
          </div>
        </div>
      </div>


      <div class="flip-card">
        <param id="p1000" value="1000">
        <div class="flip-card-inner">
          <div class="flip-card-front" id="peopl1000">1000
          </div>
          <div class="flip-card-back">
            <h1>Cilvēki</h1> 
            <p class="points">1000 Punkti</p> 
            <p class="question" id="c1000">JAUTĀJUMS</p>
            <param id="thirtnh-question" value="20%">
          </div>
        </div>
      </div>

    </div>
  `
  const loadLayout = document.createElement("div")
  loadLayout.innerHTML = gameLayout
  document.getElementById("quiz-game").appendChild(loadLayout)
  }

  generateLayout()










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

