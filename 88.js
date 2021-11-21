var calculateAge = (old, news) => {
    if (old === news) {
        return "You were born this very year!"
    } else if (news > old) {
        return news - old === 1 ? "You are 1 year old." : `You are ${news - old} years old.`
    } else {
        return old - news === 1 ? "You will be born in 1 year." : `You will be born in ${old - news} years.`
    }
}