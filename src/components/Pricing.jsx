export default function Pricing() {
  const plansData = [
    {
      title: "Start",
      price: "300€",
      desc: "Idaniko gia mikres topikes epeixhrhs",
      features: [
        "1 monoselido Site (landing page)",
        "Modern & responsive design",
        "Basic SEO optimization",
        "Forma epikoinonias"
      ],
      featured: false
    },
    {
      title: "Bella vita",
      price: "800€",
      desc: "Gia anaptisomenes etairies pout theloun custom liseis",
      features: [
        "Custom E-shop i Dynamic Site",
        "100% Custom kwdika",
        "High Speed Optimization",
        "Mina upostiriji"
      ],
      featured: true 
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <h2 className="section-title">Ta paketa mas</h2>
      <p className="section-subtitle">Epilecte to katalhlo paketo gia thn dikia sas epeichrhsh</p>

      <div className="pricing-container">
        {plansData.map((plan, index) => (
          <div className={`price-card ${plan.featured ? 'featured' : ''}`} key={index}>
            {plan.featured && <div className="badge">Popular🔥</div>}
            <h3>{plan.title}</h3>
            <div className="price">{plan.price}</div>
            <p className="price-desc">{plan.desc}</p>
            <ul>
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex}>
            ✓ {feature}</li>
              ))}
            </ul>
            <a href="#contact" className="btn-price">Epilogi</a>
          </div>
        ))}
      </div>
    </section>
  );
}