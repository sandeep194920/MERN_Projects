import React from 'react'
import styled from 'styled-components'
import { GithubContext, useGlobalContext } from '../context/context'
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'
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

  let languages = repos.reduce((accObj, itemObj) => {
    //^ remember we need to return an object. The way to remember this is, we need to return what we defined as second param. The second param is the accumulator which is accObj

    const { language } = itemObj

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
      accObj[language] = { label: language, value: 1 }
    } else {
      accObj[language] = { label: language, value: accObj[language].value + 1 }
    }

    // Now the accObj will look this this

    /*
    {
      "JavaScript": {
          "label": "JavaScript",
          "value": 45
      },
      "CSS": {
          "label": "CSS",
          "value": 38
      },
      "HTML": {
          "label": "HTML",
          "value": 14
      }
    }
  */
    return accObj
  }, {})

  console.log(languages)

  //* Alternative Solution using forEach
  /*
  let langs = {}
  repos.forEach((itemObj) => {
    const { language } = itemObj
    if (!language) return
    if (!langs[language]) {
      langs[language] = { label: language, value: 1 }
    } else {
      langs[language] = { label: language, value: langs[language].value + 1 }
    }
  })
  console.log(langs)
*/

  // ^ Now we have an object of object (same as hardcoded chartData below), let's sort the values of object languages and find the top 5 highest values. To to this, first we will have to get the values alone from languages

  languages = Object.values(languages)
  console.log('Values of languages', languages)
  /*
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

  //^ Once we got this, we could now sort the values like this

  languages = languages.sort((a, b) => b.value - a.value)
  console.log('Sorted languages are', languages)

  languages = languages.slice(0, 5) // we could now pass this into PieChart rather than passing hardcoded chartData

  /*
  The above two steps could be combined into one like this
  languages = languages.sort((a, b) => b.value - a.value).slice(0,5)
  */

  // -------------------------
  /*
  HARDCODED DATA
  const chartData = [
    {
      label: 'HTML',
      value: '13',
    },
    {
      label: 'CSS',
      value: '23',
    },
    {
      label: 'Javascript',
      value: '80',
    },
  ]
  */
  // -------------------------

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData} /> */}
        {/* <Pie3D data={chartData} /> */}
        <Pie3D data={languages} />
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
