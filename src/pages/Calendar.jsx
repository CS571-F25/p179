import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'

export default function Calendar (props) {
    return (
        <div className="page-container">
            <Header />
            <Container className="py-5 text-center">
                <PageTitle 
                    title="One day this shall have a Calendar" 
                    subtitle="But not today, for today he the creator has yet to sow" 
                />
            </Container>
        </div>
    )
}