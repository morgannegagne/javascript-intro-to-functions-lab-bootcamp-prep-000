function shout(string){
  return string.toUpperCase()
  console.log(string.toUpperCase())
}

function whisper(string){
  return string.toLowerCase()
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string === "I love you, Grandma"){
    return "I love you, too."
  }
  else if (string === string.toLowerCase()){
    return "I can't hear you!"
  }
  else if (string === string.toUpperCase){
    return "YES INDEED!"
  }
}
