import './App.css';
import Perfil from './components/Perfil';

function App() {
  return (
    <div className="App">
      <div className='content-principal'>
        <h1>Mis cuentas favoritas de youtube son: </h1>
        <Perfil
          nombre='Brais Moure'
          pais='España'
          img='perfil-facundo'
          cargo='Ingenierio de software'
          empresa='Fundador de MoureDev'
          resena='Es un desarrollador español que comparte recursos educativos de youtube'
          />
          <Perfil
          nombre='Brais Moure'
          pais='España'
          img='perfil-brais'
          cargo='Ingenierio de software'
          empresa='Fundador de MoureDev'
          resena='Es un desarrollador español que comparte recursos educativos de youtube'
          />
      </div>
    </div>
  );
}

export default App;
