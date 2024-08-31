/// <reference types="react-scripts" />

declare global {
    interface Window {
      webkitSpeechRecognition?: any;
      webkitSpeechSynthesis?: any;
    }
  }