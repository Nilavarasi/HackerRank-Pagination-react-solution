import React from 'react';

function Slides({slides}) {
  const [currentSlideTitle, setCurrentSlideTitle] = React.useState(slides[0]['title'])
  const [currentSlideText, setCurrentSlideText] = React.useState(slides[0]['text'])
  const [isPrevButDisabled, disablePrevButton] = React.useState(true)
  const [isNextButDisabled, disableNextButton] = React.useState(false)
  const [isRestartDisabled, disableRestartButton] = React.useState(true)
  const nextClick = ()  => {
    disablePrevButton(false)
    disableRestartButton(false)
    setCurrentSlideTitle(slides[getCurrentIndex()+1]['title'])
    setCurrentSlideText(slides[getCurrentIndex()+1]['text'])
    if(getCurrentIndex()+1 === slides.length-1) {
      disableNextButton(true)
    }
  }
  const prevClick = ()  => {
    if(getCurrentIndex() === 1) {
      disablePrevButton(true)
      disableNextButton(false)
      disableRestartButton(true)
    }
    setCurrentSlideTitle(slides[getCurrentIndex()-1]['title'])
    setCurrentSlideText(slides[getCurrentIndex()-1]['text'])
  }
  const restartClick = ()  => {
    setCurrentSlideTitle(slides[0]['title'])
    setCurrentSlideText(slides[0]['text'])
    disablePrevButton(true)
    disableNextButton(false)
    disableRestartButton(true)
  }
  const getCurrentIndex = () => {
    let final_index = 0
    slides.map((slide, index) => {
      if(slide.title === currentSlideTitle) {
        final_index = index
      }
    })
    return final_index;
  }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" disabled={isRestartDisabled} className="small outlined" onClick={restartClick}>Restart</button>
                <button data-testid="button-prev" disabled={isPrevButDisabled} className="small" onClick={prevClick}>Prev</button>
                <button data-testid="button-next" disabled={isNextButDisabled} className="small" onClick={nextClick}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlideTitle}</h1>
                <p data-testid="text">{currentSlideText}</p>
            </div>
        </div>
    );

}

export default Slides;
