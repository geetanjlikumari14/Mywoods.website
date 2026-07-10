

export default function AboutDeatil() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqWAT3qqn2hd7OzB8gByewuGzOEMVkvbNL48dDtaoyQ&s=10"
            alt="Team"
          />
        </div>

        <div className="about-content">
          <span className="about-tag">Who We Are</span>

          <h1>Building Digital Experiences That Matter</h1>

          <p>
            We believe that great ideas deserve great digital experiences. Our team specializes in 
            designing and developing innovative websites and web applications that combine creativity,
             functionality, and performance. Every project we create is crafted with attention to detail,
              ensuring a seamless experience across all devices....
          </p>

          <div className="about-stats">
            <div className="stat">
              <h2>150+</h2>
              <p>Projects</p>
            </div>

            <div className="stat">
              <h2>80+</h2>
              <p>Clients</p>
            </div>

            <div className="stat">
              <h2>5+</h2>
              <p> Experience</p>
            </div>
          </div>

          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}