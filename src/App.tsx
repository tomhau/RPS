import CanvasBlue from './CanvasBlue';
import CanvasRed from './CanvasRed';
import Game from './GameComponent';
import LoginComponent from './LoginComponent';


const App = () => {

    return (
        <div>
          
             <div> <CanvasBlue />   </div>  
          
             <div>   <Game />  <LoginComponent/>  </div>   
             
             <div>  <CanvasRed />  </div> 
            
        </div>
    );
};

export default App;
