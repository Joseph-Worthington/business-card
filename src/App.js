import Profile from './components/Profile';
import About from './components/About';
import Interest from './components/Interests';
import Socials from './components/Socials';
import './assets/style/style.scss';

const App = () => {
  return (
    <div className='app'>
      <Profile />
      <About />
      <Interest />
      <Socials />
    </div>
  );
}

export default App;


