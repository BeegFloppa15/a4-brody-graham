import { useState } from "react"

export function StatsSection() {
    const decimalFormat = new Intl.NumberFormat('en-US', { style: 'percent' })

    const [fullname, setFullname] = useState('')
    const [correctGuesses, setCorrectGuesses] = useState(0)
    const [totalGuesses, setTotalGuesses] = useState(0)
    const [acc, setAcc] = useState(0)

    return (
        <div style={{ display: "flex" }}>
            <p id="full-name">{fullname}</p>
            <p id="correct-count">Correct Guesses: {correctGuesses}</p>
            <p id="total-count">Total Guesses: {totalGuesses}</p>
            <p id="accuracy">Accuracy: {decimalFormat.format(acc)}</p>
        </div>
    )
}