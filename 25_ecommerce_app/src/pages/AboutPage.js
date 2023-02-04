import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      {/* The classes here is as follows defined in index.css
    - page - min-height: calc(100vh - (20vh + 10rem)); ->  to give a fixed height
    - section - padding: 5rem 0; -> to give little top and bottom padding
    - section-center -> to center the content on the page
    */}

      {/* wrapper is a two column layout here defined using the Grid in Wrapper */}
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="Nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
            veniam non cumque velit doloribus expedita culpa mollitia maiores
            unde harum sed incidunt laboriosam animi explicabo repellat commodi
            iste quasi quidem. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat nihil obcaecati excepturi hic porro
            molestiae perferendis nemo necessitatibus iusto provident, aliquam
            culpa fuga facere voluptate tempore? Deleniti sequi provident sunt
            repudiandae a pariatur, velit ipsum non laboriosam consequuntur
            voluptates vel! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente illum quasi ipsa dignissimos nisi fugit debitis porro
            earum molestiae eos sequi laudantium repellat corporis expedita
            corrupti inventore eligendi, officiis sit!
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
