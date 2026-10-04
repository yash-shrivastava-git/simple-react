import { useState } from "react";
import "./App.css";

const features = [
  {
    icon: "⚡",
    title: "Fast Performance",
    text: "Lightning-fast React experience with a clean modern interface.",
  },
  {
    icon: "🎨",
    title: "Beautiful Design",
    text: "Modern gradients, glass effects and smooth animations.",
  },
  {
    icon: "🚀",
    title: "Easy to Use",
    text: "Simple components that are easy to understand and customize.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* Background animation */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span>R</span>eactX
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">WELCOME TO THE FUTURE</p>

          <h1>
            Build Amazing
            <span> React Websites</span>
          </h1>

          <p className="hero-text">
            Create beautiful, responsive and highly animated websites
            using React.js.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started →</button>
            <button className="secondary-btn">Explore More</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="orbit orbit1"></div>
          <div className="orbit orbit2"></div>

          <div className="react-logo">
            ⚛
          </div>

          <div className="floating-card card1">⚡ Fast</div>
          <div className="floating-card card2">🎨 Creative</div>
          <div className="floating-card card3">🚀 Powerful</div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-title">
          <p>FEATURES</p>
          <h2>Everything You Need</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <button>Learn More →</button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-image">
          <div className="code-box">
            <span>const</span> website = <span>"React"</span>;
            <br />
            <span>return</span> amazingWebsite();
          </div>
        </div>

        <div className="about-content">
          <p className="small-title">ABOUT REACT</p>
          <h2>Build Something Amazing</h2>

          <p>
            React lets you create interactive user interfaces using
            reusable components. Combine React with CSS animations to
            create beautiful web experiences.
          </p>

          <div className="stats">
            <div>
              <strong>100%</strong>
              <span>Responsive</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Possibilities</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Creative</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div>
          <p className="small-title">READY TO START?</p>
          <h2>Let's Build Something Great!</h2>
          <p>
            Start your React journey and create your own animated website.
          </p>
          <button className="primary-btn">Start Building 🚀</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          <span>R</span>eactX
        </div>

        <p>© 2026 ReactX. Built with React.js ❤️</p>

        <div className="socials">
          <span>𝕏</span>
          <span>in</span>
          <span>◎</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
