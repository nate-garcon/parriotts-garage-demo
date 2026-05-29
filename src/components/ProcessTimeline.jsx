import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'CONSULT',
    description: 'We discuss your vision, goals, and budget to understand exactly what you need from your build.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'PLAN & QUOTE',
    description: 'Detailed build plan with component selection, timeline, and transparent pricing — no surprises.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Expert technicians execute your build with precision, using quality parts and proven methods.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'DELIVERY',
    description: 'Final inspection, testing, and handover of your completed build — ready to dominate trails.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22,4 12,14.01 9,11.01" />
      </svg>
    ),
  },
];

export default function ProcessTimeline() {
  return (
    <section style={{
      background: '#111',
      padding: '80px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222',
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
          }}>HOW IT WORKS</h2>
          <p style={{
            color: '#888',
            textAlign: 'center',
            fontSize: '16px',
            marginBottom: '60px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
          }}>Our Process</p>
        </motion.div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '0',
          }}>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <div style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '30px 20px',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '4px',
                    position: 'relative',
                  }}>
                    <div style={{
                      color: '#eab308',
                      marginBottom: '16px',
                    }}>
                      {step.icon}
                    </div>
                    <div style={{
                      color: '#eab308',
                      fontSize: '14px',
                      fontWeight: '800',
                      fontFamily: 'monospace',
                      marginBottom: '8px',
                    }}>
                      {step.number}
                    </div>
                    <h3 style={{
                      color: '#f5f5f5',
                      fontSize: '16px',
                      fontWeight: '800',
                      marginBottom: '12px',
                      letterSpacing: '2px',
                    }}>{step.title}</h3>
                    <p style={{
                      color: '#777',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      textAlign: 'center',
                      margin: 0,
                    }}>{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div style={{
                      width: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#444',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12,5 19,12 12,19" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}