import styled from 'styled-components'

export const Container = styled.main`
  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 2.125rem;
  }
`
