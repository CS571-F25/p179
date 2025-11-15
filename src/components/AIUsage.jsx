import Header from './Header'

export default function AIUsage() {
  return (
    <div className="page-container">
      <Header />
      <main className="page-content">
        <h1 className="page-title">AI Usage</h1>
        <div className="card" style={{ marginTop: '2rem' }}>
          <h2 className="subsection-title">AI Tools Used</h2>
          <p className="card-content">
            This website was developed with the assistance of AI tools. Below is a disclosure of the AI technologies and tools used in the creation and development of this portfolio.
          </p>
        </div>
        
        <div className="card" style={{ marginTop: '2rem' }}>
          <h2 className="subsection-title">Development Tools</h2>
          <ul style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
            <li>AI-powered code completion and suggestions</li>
            <li>Code generation for React components</li>
            <li>CSS styling assistance</li>
            <li>Code refactoring and optimization suggestions</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: '2rem' }}>
          <h2 className="subsection-title">Content Generation</h2>
          <p className="card-content">
            Placeholder content and initial structure were generated with AI assistance. All content has been reviewed and customized to reflect accurate information.
          </p>
        </div>

        <div className="card" style={{ marginTop: '2rem' }}>
          <h2 className="subsection-title">Design Assistance</h2>
          <p className="card-content">
            AI tools were used to help design the layout, color scheme, and user interface elements. The final design decisions were made by the developer.
          </p>
        </div>
      </main>
    </div>
  )
}

