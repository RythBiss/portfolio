import './App.css';
import spaceBlob from './img/Space Blob.gif'
import MajorSegment from './MajorSegment.js'

const spaceBlobElement = <img id='spaceBlob' src={spaceBlob} alt='spaceBlob' />

function App() {
  return (
    <div className="App">
      <MajorSegment body={spaceBlobElement} styling='majorSegLight' />
      <MajorSegment body='List skills here' styling='majorSegDark' />
      <MajorSegment body='Add links to projects' styling='majorSegLight' />
    </div>
  );
}

export default App;