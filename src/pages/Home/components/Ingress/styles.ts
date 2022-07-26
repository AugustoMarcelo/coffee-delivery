import styled from 'styled-components'

export const Background = styled.img`
  position: absolute;
  width: 100vw;
  top: 5rem;
  left: 0;
  right: 0;
  height: 34rem;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.875rem 0 6.75rem 0;

  header {
    display: flex;
    flex-direction: column;
    max-width: 36.75rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      weight: 800;
      font-size: 3rem;
      line-height: 3.9rem;
      color: ${({ theme }) => theme['base-title']};
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-subtitle']};
      line-height: 1.625rem;
    }

    > div {
      margin-top: 4.125rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 1.25rem;

      > div {
        display: flex;
        align-items: center;
        font-size: 1rem;
        color: ${({ theme }) => theme['base-text']};
        font-weight; 

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.75rem;
          height: 32px;
          width: 32px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme['yellow-dark']};

          svg {
            fill: ${({ theme }) => theme.white};
          }
        }
      }

      > div:nth-of-type(2) {
        span {
          background-color: ${({ theme }) => theme['base-text']};
        }
      }

      > div:nth-of-type(3) {
        span {
          background-color: ${({ theme }) => theme.yellow};
        }
      }

      > div:last-of-type {
        span {
          background-color: ${({ theme }) => theme.purple};
        }
      }
    }
  }
`
