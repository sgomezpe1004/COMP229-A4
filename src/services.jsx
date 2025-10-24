export default function Services() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>My Services</h2>
      <p>I offer a variety of services focused on helping clients bring their ideas to life through technology:</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px', alignItems: 'center' }}>
        
        <div style={{ width: '90%', maxWidth: '500px', padding: '15px', backgroundColor: '#2c2c3e', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          <img src="../public/img1.jpg" alt="Web Development" style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
          <h3>Web Development</h3>
          <p>Creating responsive websites using HTML, CSS, JavaScript, and React.</p>
        </div>

        <div style={{ width: '90%', maxWidth: '500px', padding: '15px', backgroundColor: '#2c2c3e', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          <img src="../public/img2.png" alt="Full-Stack Projects" style={{ width: '150px', height: '150px', marginBottom: '10px' }} />
          <h3>Full-Stack Projects</h3>
          <p>Building applications with frontend and backend functionality, including authentication and pagination.</p>
        </div>

        <div style={{ width: '90%', maxWidth: '500px', padding: '15px', backgroundColor: '#2c2c3e', borderRadius: '12px', color: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          <img src="../public/img3.png"alt="Encore.dev Projects" style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
          <h3>Encore.dev Projects</h3>
          <p>Learning and building applications using TypeScript with the Encore.dev framework.</p>
        </div>

      </div>
    </div>
  );
}

{/* Services page showcasing different services with images and descriptions */}
