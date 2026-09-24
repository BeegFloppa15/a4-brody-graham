import { useState } from "react"

/**
 * Expects statInfo JSON with the fields: username, firstname, lastname, correct_guesses, total_guesses
 * @param {} param0 
 * @returns 
 */
export function StatsSection({ fullname, correctGuesses, totalGuesses }) {
    const decimalFormat = new Intl.NumberFormat('en-US', { style: 'percent' })

    return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p id="full-name">{fullname}</p>
            <p id="correct-count">Correct Guesses: {correctGuesses}</p>
            <p id="total-count">Total Guesses: {totalGuesses}</p>
            <p id="accuracy">Accuracy: {decimalFormat.format(correctGuesses / totalGuesses)}</p>
        </div>
    )
}

export function UsernameButton({ username }) {
    return (
        <button>{username}: Modify Profile</button>
    )
}