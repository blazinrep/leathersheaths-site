export default function MetalDetectingRig() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Lesche Digger & Garrett Pinpointer Combo Sheath</h1>
        <p>Specialized leather rig for serious detectorists. Clean carry, built to last.</p>
      </header>

      <div className="video-placeholder large">
        [PRODUCT VIDEO - Combo Rig Overview & Field Demo]
      </div>

      <section className="product-highlight">
        <h3>The Problem: Clunky Gear, Slow Recovery</h3>
        <p>Metal detecting requires quick, efficient gear access. Most detectorists struggle with:</p>
        <ul className="feature-list">
          <li>Diggers and pinpointers rattling around in separate pouches</li>
          <li>Constant digging through bags to find tools</li>
          <li>Awkward belt setups that shift during active hunting</li>
          <li>Lost recovery time when targets are scarce</li>
        </ul>
      </section>

      <section className="card-grid">
        <div className="card">
          <div>
            <h3>Lesche Digger Integration</h3>
            <p>Custom-molded leather sheath designed specifically for the Lesche digging tool. Heavy-duty 8/9 oz vegetable-tanned leather with reinforced stitching at stress points.</p>
            <div className="video-placeholder">
              [VIDEO - Lesche Digger Fit & Function]
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <h3>Garrett Pinpointer Mount</h3>
            <p>Secure snap-loop retention system for your Garrett pinpointer. Quick-release design for one-handed deployment when you've got a target in the hole.</p>
            <div className="video-placeholder">
              [VIDEO - Pinpointer Quick Release Demo]
            </div>
          </div>
        </div>
      </section>

      <section className="product-highlight">
        <h3>Why This Combo Rig Works</h3>
        <p>After 100+ hours of field testing across parks, beaches, and relic sites, this design solves the core detectorist pain points:</p>
        <ul className="feature-list">
          <li><strong>Unified Carry:</strong> Both tools on one belt position — no more shifting gear</li>
          <li><strong>Silent Operation:</strong> Leather dampens tool clatter, preserving stealth</li>
          <li><strong>Mud-Ready:</strong> Veg-tan leather handles wet conditions and cleans up easily</li>
          <li><strong>Belt Stability:</strong> Wide, reinforced backing prevents rotation during active use</li>
          <li><strong>Quick Access:</strong> Both tools deploy in under 2 seconds when you need them</li>
        </ul>
      </section>

      <div className="video-placeholder large">
        [VIDEO - Field Testing: Beach, Park, and Woodland Conditions]
      </div>

      <section className="card-grid">
        <div className="card">
          <div>
            <h3>Build Your Own Rig</h3>
            <p>Complete materials list and step-by-step tutorial for crafting this combo sheath. Includes printable pattern, leather sourcing guide, and hardware recommendations.</p>
            <a href="#" className="button card-btn">Get the Free Pattern & Tutorial</a>
          </div>
        </div>
        <div className="card">
          <div>
            <h3>Buy Recommended Tools</h3>
            <p>Curated list of the exact Lesche digger and Garrett pinpointer models used in testing, plus leather tools and supplies for building your own rig.</p>
            <a href="#" className="button card-btn">View Tool Recommendations</a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Upgrade Your Detecting Setup?</h2>
        <p>Join 2,000+ detectorists who've streamlined their gear with this combo rig design.</p>
        <a href="#" className="cta-button">Download the Free Pattern</a>
      </section>

      <section className="product-highlight">
        <h3>Technical Specifications</h3>
        <ul className="feature-list">
          <li><strong>Leather:</strong> 8-9 oz vegetable-tanned chestnut</li>
          <li><strong>Stitching:</strong> 532 bonded nylon thread, double-stitched stress points</li>
          <li><strong>Hardware:</strong> Solid brass snaps and copper rivets</li>
          <li><strong>Belt Width:</strong> Fits 1.5" to 2" belts</li>
          <li><strong>Finish:</strong> Fiebing's Acrylic Resolene for weather resistance</li>
          <li><strong>Weight:</strong> 6.2 oz (empty)</li>
        </ul>
      </section>

      <div className="video-placeholder large">
        [VIDEO - Complete Build Process: From Pattern to Finished Rig]
      </div>

      <footer className="container" style={{ textAlign: 'center', marginTop: '40px', padding: '20px 0', borderTop: '1px solid #e3dac9', fontSize: '0.85rem', color: '#7a7266' }}>
        &copy; 2026 Leathersheaths.net. All rights reserved.
      </footer>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero {
          background: #f4eee1;
          padding: 45px 20px;
          margin-bottom: 35px;
          text-align: center;
          border-left: 6px solid #5c3a21;
          border-top: 1px solid #e3dac9;
          border-right: 1px solid #e3dac9;
          border-bottom: 1px solid #e3dac9;
          border-radius: 0;
        }

        .hero h1 {
          color: #5c3a21;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
        }

        .hero p {
          color: #5a5045;
          font-style: italic;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .card {
          background: #ffffff;
          border: 1px solid #e3dac9;
          border-left: 4px solid #5c3a21;
          border-radius: 6px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 3px 5px rgba(0,0,0,0.02);
        }

        .card h3 {
          color: #5c3a21;
        }

        .card-btn {
          background-color: #5c3a21;
          border: none;
          width: 100%;
          text-align: center;
          color: #ffffff;
          font-weight: 600;
          border-radius: 4px;
          transition: background 0.2s ease;
          padding: 12px;
          display: inline-block;
          text-decoration: none;
        }

        .card-btn:hover {
          background-color: #422817;
        }

        .video-placeholder {
          background: #e8e0d0;
          border: 2px dashed #5c3a21;
          border-radius: 8px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5c3a21;
          font-weight: 600;
          text-align: center;
          padding: 20px;
          margin: 20px 0;
        }

        .video-placeholder.large {
          height: 400px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .feature-list li {
          padding: 8px 0;
          border-bottom: 1px solid #e3dac9;
          color: #3d352d;
        }

        .feature-list li:before {
          content: "✓ ";
          color: #5c3a21;
          font-weight: bold;
          margin-right: 8px;
        }

        .product-highlight {
          background: #ffffff;
          border: 1px solid #e3dac9;
          border-left: 4px solid #ad8350;
          border-radius: 6px;
          padding: 25px;
          margin: 30px 0;
        }

        .product-highlight h3 {
          color: #5c3a21;
          margin-bottom: 15px;
        }

        .cta-section {
          background: #5c3a21;
          color: #ffffff;
          padding: 40px 20px;
          text-align: center;
          border-radius: 6px;
          margin: 40px 0;
        }

        .cta-section h2 {
          color: #ffffff;
          margin-bottom: 15px;
        }

        .cta-section p {
          color: #f4eee1;
          margin-bottom: 25px;
        }

        .cta-button {
          background: #ffffff;
          color: #5c3a21;
          padding: 15px 40px;
          font-weight: 700;
          border-radius: 4px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          background: #f4eee1;
        }
      `}</style>
    </main>
  );
}
