import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    name: '2018 JLU Wrangler',
    specs: ['3" lift', '37" tires', 'Front bumper', 'Rear tire carrier', 'Half doors'],
    status: 'Completed',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
  },
  {
    id: '02',
    name: '2005 4Runner',
    specs: ['V8 swap', 'Long travel suspension', 'Full armor kit', 'Rock sliders', 'Bumper-to-bumper cage'],
    status: 'In Progress',
    gradient: 'linear-gradient(135deg, #1f1f1f 0%, #3a3a3a 50%, #1f1f1f 100%)',
  },
  {
    id: '03',
    name: '2020 Gladiator',
    specs: ['EVO coilovers', 'Stealth granny gear', 'Underbody armor', 'Maxtrax mount', 'Snorkel'],
    status: 'Consultation',
    gradient: 'linear-gradient(135deg, #222 0%, #353535 50%, #222 100%)',
  },
  {
    id: '04',
    name: '1997 Tacoma',
    specs: ['SAS 4-link', '40" tires', 'Chromoly housings', 'Air lockers', 'Full cage'],
    status: 'Completed',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
  },
  {
    id: '05',
    name: '2022 Bronco',
    specs: ['4" lift', '35" MT', 'Roush tune', 'Badlands pack', 'Aux switch panel'],
    status: 'In Progress',
    gradient: 'linear-gradient(135deg, #252525 0%, #383838 50%, #252525 100%)',
  },
  {
    id: '06',
    name: '2014 GX460',
    specs: ['2" lift', '33" KO2', 'KDSS delete', 'Roof rack', 'Sliders'],
    status: 'Completed',
    gradient: 'linear-gradient(135deg, #1e1e1e 0%, #303030 50%, #1e1e1e 100%)',
  },
];

const statusColors = {
  'Completed': '#22c55e',
  'In Progress': '#eab308',
  'Consultation': '#3b82f6',
};

export default function ProjectPortfolio() {
  return (
    <section style={{
      background: '#0a0a0a',
      padding: '80px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          }}>PROJECT PORTFOLIO</h2>
          <p style={{
            color: '#888',
            textAlign: 'center',
            fontSize: '16px',
            marginBottom: '50px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
          }}>Recent Builds</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{
                background: '#151515',
                border: '1px solid #2a2a2a',
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <div style={{
                height: '180px',
                background: project.gradient,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  color: '#444',
                  fontSize: '64px',
                  fontWeight: '900',
                  fontFamily: 'monospace',
                }}>{project.id}</div>
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: statusColors[project.status],
                  color: '#000',
                  fontSize: '10px',
                  fontWeight: '700',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  {project.status}
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{
                  color: '#f5f5f5',
                  fontSize: '20px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  letterSpacing: '-0.5px',
                }}>{project.name}</h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                }}>
                  {project.specs.map((spec) => (
                    <li key={spec} style={{
                      color: '#777',
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      <span style={{
                        color: '#eab308',
                        marginRight: '8px',
                      }}>▸</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}