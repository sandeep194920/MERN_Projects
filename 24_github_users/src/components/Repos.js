import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context'
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'
const Repos = () => {
  const { repos } = useGlobalContext()
  /* repos is an array of objects. Each object will have a property called language set to any language like this 
  
  repos = [
    {...otherProps, language:'javascript'},
    {...otherProps, language:'HTML'},
    {...otherProps, language:'HTML'},
    {...otherProps, language:'CSS'},
    {...otherProps, language:'CSS'},
  ]

  Our motive is to convert into this

  languages = [
    'javascript' : {
      label : 'javascript',
      value : 1
    },
    'HTML' : {
      label : 'HTML',
      value : 2
    },
    'CSS' : {
      label : 'CSS',
      value : 2
    },
  ]

  */

  const languages = repos.reduce((accObj, itemObj) => {
    //^ remember we need to return an object. The way to remember this is, we need to return what we defined as second param. The second param is the accumulator which is accObj

    const { language, stargazers_count } = itemObj

    //& Sometimes the language will be null and in that case we will return same accObj without doing anything. But in anycase, we will have to return accObj
    if (!language) return accObj

    // accObj[language] = language // -> This would return - {JavaScript: 'JavaScript', CSS: 'CSS', HTML: 'HTML'}

    // accObj[language] = { language } // -> This would return the below

    /*
    {
      "JavaScript": {
          "language": "JavaScript"
      },
      "CSS": {
          "language": "CSS"
      },
      "HTML": {
          "language": "HTML"
      }
    */

    // We will tweak this a little now

    if (!accObj[language]) {
      accObj[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      }
    } else {
      accObj[language] = {
        label: language,
        value: accObj[language].value + 1,
        stars: accObj[language].stars + stargazers_count,
      }
    }

    // Now the accObj will look this this

    /*
    {
      "JavaScript": {
          "label": "JavaScript",
          "value": 45,
          "stars": 12
      },
      "CSS": {
          "label": "CSS",
          "value": 38,
          "stars": 14
      },
      "HTML": {
          "label": "HTML",
          "value": 14,
          "stars": 29
      }
    }
  */
    return accObj
  }, {})

  const mostUsedLanguages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)
  /*
  The mostUsedLanguages would be
  [
    {
        "label": "JavaScript",
        "value": 45
    },
    {
        "label": "CSS",
        "value": 38
    },
    {
        "label": "HTML",
        "value": 14
    }
 ]
 */

  // Since the chart is looking for values, we need to put stars back into value prop, so we will do a map
  const mostPopularLanguages = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5)
    .map((item) => {
      return { ...item, value: item.stars }
    })

  // console.log(mostPopularLanguages)

  //* mostPopularLanguages looks like this now. NOTE: Chart will look for value prop so we put stars is in values using map above
  /*
[
    {
        "label": "CSS",
        "value": 412,
        "stars": 412
    },
    {
        "label": "JavaScript",
        "value": 376,
        "stars": 376
    },
    {
        "label": "HTML",
        "value": 34,
        "stars": 34
    }
]
  */

  // -------------------------

  //^ Most poupular Repos and Most forked Repos from mock repos

  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item
      // this could have been total.stars[name] as well as it doesn't matter because we are just interested in value of stars object which is  { label: name, value: stargazers_count }. We are going to get only values and sort it as before

      // BUT IF WE DON'T WANT TO SORT LIKE BEFORE, the reason we use stargazers_count here is because, the keys are stargazers_count and they are arranged in ascending order (refer to "How to sort an object / How to convert object values into array for sorting purpose" question). After getting the values, we could reverse it and get first five values
      total.stars[stargazers_count] = { label: name, value: stargazers_count }
      total.forks[forks] = { label: name, value: forks }
      return total
    },
    {
      stars: {},
      forks: {},
    }
  )

  // THIS IS FIRST WAY TO GET FIRST 5 STARS LIKE BEFORE

  // stars = Object.values(stars)
  //   .sort((a, b) => b.value - a.value)
  //   .slice(0, 5)

  // THIS IS SECOND WAY TO GET FIRST 5 STARS - AS WE NOW HAVE KEYS (numbers) SORTED AUTOMATICALLY, AND THAT IS THE REASON WE ARE USING total.stars[stargazers_count]

  stars = Object.values(stars).slice(-5) // get's last five values
  stars = stars.reverse() // reverses the array

  /*
  above two lines could have been in a single line
  stars = Object.values(stars).slice(-5).reverse()
  */

  forks = Object.values(forks).slice(-5).reverse()

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={mostUsedLanguages} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopularLanguages} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
