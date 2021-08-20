
import './App.css';
import {googleProvider,
        facebookProvider,
} from './config/authMethod';
import socialMediaAuth from './service/auth';
function App() {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <div className="App">
      
      <header className="App-header">
        <h3>Hostel Allocation</h3>
        <h4>Please Sign-in</h4>
        <div>
      <button className="google" onClick={() => handleOnClick(googleProvider)}>Sign in with Google..</button>
      </div>
      <div>
      <button className="face" onClick={() => handleOnClick(facebookProvider)}>Sign in with facebook</button>
        </div>
      </header>
    </div>
  );
}

export default App;
