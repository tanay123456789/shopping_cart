import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toasify/dist/ReactToastify.css"
import './App.css';

const App=()=> {
  const [cartItem,setCartItem]=useState([])
  const addInCart=item=>{

    const isAlreadyAdded=cartItem.findIndex(function(array){
      return array.id===item.id;
    });
      if(isAlreadyAdded!==-1){
        toast("already added in cart",{
          type:"error"
        });
      }

      setCartItem([...cartItem,item])

    

  }
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
