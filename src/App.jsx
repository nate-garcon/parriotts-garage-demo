import ProjectPortfolio from './components/ProjectPortfolio';
import ProcessTimeline from './components/ProcessTimeline';
import VehicleSpecsIntake from './components/VehicleSpecsIntake';

export default function App() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #222',
        padding: '0 20px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px',
        }}>
          <div style={{
            fontSize: '22px',
            fontWeight: '900',
            color: '#f5f5f5',
            letterSpacing: '-1px',
          }}>
            PARRIOTT'S <span style={{ color: '#eab308' }}>GARAGE</span>
          </div>
          <div style={{ display: 'flex', gap: '30px' }}>
            {['Portfolio', 'Process', 'Contact', 'Book Now'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: '#888',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.target.style.color = '#eab308'}
                onMouseLeave={(e) => e.target.style.color = '#888'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)',
        padding: '0 20px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: 'clamp(36px, 8vw, 80px)',
          fontWeight: '900',
          color: '#f5f5f5',
          marginBottom: '20px',
          letterSpacing: '-2px',
          lineHeight: 1,
        }}>
          BUILT FOR THE <span style={{ color: '#eab308' }}>TRAIL</span>
        </h1>
        <p style={{
          color: '#666',
          fontSize: 'clamp(14px, 2vw, 18px)',
          maxWidth: '600px',
          marginBottom: '40px',
          lineHeight: 1.7,
        }}>
          Off-road & performance custom builds in Moab, Utah.
          Expert engine swaps, suspension, armor, and full custom builds.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{
            padding: '14px 32px',
            background: '#eab308',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
          }}>
            Start Your Build
          </button>
          <button style={{
            padding: '14px 32px',
            background: 'transparent',
            color: '#f5f5f5',
            border: '1px solid #333',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
          }}>
            View Our Work
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        background: '#111',
        padding: '80px 20px',
        borderTop: '1px solid #222',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            color: '#f5f5f5',
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '50px',
            letterSpacing: '-1px',
          }}>OUR SERVICES</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {[
              { title: 'CUSTOM BUILDS', desc: 'Full frame-off builds tailored to your wheeling goals.' },
              { title: 'ENGINE SWAPS', desc: 'V8 conversions, LS builds, diesel swaps — done right.' },
              { title: 'SUSPENSION', desc: 'Long travel, coilovers, 4-link, SAS — all terrains.' },
              { title: 'ARMOR & PROTECTION', desc: 'Sliders, bumpers, skids, cages — built to last.' },
              { title: 'TUNE & DYNO', desc: 'Power delivery, suspension tuning, drivetrain setups.' },
              { title: 'MAINTENANCE', desc: 'Steering, brakes, differentials, transmissions.' },
            ].map((service, i) => (
              <div key={i} style={{
                background: '#1a1a1a',
                border: '1px solid #2a2a2a',
                borderRadius: '4px',
                padding: '30px',
              }}>
                <h3 style={{
                  color: '#eab308',
                  fontSize: '14px',
                  fontWeight: '800',
                  marginBottom: '12px',
                  letterSpacing: '2px',
                }}>{service.title}</h3>
                <p style={{
                  color: '#777',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  margin: 0,
                }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: '#0a0a0a',
        padding: '60px 20px',
        borderTop: '1px solid #222',
        borderBottom: '1px solid #222',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '40px',
        }}>
          {[
            { value: '150+', label: 'Builds Completed' },
            { value: '12', label: 'Years Experience' },
            { value: '100%', label: 'Customer Satisfaction' },
            { value: 'Moab, UT', label: 'Based In' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                color: '#eab308',
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '900',
                marginBottom: '8px',
              }}>{stat.value}</div>
              <div style={{
                color: '#666',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Project Portfolio */}
      <ProjectPortfolio />

      {/* NEW: Process Timeline */}
      <ProcessTimeline />

      {/* NEW: Vehicle Specs Intake Form */}
      <VehicleSpecsIntake />

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #111 100%)',
        padding: '80px 20px',
        textAlign: 'center',
      }}>
        <h2 style={{
          color: '#f5f5f5',
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: '800',
          marginBottom: '20px',
          letterSpacing: '-1px',
        }}>READY TO BUILD?</h2>
        <p style={{
          color: '#888',
          fontSize: '16px',
          marginBottom: '40px',
          maxWidth: '500px',
          margin: '0 auto 40px',
        }}>
          Let's talk about your next project. From mild to wild — we build it right.
        </p>
        <button style={{
          padding: '16px 40px',
          background: '#eab308',
          color: '#000',
          border: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: '800',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          cursor: 'pointer',
        }}>
          Get Your Free Quote
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0a0a0a',
        padding: '40px 20px',
        borderTop: '1px solid #222',
        textAlign: 'center',
      }}>
        <div style={{
          color: '#eab308',
          fontSize: '24px',
          fontWeight: '900',
          marginBottom: '16px',
        }}>
          PARRIOTT'S <span style={{ color: '#666' }}>GARAGE</span>
        </div>
        <p style={{
          color: '#444',
          fontSize: '13px',
          marginBottom: '8px',
        }}>Moab, Utah — Off-Road & Performance Custom Shop</p>
        <p style={{ color: '#333', fontSize: '12px' }}>
          © 2026 Parriott's Garage. All rights reserved.
        </p>
      </footer>
    </div>
  );
}