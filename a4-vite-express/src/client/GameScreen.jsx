import { useState, useEffect } from 'react'
import './stats'
import { StatsSection } from './stats'

export default function GameScreen() {
    const [currentProblem, setCurrentProblem] = useState('???')

    //TODO: Implement the on load functionality in here. 
    //useEffect()

    async function submit() {

        //correctResult.classList.remove('active')
        //incorrectResult.classList.remove('active')

        const input = document.querySelector('#answer'),
            json = {
                problem: currentProblem,
                answer: input.value
            },
            body = JSON.stringify(json)

        answerProgress.hidden = false
        const response = await fetch('/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body
        })

        input.value = ""

        //Recieve JSON data from the server
        const data = await response.json();
        console.log('text:', data);

        answerProgress.hidden = true
        updateUserInfoDisplay(data.user_data)

        if (data.is_correct === "correct") {
            // Show "Correct" element for 4 seconds
            clearTimeout(transitionTimer)
            correctResult.classList.add('active')

            transitionTimer = setTimeout(function () {
                correctResult.classList.remove('active')
            }, 4000)

            setCurrentProblem(data.problem)
        }
        else {
            // Show "incorrect" element for 4 seconds
            clearTimeout(transitionTimer)
            incorrectResult.classList.add('active')

            transitionTimer = setTimeout(function () {
                incorrectResult.classList.remove('active')
            }, 4000)

            setCurrentProblem(data.problem)
        }
    }

    return (
        <div>
            <main class="surface-bright">
                <article class="padding border responsive">
                    <div class="padding center-align">
                        <h1>Solve The Problem</h1>
                        <form>
                            <p id="problem" class="inverse-surface padding"
                                style={{ 'font-family': 'Times New Roman, Times, serif', 'font-size': '64px' }}>{currentProblem}
                            </p>
                            <div class="field border prefix">
                                <progress id="answer-waiting" class="circle indeterminate " value="50" max="100" hidden></progress>
                                <input id="answer" type="number" aria-label="Answer Here" />
                                <output>Answer Here</output>
                            </div>
                            <button id='submit' onClick={submit}>Submit</button>
                        </form>
                    </div>
                </article>
                <div id="correct-result" class="snackbar primary top">Correct!</div>
                <div id="incorrect-result" class="snackbar error top">Incorrect!</div>
            </main>
            <header class="fill">
                <nav>
                    <a href="changeInfo.html">
                        <button id="username-display">Username: Modify Data</button>
                    </a>
                    <div class="max"></div>
                    <StatsSection />
                    <div class="max"></div>
                    <button data-ui="#logout-dialog">Logout</button>
                </nav>
            </header>
            <dialog id="logout-dialog">
                <h5>Log Out</h5>
                <div>Are you sure you want to log out?
                </div>
                <nav class="right-align no-space">
                    <button class="transparent link" data-ui="#logout-dialog">Cancel</button>
                    <a href="logout">
                        <button class="transparent link">Logout</button>
                    </a>
                </nav>
            </dialog>
        </div>
    )
}