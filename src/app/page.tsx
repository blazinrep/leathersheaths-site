export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Premium Leather Sheaths &amp; Gear Reviews</h1>
        <p>Deep-dive testing, rugged field evaluations, and premium layout designs for serious edge tools.</p>
      </header>
      <section className="card-grid">
        <div className="card">
          <div>
            <h3>Fixed-Blade Survival Sheaths</h3>
            <p>Heavy-duty leather options built to handle brutal elements and keep your primary edge secure.</p>
          </div>
          <a href="/fixed-blade" className="button card-btn">Read the fixed-blade survival sheath reviews</a>
        </div>
        <div className="card">
          <div>
            <h3>Scout Carry Conversions</h3>
            <p>The best horizontal, low-profile leather options for comfortable, accessible everyday deployment.</p>
          </div>
          <a href="/scout-carry" className="button card-btn">Explore the scout carry conversion guide</a>
        </div>
        <div className="card">
          <div>
            <h3>Maintenance &amp; Wet-Molding</h3>
            <p>Step-by-step guides on oiling, weatherproofing, and custom molding leather to your specific blade.</p>
          </div>
          <a href="/maintenance" className="button card-btn">View the leather maintenance guides</a>
        </div>
      </section>

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
      `}</style>
    </main>
  );
}
