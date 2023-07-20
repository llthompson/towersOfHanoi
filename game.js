let stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};

let stone = null

const updateBoard = (stacks) => {
    Object.keys(stacks).forEach(key => {
        console.log(key, stacks[key]);
        const stack = document.getElementById(key)
        stack.innerHTML = ''
        stacks[key].forEach(element => {
            const stone = document.createElement("div");
            stone.setAttribute("id", element);
            stone.setAttribute("class", "stone");
            stone.setAttribute("data-size", element);
            stack.appendChild(stone)
        });
    });
}

const selectRow = (row) => {
    if (stone === null) {
        pickUpStone(row.id)

    } else {
        dropStone(row.id)
    }
    updateBoard(stacks)
    checkForWin()
}

const pickUpStone = (rowID) => {
    if (stacks[rowID].length > 0) {
        stone = stacks[rowID].pop()
    }
}

const dropStone = (rowID) => {
    if (stacks[rowID].length === 0 || stacks[rowID][stacks[rowID].length - 1] > stone) {
        stacks[rowID].push(stone)
        stone = null
        console.log(stone)
    }
}

const movePiece = (startStack, endStack) => {
    const blockToMove = stacks[startStack].pop()
    stacks[endStack].push(blockToMove)
}

const isLegal = (startStack, endStack) => {
    if (stacks[endStack].length === 0) {
        return true
    }
    const blockToMove = stacks[startStack][-1]
    const topBlock = stacks[endStack][-1]
    return topBlock > blockToMove
}

const checkForWin = () => {
    if (JSON.stringify(stacks.b) === JSON.stringify([4, 3, 2, 1]) || JSON.stringify(stacks.c) === JSON.stringify([4, 3, 2, 1])) {
        alert('You have built the Tower of Hanoi!')
    }
}

const towersOfHanoi = (startStack, endStack) => {
    if (isLegal(startStack, endStack)) {
        movePiece(startStack, endStack)
    }
    checkForWin()
}

// updateBoard(stacks)