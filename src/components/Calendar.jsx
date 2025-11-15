import Header from './Header'

export default function Calendar (props) {
    return (
        <div className="page-container">
            <Header />
            <main className="page-content" style={{ textAlign: 'center' }}>
                <h1>One day this shall have a Calendar</h1>
                <h2>But not today, for today he the creator has yet to sow</h2>
            </main>
        </div>
    )
}