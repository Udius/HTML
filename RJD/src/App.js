import './App.css';
import { Header } from './components/Header.js'
import { useState } from 'react';

function SearchLine() {
  const cities = ["Кыштым", "Озерск", "Челябинск", "Екатеринбург"]
  const [whereFrom, setWhereFrom] = useState('')
  const [whereTo, setWhereTo] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  
  return (
    <form className="searchLine" onSubmit={SubmitForm}>
      <div className="searcher">
        <div className="row">

          <div className="searchBox">
            <h3>Откуда</h3>
            <input type="text" onChange={e => setWhereFrom(e.target.value)} value={whereFrom} placeholder="Откуда" name="WhereFrom"></input>
            <h6>Кыштым, Озерск</h6>
          </div>

          <div className="searchBox">
            <h3>Куда</h3>
            <input type="text" onChange={e => setWhereTo(e.target.value)} value={whereTo} placeholder="Куда" name="WhereTo"></input>
            <h6>Озерск, Кыштым</h6>
          </div>

          <div className="dateBox">
            <h3>Дата туда</h3>
            <input type="date" onChange={e => setDateTo(e.target.value)} value={dateTo} name="dtTo" min={new Date().toISOString().substring(0, 10)}></input>
          </div>

          <a className="button">
            <button type="button" onClick={SwapDates} name="btnSwap"></button>
          </a>

          <div className="dateBox">
            <h3>Дата обратно</h3>
            <input type="date" onChange={e => setDateFrom(e.target.value)} value={dateFrom} name="dtFrom" min={new Date().toISOString().substring(0, 10)}></input>
          </div>

          <b className="button">
            <button type="submit" name="btn1">Найти</button>
          </b>

        </div>
      </div>
    </form>
  )

  function SubmitForm(e) {
    var result = 0
    e.preventDefault()

    result += CheckCities()
    result += CheckDates()

    if (result === 2) {
      alert("Билет успешно куплен!")
    }
  }

  function CheckCities() {
    var result = 1

    if (whereFrom === "") {
      alert('Поле "Откуда" пусто')
      result = 0
    } else if (!cities.includes(whereFrom)) {
      alert("Неизвестный город: " + whereFrom);
      result = 0
    }

    if (whereTo === "") {
      alert('Поле "Куда" пусто')
      result = 0
    } else if (!cities.includes(whereTo)) {
      alert("Неизвестный город: " + whereTo)
      result = 0
    } else if (whereFrom === whereTo) {
      alert('Выбраны одинаковые города')
      result = 0
    }

    return result
  }

  function CheckDates() {
    var dtTo = dateTo.split('-')
    var dtFrom = dateFrom.split('-')

    if (dtTo.length < 3 || dtFrom < 3) {
      alert("Не выбраны даты отправлений")
      return 0
    }
    
    for (let i = 0; i < 3; i++) {
      var a = Number(dtTo[i])
      var b = Number(dtFrom[i])
      if (a > b) {
        alert('Дата отправления не может быть позже даты прибытия');
        return 0
      }
    }
    return 1
  }

  function SwapDates() {
    setDateFrom(dateTo)
    setDateTo(dateFrom)
  }
}

function App() {
  document.body.style = 'background: #e6e6e6;';
  return (
    <div>
      <head>
        <meta charset="utf-8"></meta>
        <title>РЖД</title>
        <link rel="stylesheet" type="text/css" href="App.css"></link>
      </head>

      <body>
        <Header />

        <SearchLine />

        <center><img src={require("./img/nums.jpg")} alt="" width="1000"></img></center><br></br>
        <div className="row">
          <div className="containerH1">
            1) Выберете населенный пункт, из которого планируете выехать
          </div>
          <div className="containerH1">
            2) Выберете населенный пункт, в который хотите приехать
          </div>
          <div className="containerH1">
            3) Выберете желаемую дату отправления
          </div>
          <div className="containerH1">
            4) Выберете желаемую дату отправления обратно и нажмите кнопку "Найти"
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
