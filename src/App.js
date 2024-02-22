import './App.css';
import Perfil from './components/Perfil';

function App() {
  return (
    <div className="App">
      <div className='content-principal'>
        <h1>Mis cuentas favoritas de youtube son: </h1>
        <Perfil
          nombre='Facundo'
          pais='Argentina'
          img='perfil-facundo'
          cargo='Ingenierio de software'
          empresa='platzi'
          resena='Es un desarrollador español que comparte recursos educativos de youtube'
          linkedin='https://www.linkedin.com/'
          youtube='https://www.youtube.com/'
          instagram='https://www.instagram.com/'
          />
          <Perfil
          nombre='Brais Moure'
          pais='España'
          img='perfil-brais'
          cargo='Ingenierio de software'
          empresa='Fundador de MoureDev'
          resena='Es un desarrollador español que comparte recursos educativos de youtube'
          linkedin='https://www.linkedin.com/in/braismoure'
          youtube='https://www.youtube.com/c/MouredevApps'
          instagram='https://www.instagram.com/mouredev/'
          />
      </div>
    </div>
  );
}

export default App;
