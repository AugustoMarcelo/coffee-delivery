import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { CartInfo, Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="" />

      <CartInfo>
        <div>
          <MapPin size={18} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <Link to="/checkout">
          <span>3</span>
          <ShoppingCart size={18} weight="fill" />
        </Link>
      </CartInfo>
    </Container>
  )
}
