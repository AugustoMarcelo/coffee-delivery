import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeImage from '../../../../assets/coffee-image-background.png'
import BackgroundImage from '../../../../assets/intro-background.svg'
import { Background, Container } from './styles'

export function Ingress() {
  return (
    <>
      <Background src={BackgroundImage} />
      <Container>
        <header>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div>
            <div>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </div>
            <div>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </div>
            <div>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </div>
            <div>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </div>
          </div>
        </header>

        <img src={CoffeeImage} alt="Copo de café com grãos ao redor" />
      </Container>
    </>
  )
}
