import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-diretion: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`
export const CartInfo = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme['purple-light']};
    margin-right: 0.75rem;
    height: 2.375rem;
    padding: 0 0.5rem;
    border-radius: 6px;
    color: ${({ theme }) => theme['purple-dark']};

    svg {
      fill: ${({ theme }) => theme['purple-dark']};
      margin-right: 0.25rem;
    }
  }

  a {
    font-size: 0px;
    border: 0;
    background: ${({ theme }) => theme['yellow-light']};
    height: 2.375rem;
    width: 2.375rem;
    border-radius: 6px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      position: absolute;
      top: -0.4rem;
      right: -0.6rem;
      height: 1.25rem;
      width: 1.25rem;
      background: ${({ theme }) => theme['yellow-dark']};
      border-radius: 50%;
      color: ${({ theme }) => theme.white};
      font-weight: 700;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      fill: ${({ theme }) => theme['yellow-dark']};
    }
  }
`
