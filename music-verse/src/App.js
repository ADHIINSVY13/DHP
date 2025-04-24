
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="overlay">
        <header className="header">
          <h1>🎵 Music Verse</h1>
          <p>Discover songs with similar vibes based on lyrics</p>
        </header>

        <div className="search-section">
          <input type="text" placeholder="Search song lyrics..." />
          <button>Search</button>
        </div>

        <div className="features-box">
          <h2>Features</h2>
          <ul>
            <li>🔍 Search songs by lyrics</li>
            <li>🤖 AI-powered similarity using NLP</li>
            <li>🎶 Explore vibe-matching recommendations</li>
            <li>📊 Get detailed song analytics</li>
            <li>💾 Save your favorite matches</li>
          </ul>
        </div>

        <div className="about">
          <h2>About Music Verse</h2>
          <p>
            Music Verse is a platform that leverages Natural Language Processing (NLP)
            to help users discover songs based on lyrics. Simply input a few lyrics, and
            Music Verse will find songs with similar lyrics and vibes. The future of music discovery is here!
          </p>
        </div>

        <div className="people">
          <h2>People Behind Music Verse</h2>
          <div className="profiles">
            <a href="https://github.com/ADHIINSVY13" target="_blank" rel="noopener noreferrer" className="profile">
              
              <p><strong>Divyanshi Sahu</strong><br />Frontend Developer</p>
            </a>

            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="profile">
              
              <p><strong>Nikhil Mehta</strong><br />Backend Developer</p>
            </a>

            <a href="https://github.com/Priyasaini7604" target="_blank" rel="noopener noreferrer" className="profile">
             
              <p><strong>Priya Saini</strong><br />Web Scraper</p>
            </a>
          </div>
        </div>

        <div className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to reach out!</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <footer className="copyright">
          <p>© 2025 Music Verse | Made with 💚 by Team</p>
        </footer>
      </div>
    </div>
  );
}

export default App;