import React from "react";
import "./wordleApp.css"

function App(){
    return <div className="game-container">
     {/* header part */}
      <header>
        <h1>Wordle: Game of Words</h1>
      </header>

      {/* screen for the words to appear */}

      <div className="game-screen-container">
        <div className="game-screen-sub-container game-screen-sub-container-1">
        
            <div className="game-screen-word-box game-screen-word-box-1">w</div>
            <div className="game-screen-word-box game-screen-word-box-2">w</div>
            <div className="game-screen-word-box game-screen-word-box-3">w</div>
            <div className="game-screen-word-box game-screen-word-box-4">w</div>
            <div className="game-screen-word-box game-screen-word-box-5">w</div>
        </div>

        <div className="game-screen-sub-container game-screen-sub-container-2">
            <div className="game-screen-word-box game-screen-word-box-6"></div>
            <div className="game-screen-word-box game-screen-word-box-7"></div>
            <div className="game-screen-word-box game-screen-word-box-8"></div>
            <div className="game-screen-word-box game-screen-word-box-9"></div>
            <div className="game-screen-word-box game-screen-word-box-10"></div>
        </div>

        <div className="game-screen-sub-container game-screen-sub-container-3">
            <div className="game-screen-word-box game-screen-word-box-11"></div>
            <div className="game-screen-word-box game-screen-word-box-12"></div>
            <div className="game-screen-word-box game-screen-word-box-13"></div>
            <div className="game-screen-word-box game-screen-word-box-14"></div>
            <div className="game-screen-word-box game-screen-word-box-15"></div>
            
        </div>

        <div className="game-screen-sub-container game-screen-sub-container-4">
            <div className="game-screen-word-box game-screen-word-box-16"></div>
            <div className="game-screen-word-box game-screen-word-box-17"></div>
            <div className="game-screen-word-box game-screen-word-box-18"></div>
            <div className="game-screen-word-box game-screen-word-box-19"></div>
            <div className="game-screen-word-box game-screen-word-box-20"></div>
        </div>

        <div className="game-screen-sub-container game-screen-sub-container-5">
            <div className="game-screen-word-box game-screen-word-box-21"></div>
            <div className="game-screen-word-box game-screen-word-box-22"></div>
            <div className="game-screen-word-box game-screen-word-box-23"></div>
            <div className="game-screen-word-box game-screen-word-box-24"></div>
            <div className="game-screen-word-box game-screen-word-box-25"></div>
        </div>

      </div>


      {/* buttons or can say keyboard */}

      {/* footer: year of making and some copyright text */}
    </div>
}

export default App;