export const isQuestionAnswered = (question, user) => {
    return !(question.optionOne.votes.indexOf(user.id) < 0 &&
        question.optionTwo.votes.indexOf(user.id) < 0)
}

export const isInitialized = (questions,users, authedUser) => {
    return questions && Object.keys(questions).length > 0 &&
    users && Object.keys(users).length > 0 && authedUser
}