const socket = io.connect('https://tunerift.com/');


function load(){
  console.log('%c HEY YOU SHOULDNT BE HERE', 'color: #319bff; font-size: 25px;');
    console.log('%c Unless of course an official TuneRift staff member asked you to go in here.', 'color: #319bff; font-size: 25px;');
}


function login(){
  window.location = '/login';
}

function joinDiscord(){
    window.open("https://discord.gg/ZeCnjXbMRz"); 
}
