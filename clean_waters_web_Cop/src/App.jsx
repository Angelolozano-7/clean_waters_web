import { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button';


import './App.css'
import NavbarH from './Components/Navbar'
import Video from './Components/Video'
import DividedScreenDer from './Components/DividedScreenDer';
import DividedScreenIzq from './Components/DividedScreenIzq';
import CarouselFacts from './Components/CarouselFacts';
import WrappedQuiz from './Components/WrappedQuiz';
import Arrow_down from './Components/Arrow.jsx'


function App() {
  const [count, setCount] = useState(0)
  const refToAnimation = useRef(null);
  const refToWho = useRef(null);
  const refToEnd = useRef(null);
  const refToKnow = useRef(null);
  

  const mapToRefs = {
    1: refToAnimation,
    2: refToWho,
    3: refToKnow,
    4: refToEnd   
  }

  const scrollToMyDiv = (refId) => {
    const ref = mapToRefs[refId];
    if( ref && ref.current){
      ref.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <>
      <div className='backHome'>
        <NavbarH scrollToMyDiv={scrollToMyDiv}/>
        <h1  className= 'title1'>
          <span className='color-blueDark'>HOW</span>{' '} 
          <span className='color-blueLight'>MICROPLASTICS</span>{' '}
          <span className='color-blueDark'>ARE GOING EVERYWHERE AND WE DON´T KNOW IT</span>
      </h1>
      <Arrow_down></Arrow_down>
      <Button  onClick={ () => scrollToMyDiv(4)} className='button-26'>Let´s play!! </Button>{' '}
       </div>

      <div ref = {refToAnimation} className='backBlueDark2'>
       
        <Video 
        scrollToMyDiv={scrollToMyDiv}
        idDiv = {2}
        src="/images/microfibers.mp4"
        title="Video Local"
        />
      </div>
      
      <div ref = {refToWho}  className='backBlueDark'>
      <DividedScreenDer 
        title="What are microplastics?" 
        content="Extremely small piece of plastic,manufactured as such or resulting from the fragmentation of larger plastics, not soluble in water and very poorly degradable." 
        imageUrl="../images/MicroplasticsSpoon.png"
      />
      </div>
      <div className='mp'>
        <h1>MPS Facts</h1>
        {<CarouselFacts></CarouselFacts>}
      </div>

      <div className='backBlueDark'>
        <Video
        scrollToMyDiv={scrollToMyDiv}
        idDiv = {3}
        src="/images/zoom.mp4"
        title="Video Local"
        />
      </div>
      <div ref = {refToKnow} className='poli'> 
        
        <DividedScreenIzq 
          title="What would it look like?" 
          content="Extremely small piece of plastic, btween 5 milimeters to 100 nanometer, are present in differents life-diary products." 
          extra= ""
        />
      </div>

      <div ref = {refToEnd} className='backWhite' >
      <DividedScreenDer 
        title="Let´s play a game" 
        content="Answer the next questions to see how much you know about Microplastics" 
        imageUrl="../images/Quiz.svg"
      />
      </div>
      <div className='backWhite' >
      <WrappedQuiz/>
      </div>
      <div  className='backEnd'>
      <div className='footer'>
        <img src="../images/Logo_White.png" alt="Descripción" /> 
        <div className='info'>
        <span style={{color:'white'}}>Let´s work </span>{' '} 
        <span className='color-blueLight'>together </span>{' '}
        <span style={{color:'white'}}>for a   </span>{' '}
        <span className='color-blueLight'>better world</span>
        <p style={{color:'white'}}> Small actions, create big changes </p>

        </div>


      </div>

      </div> 



      
    </>
  )
}

export default App
