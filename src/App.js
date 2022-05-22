import Navbar from './components/Navbar';
import FromText from './components/FromText';
function App() {
  return (
    <div>
    <Navbar title="test"/>
    <div className='container mt-4'>
    <FromText  head="Some Fun With React"/>
    </div>
    </div>
  );
}

export default App;
