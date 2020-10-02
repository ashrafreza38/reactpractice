import React, {useContext} from 'react';

import PassValue from './PassValue';
import {FirstName, LastName} from './PassValue';


const About = () => {

   const firstname = useContext(FirstName);
    const lastname = useContext(LastName);

    return (
        
        <div className="container">
            <div className="py-4">
                <h1>About Page</h1>
                <div>
                    My name is {firstname}{lastname} 
                </div>

                <p className="lead">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought 
                to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
                <p className="lead text-left">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought 
                to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
                <p className="lead text-left">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought 
                to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p><p className="lead text-left">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought 
                to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
            </div>
        </div>
    );
}

export default About;
