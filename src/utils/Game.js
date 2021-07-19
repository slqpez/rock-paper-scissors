export default function isWinner(typeA, typeB){
    if(typeA===typeB) return "draw";
    switch(typeA){
        case "scissors":
            if(typeB ==="paper" || typeB ==="lizard") return true;
        return false
        case "paper":
            if(typeB ==="rock" || typeB ==="spock") return true;
            return false
        case "rock":
            if(typeB ==="lizard" || typeB ==="scissors") return true;
            return false
        case "lizard":
            if(typeB ==="spock" || typeB ==="paper") return true;
            return false
        case "spock":
            if(typeB ==="scissors" || typeB ==="rock") return true;
            return false
    }
}