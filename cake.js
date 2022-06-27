const cakes = (recipe, available) => {
  const numberOfCakes = []
  let lowestValue = null
  const entriesRecipe = Object.entries(recipe)
  const entriesAvailable = Object.entries(available)

  entriesRecipe.forEach(e => {
    const numberOfAvailable = entriesAvailable.find(ingredient => ingredient[0] === e[0])

    if (numberOfAvailable === undefined) {
      numberOfCakes.push(0)
    } else {
      numberOfCakes.push((numberOfAvailable[1] / e[1]).toFixed(0))
    }   
  })

  numberOfCakes.forEach( e => {
    if ((lowestValue === null) || (lowestValue > e)) {
      lowestValue = e
    }
  })
  
  console.log(lowestValue)
}

const recipe = {
  "flour": 500,
  "sugar": 200,
  "egg": 1
}

const available = {
  "flour": 1200,
  "sugar": 1200,
  "egg": 5,
  "milk": 200
}

const recipe2 = {
  "apple": 3,
  "flour": 300,
  "sugar": 150,
  "milk": 100,
  "oil": 100
}

const available2 = {
  "sugar": 500,
  "flour": 2000,
  "milk": 2000
}

cakes(recipe, available)
cakes(recipe2, available2)
