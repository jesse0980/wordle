import logo from './logo.svg';
import './App.css';
import Row from './components/row.js'
import {useState} from 'react'
import soey from './components/IMG_3903.jpg'
function App() {
  let targ = "smell";
  const [rows, setRows] = useState([
    { id: 0, word: '', ch: false, vis: true,},
    { id: 1, word: '', ch: false, vis: true },
    { id: 2, word: '', ch: false, vis: true },
    { id: 3, word: '', ch: false, vis: true },
    { id: 4, word: '', ch: false, vis: true },
  ]);
  const [count, setCount] = useState(0)



  let rowComp = []
  for(let i = 0; i < rows.length; i++){
    if(rows[i].vis){
      rowComp.push(<Row target={targ} key={rows[i].id} word={rows[i].word} ch={rows[i].ch}/>)
    }
  }

//handle typing out the word 
  const changeRow = (string) => {
    
    const updatedRows = rows.map((row) => {
      if (row.id === count) {
        return { ...row, word: string };
      }
      return row;
    });
    setRows(updatedRows);
    setcurrWord(string);
  }
  //handle enter key
  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    handleSub();
  }
};
  //handle submitting the word
  const handleSub = () => {
    setCount(count + 1)

    const updatedRows = rows.map((row) => {
      if (row.id < count + 1) {
        return { ...row, ch: true };
      }
      return row;
    });
    setRows(updatedRows);


    rowComp = []
    for(let i = 0; i < rows.length; i++){
        rowComp.push(<Row target={targ} key={rows[i].id} word={rows[i].word} ch={rows[i].ch}/>)
    }
    if(currWord.toLowerCase() == targ){

      setWin(true);
    }
    setcurrWord("")
    
  }
  

  const [currWord, setcurrWord] = useState();
  const [win, setWin] = useState(false);
  if(win == false){
    return (
      <div className="App">
        <h1 style={{fontSize:'5vh', color:'yellow'}}>Soroush Wordle</h1>   
          {rowComp}
          <input className='main-in'onKeyDown={handleKeypress} autoFocus type="text" required value={currWord} onChange={(s) => changeRow(s.target.value)}/>
          <button className='submit' variant="outlined" onClick ={handleSub}>Submit</button>
      </div>
      );
  }
  else{
    return (
    <div className='win'>
      <h1 style={{color:'white'}}>You WIN!</h1>
      <img className='pic'src={soey}/>
      <h1 className="end-tag"style={{color:'white'}}>You smelled me out because I don't brush my teeth!</h1>
    </div>
    )
  }
  
}

export default App;
