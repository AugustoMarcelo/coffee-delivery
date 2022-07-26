import { useState } from 'react'
import { ProductCard } from '../../components/ProductCard'
import { Ingress } from './components/Ingress'
import { Container } from './styles'

export function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['tradicional'],
      image: './src/assets/coffees/traditional-espresso.png',
      value: 9.9,
    },
    {
      id: 2,
      name: 'Expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['tradicional'],
      image: './src/assets/coffees/traditional-espresso.png',
      value: 9.9,
    },
    {
      id: 3,
      name: 'Expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['tradicional', 'gelado', 'alcóolico'],
      image: './src/assets/coffees/traditional-espresso.png',
      value: 9.9,
    },
    {
      id: 4,
      name: 'Expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['tradicional'],
      image: './src/assets/coffees/traditional-espresso.png',
      value: 9.9,
    },
    {
      id: 5,
      name: 'Expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: ['tradicional'],
      image: './src/assets/coffees/traditional-espresso.png',
      value: 9.9,
    },
  ])
  return (
    <>
      <Ingress />
      <Container>
        <h2>Nossos cafés</h2>
        <div>
          {products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </>
  )
}
