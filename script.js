const jokes=document.querySelector('#joke');
const  jokeBtn=document.querySelector('#butt');
 const generatejokes = () => {
   
    const setheader={
        headers: {
        Accept:"application/json"
    }
    }

    fetch(' https://icanhazdadjoke.com/',setheader)
    .then((res) =>  res.json())
    .then((data)=>jokes.innerHTML=data.joke)    
    .catch((error)=>
        console.log(error))
    
}

jokeBtn.addEventListener('click',generatejokes);
generatejokes();
