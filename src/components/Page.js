import DarkVeil from './UI/DarkVeil'
import Particles from './UI/Particles'
import SplitText from './UI/SplitText'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

function PortfolioSection() {
    
    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                background:
                    'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 30%, #16213e 70%, #0f3460 100%)'
            }}
        >

            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh',
                    overflow: 'hidden'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        zIndex: 0,
                    }}
                >
                    <DarkVeil
                        speed={0.8}
                        hueShift={43}
                        noiseIntensity={0}
                        scanlineFrequency={0.5}
                        scanlineIntensity={0}
                        warpAmount={2.5}
                    />
                </div>

                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'radial-gradient(ellipse at center,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.6) 100%)',
                        pointerEvents: 'none',
                        zIndex: 1
                    }}
                />

                <div
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        width: '100%',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '0 20px'
                    }}
                >
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '20px',
                                padding: '40px 25px',
                                marginBottom: '30px'
                            }}
                        >
                            <h1
                                style={{
                                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                    margin: 0,
                                    padding: '0',
                                    color: '#fff',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    lineHeight: '1.2',
                                    display: 'block',
                                }}
                            >
                                <SplitText text="Hola, soy Jorge Reynaga" />
                            </h1>
                            <p
                                style={{
                                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    lineHeight: '1.6',
                                    marginTop: '20px',
                                    maxWidth: '600px',
                                    margin: '20px auto 0',
                                    padding: '0 10px',
                                }}
                            >
                                +4 años de experiencia. FullStack Developer, experto en el frontend y backend, construyendo aplicaciones web 
                                y Chatbots con IA.
                            </p>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                gap: '20px',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}
                        >
                            <button
                                style={{
                                    backgroundColor: '#fff',
                                    color: '#0f0f23',
                                    border: 'none',
                                    borderRadius: '50px',
                                    padding: '15px 35px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(255,255,255,0.2)'
                                }}
                            >
                                LinkedIn
                            </button>
                            <button
                                style={{
                                    backgroundColor: 'transparent',
                                    color: '#fff',
                                    border: '2px solid rgba(255,255,255,0.3)',
                                    borderRadius: '50px',
                                    padding: '15px 35px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section
                style={{
                    position: 'relative',
                    width: '100%',
                    minHeight: 'auto',
                    overflow: 'hidden',
                    background: '#000',
                }}
            >
                <Particles
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0
                    }}
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={1000}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={200}
                    moveParticlesOnHover={false}
                    alphaParticles={true}
                    disableRotation={false}
                />

                <div
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        maxWidth: '1000px',
                        margin: '0 auto',
                        padding: '40px 20px',
                        color: '#fff'
                    }}
                >
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
            </section>

        </div>
    )
}

export default PortfolioSection
