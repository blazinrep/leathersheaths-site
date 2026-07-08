import knivesData from '@/data/knives.json';

export async function generateStaticParams() {
  return knivesData.map((knife) => ({
    slug: knife.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const knife = knivesData.find((k) => k.id === params.slug);
  
  if (!knife) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${knife.brand} ${knife.modelName} - Custom Leather Sheath Guide | Leathersheaths.net`,
    description: `Expert leather sheath recommendations for the ${knife.brand} ${knife.modelName}. Solve the factory sheath flaw with our custom leather solutions.`,
  };
}

export default function SheathPage({ params }: { params: { slug: string } }) {
  const knife = knivesData.find((k) => k.id === params.slug);

  if (!knife) {
    return (
      <main className="container">
        <header className="hero">
          <h1>Product Not Found</h1>
          <p>The sheath guide you're looking for doesn't exist.</p>
        </header>
        <a href="/" className="card-btn">Return to Home</a>
      </main>
    );
  }

  return (
    <main className="container">
      <nav className="breadcrumb">
        <a href="/">Home</a> &rsaquo; <span>{knife.brand} {knife.modelName}</span>
      </nav>

      <header className="hero">
        <span className="segment-badge">{knife.segment}</span>
        <h1>{knife.brand} {knife.modelName}</h1>
        <p>Custom leather sheath solutions for serious field use.</p>
      </header>

      <section className="problem-section">
        <h2>The Factory Sheath Flaw</h2>
        <div className="problem-box">
          <p className="problem-text">{knife.factorySheathFlaw}</p>
        </div>
      </section>

      <section className="solution-section">
        <h2>Our Leather Solution</h2>
        <div className="solution-grid">
          <div className="solution-card">
            <h3>Ideal Leather Weight</h3>
            <p className="solution-value">{knife.idealLeatherWeight}</p>
          </div>
          <div className="solution-card">
            <h3>Optimal Carry Style</h3>
            <p className="solution-value">{knife.optimalCarryStyle}</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Upgrade Your Carry?</h2>
        <p>Get the exact leather specifications and build patterns for your {knife.brand} {knife.modelName}.</p>
        <a href="#" className="cta-button">Download Free Pattern</a>
      </section>

      <section className="specs-section">
        <h2>Technical Specifications</h2>
        <table className="specs-table">
          <tbody>
            <tr>
              <th scope="row">Brand</th>
              <td>{knife.brand}</td>
            </tr>
            <tr>
              <th scope="row">Model</th>
              <td>{knife.modelName}</td>
            </tr>
            <tr>
              <th scope="row">Segment</th>
              <td>{knife.segment}</td>
            </tr>
            <tr>
              <th scope="row">Recommended Leather</th>
              <td>{knife.idealLeatherWeight}</td>
            </tr>
            <tr>
              <th scope="row">Best Carry Style</th>
              <td>{knife.optimalCarryStyle}</td>
            </tr>
          </tbody>
        </table>
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

        .breadcrumb {
          fontSize: 0.9rem;
          marginBottom: 20px;
        }

        .breadcrumb a {
          color: #5c3a21;
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
          position: relative;
        }

        .hero h1 {
          color: #5c3a21;
          fontWeight: 800;
          letterSpacing: -0.5px;
          marginBottom: 12px;
          marginTop: 15px;
        }

        .hero p {
          color: #5a5045;
          fontStyle: italic;
        }

        .segment-badge {
          display: inline-block;
          background: #5c3a21;
          color: #ffffff;
          padding: 6px 16px;
          borderRadius: 20px;
          fontSize: 0.75rem;
          fontWeight: 600;
          textTransform: uppercase;
          letterSpacing: 0.05em;
          marginBottom: 15px;
        }

        .problem-section {
          marginBottom: 40px;
        }

        .problem-section h2 {
          color: #5c3a21;
          fontSize: 1.75rem;
          fontWeight: 700;
          marginBottom: 20px;
        }

        .problem-box {
          background: #fff5f5;
          border: 2px solid #feb2b2;
          borderLeft: 6px solid #e53e3e;
          borderRadius: 8px;
          padding: 30px;
          marginBottom: 20px;
        }

        .problem-text {
          color: #1a1613;
          fontSize: 1.1rem;
          lineHeight: 1.7;
          margin: 0;
        }

        .solution-section {
          marginBottom: 40px;
        }

        .solution-section h2 {
          color: #5c3a21;
          fontSize: 1.75rem;
          fontWeight: 700;
          marginBottom: 20px;
        }

        .solution-grid {
          display: grid;
          gridTemplateColumns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .solution-card {
          background: #ffffff;
          border: 1px solid #e3dac9;
          borderLeft: 4px solid #ad8350;
          borderRadius: 8px;
          padding: 30px;
          boxShadow: 0 3px 5px rgba(0,0,0,0.02);
        }

        .solution-card h3 {
          color: #5c3a21;
          fontSize: 1.25rem;
          fontWeight: 700;
          marginBottom: 12px;
        }

        .solution-value {
          color: #1a1613;
          fontSize: 1.1rem;
          lineHeight: 1.6;
          margin: 0;
        }

        .cta-section {
          background: #5c3a21;
          color: #ffffff;
          padding: 50px 20px;
          textAlign: center;
          borderRadius: 8px;
          margin: 50px 0;
        }

        .cta-section h2 {
          color: #ffffff;
          marginBottom: 15px;
          fontSize: 1.75rem;
        }

        .cta-section p {
          color: #f4eee1;
          marginBottom: 30px;
          fontSize: 1.1rem;
        }

        .cta-button {
          background: #ffffff;
          color: #5c3a21;
          padding: 18px 50px;
          fontWeight: 700;
          borderRadius: 6px;
          textDecoration: none;
          display: inline-block;
          transition: transform 0.2s ease, background 0.2s ease;
          fontSize: 1.1rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          background: #f4eee1;
        }

        .specs-section {
          marginBottom: 40px;
        }

        .specs-section h2 {
          color: #5c3a21;
          fontSize: 1.75rem;
          fontWeight: 700;
          marginBottom: 20px;
        }

        .specs-table {
          background: #ffffff;
          border: 1px solid #e3dac9;
          borderRadius: 8px;
          width: 100%;
          borderCollapse: collapse;
          boxShadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        .specs-table th {
          background: #fdfcfb;
          color: #5c3a21;
          fontWeight: 700;
          textTransform: uppercase;
          fontSize: 0.85rem;
          letterSpacing: 0.5px;
          borderLeft: 3px solid #ad8350;
          padding: 16px;
          textAlign: left;
          width: 35%;
        }

        .specs-table td {
          color: #1a1613;
          padding: 16px;
          borderBottom: 1px solid #e3dac9;
        }

        .card-btn {
          background-color: #5c3a21;
          border: none;
          width: auto;
          text-align: center;
          color: #ffffff;
          fontWeight: 600;
          borderRadius: 4px;
          transition: background 0.2s ease;
          padding: 12px 30px;
          display: inline-block;
          textDecoration: none;
        }

        .card-btn:hover {
          background-color: #422817;
        }
      `}</style>
    </main>
  );
}
