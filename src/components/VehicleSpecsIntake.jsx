import { motion } from 'framer-motion';
import { useState } from 'react';

export default function VehicleSpecsIntake() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    buildGoal: '',
    budget: '',
    timeline: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Build inquiry submitted! We\'ll contact you within 24 hours.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicle: '',
      buildGoal: '',
      budget: '',
      timeline: '',
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '4px',
    color: '#f5f5f5',
    fontSize: '15px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    color: '#888',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '8px',
  };

  return (
    <section style={{
      background: '#0a0a0a',
      padding: '80px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            color: '#f5f5f5',
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '12px',
            letterSpacing: '-1px',
          }}>START YOUR BUILD</h2>
          <p style={{
            color: '#888',
            textAlign: 'center',
            fontSize: '16px',
            marginBottom: '50px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
          }}>Tell Us What You Need</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: '4px',
            padding: '40px',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '24px',
          }}>
            <div>
              <label style={labelStyle}>Customer Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#eab308'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              />
            </div>
            <div>
              <label style={labelStyle}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = '#eab308'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              />
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#eab308'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>Vehicle Year / Make / Model</label>
            <input
              type="text"
              name="vehicle"
              placeholder="2018 Jeep Wrangler JLU Rubicon"
              value={formData.vehicle}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#eab308'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>Build Goal</label>
            <textarea
              name="buildGoal"
              rows="4"
              placeholder="Describe your vision — wheeling, overland, daily driver, race rig..."
              value={formData.buildGoal}
              onChange={handleChange}
              required
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={(e) => e.target.style.borderColor = '#eab308'}
              onBlur={(e) => e.target.style.borderColor = '#333'}
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}>
            <div>
              <label style={labelStyle}>Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={(e) => e.target.style.borderColor = '#eab308'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              >
                <option value="" style={{ background: '#1a1a1a' }}>Select budget...</option>
                <option value="$5k-$10k" style={{ background: '#1a1a1a' }}>$5,000 - $10,000</option>
                <option value="$10k-$25k" style={{ background: '#1a1a1a' }}>$10,000 - $25,000</option>
                <option value="$25k-$50k" style={{ background: '#1a1a1a' }}>$25,000 - $50,000</option>
                <option value="$50k+" style={{ background: '#1a1a1a' }}>$50,000+</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={(e) => e.target.style.borderColor = '#eab308'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              >
                <option value="" style={{ background: '#1a1a1a' }}>Select timeline...</option>
                <option value="asap" style={{ background: '#1a1a1a' }}>ASAP</option>
                <option value="1-3 months" style={{ background: '#1a1a1a' }}>1-3 Months</option>
                <option value="6 months" style={{ background: '#1a1a1a' }}>6 Months</option>
                <option value="browsing" style={{ background: '#1a1a1a' }}>Just Browsing</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              background: '#eab308',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              cursor: 'pointer',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.background = '#f59e0b'}
            onMouseLeave={(e) => e.target.style.background = '#eab308'}
          >
            Submit Build Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}