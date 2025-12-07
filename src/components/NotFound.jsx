import Header from './Header'
import { Container } from 'react-bootstrap'
import PageTitle from './PageTitle'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'

export default function NotFound() {
  return (
    <div className="page-container">
      <Header />
      <Container className="py-5 text-center">
        <PageTitle 
          title="404 - Page Not Found" 
          subtitle="The page you're looking for does not exist :(" 
        />
        <Button as={Link} to="/" variant="primary" size="lg">
          Go Home
        </Button>
      </Container>
    </div>
  )
}

