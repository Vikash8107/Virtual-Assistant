let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-gb"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon sir")
    }else { 
        speak("Good Evening Sir")
    }
   
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    
 let currentIndex=event.resultIndex
let transcript=event.results[currentIndex][0].transcript
 console.log(event)

content.innerText=transcript

    takeCommand(transcript.toLowerCase())
}
    btn.addEventListener("click", ()=>{
    recognition.start()

    // recognition.start()
    // btn.computedStyleMap.display="none"
    // voice.style.display="block"
    
    
    })
    function takeCommand(message) {
        btn.computedStyleMap.display="flex"
    if(message.includes ("hello") || message.includes ("hey") ||message.includes ("hi") || message.includes ("sonar")) {
    speak("hello sir, what can i help you?")
    }
    else if(message.includes("who are you")) {
    speak("i am Alfa virtual assistant, created by vikash kumar from B.Tech CSE")
    }else if(message.includes("what is your name")) {
        speak("i am Alfa  virtual assistant, created by vikash kumar from B.Tech CSE")
        }
        else if(message.includes("why")) {
            speak("Be able to tell everything related to whatever command has been given inside me")
        }
        else if(message.includes("about")) {
            speak("Our Hod maam is very good she helfs us a lot for success.")
        }
        else if(message.includes ("open youtube")) {
     speak("opening youtube...")
    
    window.open("https://youtube.com/","_blank")
    }else if(message.includes ("open vs code")) {
        speak("opening vs code...")
       
       window.open("https://www.bing.com/ck/a?!&&p=c07b6c47b6dae97cJmltdHM9MTcyNzQ4MTYwMCZpZ3VpZD0zNzRlMjZkMi0yMjViLTYyNzYtMGNhNy0zNGYxMjM4OTYzODkmaW5zaWQ9NTUyNg&ptn=3&ver=2&hsh=3&fclid=374e26d2-225b-6276-0ca7-34f123896389&psq=vs+code&u=a1aHR0cHM6Ly9jb2RlLnZpc3VhbHN0dWRpby5jb20vRG93bmxvYWQ&ntb=1 ","_blank")
       }
       else if(message.includes ("open whatsapp")) {
        speak("opening whatsapp...")
       
       window.open("https://web.whatsapp.com/","_blank")
    }
    else if(message.includes ("open college")) {
        speak("opening grimt...")
       
       window.open("https://grgi.in/","_blank")
    }

    else if(message.includes ("open song")) {
        speak("opening song website...")
       
       window.open("https://www.bing.com/search?q=song+new+2024&cvid=89721ff1bda64623ab8aae991b8bc2f8&gs_lcrp=EgZjaHJvbWUqBggAEAAYQDIGCAAQABhAMgYIARAuGEAyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxAAGEAyBggIEAAYQNIBCDMyMzhqMGoxqAIAsAIA&FORM=ANAB01&PC=DCTS","_blank")
    }
    else if(message.includes ("open Facebook")) {
        speak("opening Facebook...")
       
       window.open("https://www.facebook.com/","_blank")
    }
    }

    