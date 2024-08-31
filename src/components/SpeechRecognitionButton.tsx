import { useEffect, useMemo } from "react"


const SpeechRecognitionButton = ({ onAddTask, onRemoveTask }) => {
    const SpeechRecognition: any = useMemo(() => {
        if ('webkitSpeechRecognition' in window) {
            //@ts-ignore
            return new window.webkitSpeechRecognition();
        } else if ('SpeechRecognition' in window){
            return new SpeechRecognition();
        } else {
            return null;
        }
    }, [])
    

    useEffect(() => {
        if (!SpeechRecognition) {
            console.error("Speech Recognition is not supported in this browser.");
            return;
        }

        SpeechRecognition.onstart = (res) => console.log("arrancamos!");
        SpeechRecognition.onend = (res) => console.log("terminamos!");


        SpeechRecognition.onerror = (event: ErrorEvent) => {
            console.error('Error occurred in recognition:', event.error);
          };

        SpeechRecognition.onresult = (event: { results: SpeechRecognitionResultList; }) => {
            const result: string = event.results[0][0].transcript;

            if(result.toLowerCase().startsWith("agregar")){
                onAddTask(result.substring(7).trim());
                console.log("Agregado!");
            }

            console.log(event.results);
            console.log(result);
        }

        return () => {
            SpeechRecognition.abort();
            SpeechRecognition.onstart = null;
            SpeechRecognition.onend = null;
            SpeechRecognition.onerror = null;
            SpeechRecognition.onresult = null;
        }
    },[SpeechRecognition, onAddTask ])

    const startRecognition = () => {
        SpeechRecognition.start();        
    }


    return <> 
     <button style={{ width: "100px", height: "100px"}} onClick={startRecognition}> Record </button>     
    </>
}

export default SpeechRecognitionButton;