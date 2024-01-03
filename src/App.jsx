import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Main from './components/Main';
import lake from "./image/lake.JPG";
const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      <Header/>
      <Main imageData={imageData}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
