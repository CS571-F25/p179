import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'

export default function AIUsage() {
  return (
    <div className="page-container">
      <Header />
      <Container className="py-5" style={{ maxWidth: '900px' }}>
        <PageTitle title="AI Usage" />
        
        <Card title="AI Tools and Assistance Disclosure">
          <p className="card-text mb-4">
            This website was developed with assistance from AI tools.
          </p>
          <p className="card-text mb-4">
            I'm strongly impressed by the development allowed by this AI, to the point where I deem it important to provide this disclosure.
          </p>          

          <h4 className="cv-subsection-title mb-3 mt-4">Development Tools</h4>
          <p className="card-text mb-3">
            The backbones of this website have been built entirely using Cursor AI. This includes:
          </p>
          <ul className="card-text mb-4">
            <li className="mb-2">The implementation of components and backbones fo pages</li>
            <li className="mb-2">The navigation and paging mechanism</li>
            <li className="mb-2">The entire CSS styling</li>
          </ul>

          <h4 className="cv-subsection-title mb-3 mt-4">Personal work</h4>
          <p className="card-text mb-3">
            My own work specifically included:
          </p>
          <ul className="card-text mb-4">
            <li className="mb-2">Actual design and implementation of the Calendar features</li>
            <li className="mb-2">All information within the website</li>
            <li className="mb-2">The majority of the design choices</li>
          </ul>

          <h4 className="cv-subsection-title mb-3 mt-4">Content Generation</h4>
          <p className="card-text mb-4">
            "Placeholder content and initial structure were generated with AI assistance. All content has been reviewed, customized, and verified to reflect accurate information. The final content decisions and personal information were made and provided by the developer."
          </p>
          <p>
            The above is what AI recommended to have as a placeholder. I agree with this statement
          </p>

        </Card>
      </Container>
    </div>
  )
}

