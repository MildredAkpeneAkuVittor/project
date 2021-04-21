const username = document.getElementById('username')
const saveScoreBtn = document.getElementById(save)
saveHighScore = () => {
   
    highScores.push({ score, username: usernameInput.value });
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
  };
  
  usernameInput.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !usernameInput.value;
  });
  