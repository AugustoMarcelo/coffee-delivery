import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 0 1.5rem 1.25rem 1.5rem;

  img {
    margin-top: -1.25rem;
  }

  h3 {
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 1.625rem;
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
    line-height: 1.137rem;
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    > span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-text']};

      strong {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 1.5rem;
      }
    }

    > div {
      display: flex;
      align-items: center;

      button {
        border: 0;
        background: transparent;
        height: 2.375rem;
        border-radius: 6px;
      }

      > div {
        background: ${({ theme }) => theme['base-button']};
        margin-right: 0.5rem;
        border-radius: 6px;
        height: 2.375rem;

        span {
          color: ${({ theme }) => theme['base-title']};
          margin: 0 0.25rem;
        }

        > button {
          color: ${({ theme }) => theme.purple};
          margin: 0 0.5rem;
          transition: color 0.1s;

          &:hover {
            color: ${({ theme }) => theme['purple-dark']};
          }
        }
      }

      > button {
        background: ${({ theme }) => theme['purple-dark']};
        padding: 0 0.5rem;
        font-size: 0px;
        transition: background 0.1s;

        &:hover {
          background: ${({ theme }) => theme.purple};
        }

        svg {
          fill: ${({ theme }) => theme.white};
        }
      }
    }
  }
`

export const TagContainer = styled.div`
  display: flex;
  margin: 0.75rem 0 1rem;
`

export const Tag = styled.span`
  background: ${({ theme }) => theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  text-transform: uppercase;
  color: ${({ theme }) => theme['yellow-dark']};
  font-weight: 700;
  font-size: 0.625rem;

  & + & {
    margin-left: 0.25rem;
  }
`
