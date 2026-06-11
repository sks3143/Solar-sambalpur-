let lang = "hi";

function setLang(l){
lang = l;
alert(l=="hi" ? "Hindi Selected" : "Odia Selected");
}

function speakSolar(){

let hi = `
Namaste. Main Solar Assistant hoon.
3 kilowatt rooftop solar system ghar ki chhat par lagta hai.
Isme 5 se 7 panels hote hain.
Yeh daily 10 se 15 unit bijli bana sakta hai.
Monthly 300 se 450 unit generate hoti hai.
Agar aap interested hain to form fill karein.
`;

let od = `
Namaskar. Mu Solar Assistant.
3 kilowatt solar system ghara chhata upare lagai jae.
Ethi 5 ru 7 panel lage.
Dina 10 ru 15 unit bijuli utpadan kare.
Mahina 300 ru 450 unit mile.
Form fill karantu.
`;

let speech = new SpeechSynthesisUtterance(lang=="hi"?hi:od);
speech.lang = "hi-IN";
speech.rate = 0.9;
speech.pitch = 1;

window.speechSynthesis.speak(speech);
}
