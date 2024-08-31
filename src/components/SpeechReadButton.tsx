import { useCallback, useEffect, useMemo, useState } from "react"


const SpeechReadButton = ({ tasks }) => {
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)

    const SpeechSynthesis: SpeechSynthesis | null = useMemo(() => {
        if ('speechSynthesis' in window){
            return window.speechSynthesis;
        } else {
            return null;
        }
    }, [])

    useEffect(() => {
        if (SpeechSynthesis && !voice) {
            const voices = SpeechSynthesis.getVoices();
            if (voices.length > 0) {
                const selectedVoice = voices.find(voice => voice.name === "Microsoft Helena - Spanish (Spain)") || voices[0];
                console.log(voices);
                setVoice(selectedVoice);
            } else {
                SpeechSynthesis.onvoiceschanged = () => {
                    const voices = SpeechSynthesis.getVoices();
                    console.log(voices);

                    const selectedVoice = voices.find(voice => voice.name === "Microsoft Helena - Spanish (Spain)") || voices[0];
                    setVoice(selectedVoice);
                };
            }
        }
    
        return () => {
            if (SpeechSynthesis) {
                SpeechSynthesis.onvoiceschanged = null;
            }
        };
    }, [SpeechSynthesis, voice]);


    const startSpeech = useCallback(() => {
        const text = tasks.join(' ');

        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        utterance.voice = voice;

        if(SpeechSynthesis && voice) {
            SpeechSynthesis?.speak(utterance);
        } else {
            console.error("Tried to start speech before voices were loaded");
        }
    }, [SpeechSynthesis, voice, tasks])

    return <> 
     <button style={{ width: "100px", height: "100px"}} onClick={startSpeech}> Hablar </button>     
    </>
}

export default SpeechReadButton;