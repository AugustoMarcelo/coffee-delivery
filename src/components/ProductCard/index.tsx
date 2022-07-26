import { ShoppingCart } from 'phosphor-react'
import { Container, Tag, TagContainer } from './styles'

export interface ProductCardProps {
  data: {
    id: number
    name: string
    description: string
    image: string
    tags: string[]
    value: number
  }
}

export function ProductCard({ data }: ProductCardProps) {
  return (
    <Container>
      <img src={data.image} alt="" />
      <TagContainer>
        {data.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagContainer>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <footer>
        <span>
          R$ <strong>{data.value}</strong>
        </span>
        <div>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </div>
      </footer>
    </Container>
  )
}
