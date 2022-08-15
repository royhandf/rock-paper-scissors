const options = document.querySelectorAll('.option')
const info = document.querySelector('.info')
const playerPick = document.querySelector('.player-choice')
const comPick = document.querySelector('.computer-choice')
const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')

let playerCount = 1
let computerCount = 1

comBrain = () => {
    const option = ['✊', '🖐️', '✌️']
    const com = option[Math.floor(Math.random() * option.length)]
    return com
}

matchResult = (player, com) => {
    if (player == com) {
        return 'SERI!'
    } else if (player == '✊') {
        return com == '🖐️' ? 'COMPUTER MENANG!' : 'PLAYER MENANG!'
    } else if (player == '✌️') {
        return com == '🖐️' ? 'PLAYER MENANG!' : 'COMPUTER MENANG!'
    } else {
        return com == '✌️' ? 'COMPUTER MENANG!' : 'PLAYER MENANG!'
    }
}

scoreGame = (result) => {
    if (result == 'PLAYER MENANG!') {
        playerScore.textContent = playerCount++
    } else if (result == 'COMPUTER MENANG!') {
        computerScore.textContent = computerCount++
    } else {
        return
    }
}

randomPick = () => {
    const option = ['✊', '🖐️', '✌️']
    const start = new Date().getTime()

    setInterval(() => {
        if (new Date().getTime() - start > 1000) {
            clearInterval()
            return
        }
        comPick.textContent = option[Math.floor(Math.random() * option.length)]
    }, 100);
}

options.forEach((option) => {
    option.addEventListener('click', () => {
        const player = option.textContent
        const com = comBrain()
        const result = matchResult(player, com)

        playerPick.textContent = player
        randomPick()

        setTimeout(() => {
            comPick.textContent = com
            info.textContent = result
            scoreGame(result)
        }, 1000);
    })
})