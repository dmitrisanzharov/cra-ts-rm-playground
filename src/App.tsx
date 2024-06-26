import React from 'react';
import './App.css';
// components
import ReusableParent from './components/ReusableParent';
import ChildComp from './components/ChildComp';

function App() {
    return (
        <div>
            <ReusableParent>
                <ChildComp />
            </ReusableParent>
        </div>
    );
}

export default App;
