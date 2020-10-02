import React, {createContext} from 'react';
import About from './About';

import Home from './Home';

export const FirstName = React.createContext();
export const LastName = React.createContext();


const PassValue = () => {

return (        
    <div>
        <>
        <FirstName.Provider value={"ashraf "}>                
            <LastName.Provider value={"reza"}>
            <Home/>
            
            </LastName.Provider>
        </FirstName.Provider>
    </>
    </div>
)
}
export default PassValue