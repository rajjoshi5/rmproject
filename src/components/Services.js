// src/components/Services.js
import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { id: 1, title: 'Textile Agency Services', description: 'Connecting manufacturers with retailers' },
    { id: 2, title: 'Market Intelligence', description: 'Providing insights on market trends' },
    { id: 3, title: 'Quality Assurance', description: 'Ensuring high standards of products' },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;