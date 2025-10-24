export default function About() {
return (
<div>
<p><h2>About Me</h2>
<h3>Full Name: Simon Gomez Petro</h3>
I am a 19-year-old Colombian studying software engineering at Centennial College. I work with Python, C#, HTML, CSS, SQL, JavaScript, React, and I’m learning TypeScript with the Encore.dev framework. I’ve built projects like a movie app with authentication and pagination, which helped me gain hands-on experience in frontend-backend development.

Curious, driven, and always learning, I enjoy tackling challenges, improving my skills, and creating projects that make an impact in the world of technology.
<br>
</br>
<br>
</br>
<br>
</br>

<div style={{ textAlign: 'left', margin: '20px 0' }}>
        <img 
          src="../public/profile.png"
          alt="My Image" 
          style={{ width: '500px', height: '600px' }} 
        />
      </div>
{}
      <h2>View My Resume:</h2>
      <iframe 
  src="../public/CV sgp D.pdf"
  width="600" 
  height="800" 
  title="Resume"
  style={{ border: '1px solid #ccc', marginTop: '20px' }}
></iframe>
</p>
</div>
);
}

{/*Using iframes to make the page interactive*/}