import React, { useState } from 'react'
import questions from "./data"
import SingleQuestion from "./Question"

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(undefined)

    return (
        <main>
            <div className="container">
                <h3>questions and answers about login</h3>
                <section className="info">
                    {
                        questions.map(ques => {
                            return <SingleQuestion
                                key={ques.id}
                                {...ques}
                                setCurrentQuestion={setCurrentQuestion}
                                showInfo={currentQuestion === ques.id} />
                        })
                    }
                </section>
            </div>
        </main>
    )
}

export default App
