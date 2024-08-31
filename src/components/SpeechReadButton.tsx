import { useEffect, useMemo } from "react"


const SpeechReadButton = ({ tasks }) => {
    const SpeechSynthesis = useMemo(() => {
        if ('webkitSpeechSynthesis' in window) {
            //@ts-ignore
            return window.webkitSpeechSynthesis;
        } else if ('speechSynthesis' in window){
            return window.speechSynthesis;
        } else {
            return null;
        }
    }, [])


    const startSpeech = () => {
        const text = tasks.join(' ');

        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === 'Google UK English Female');
        SpeechSynthesis.speak(utterance);
    }

    return <> 
     <button style={{ width: "100px", height: "100px"}} onClick={startSpeech}> Hablar </button>     
    </>
}

export default SpeechReadButton;