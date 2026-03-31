import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';    

function App() {
    return (
        <main>
            <div className="p-5 md:px-[5%]">
            <Header />
            <Hero /> </div>
           
            <About />
        
            
        </main>
    )
}
export default App;
  