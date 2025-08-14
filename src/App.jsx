import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return <h2>Home</h2>
}
function About() {
  return <h2>About</h2>
}

export default function App() {
  return (
    <Router>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: 24, fontFamily: 'system-ui, Arial' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0 }}>React + GitHub Pages (Actions)</h1>
          <nav style={{ display: 'flex', gap: 12 }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>

        <main style={{ marginTop: 24 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer style={{ marginTop: 48, fontSize: 12, opacity: 0.7 }}>
          Push a <code>main</code> y se publica solo (GitHub Actions).
        </footer>
      </div>
    </Router>
  )
}
