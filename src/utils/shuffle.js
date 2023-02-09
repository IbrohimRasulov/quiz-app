const shuffle = (array) => {
  const shuffledArray = [...array]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return shuffledArray
}

export default shuffle