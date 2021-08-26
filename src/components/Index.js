
import React from 'react';


export default function Index() {
return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Boston University's Computer Science Ambassadors" />
      <meta name="keywords" content="BU, BUCSA, BU CSA, BU CS Ambassadors, Boston University, Boston University Computer Science" />
      <title>BU CS Ambassadors</title>
      <link rel="stylesheet" href="/src/css/main.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&family=Rubik:wght@700&display=swap" rel="stylesheet" /> 
      <link rel="shortcut icon" sizes="32x32" href="/static/images/reg logo no background small.png" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="icon-bar">
        {/* https://css-tricks.com/simple-social-sharing-links/ */}
        {/* assuming link is https://www.bucsambassadors.bu.edu/ */}
        <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.bucsambassadors.bu.edu%2F" target="_blank" className="facebook"><i className="fa fa-facebook" /></a>
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.bucsambassadors.bu.edu%2F&text=Hey%21+BU+CS+Ambassadors+has+a+new+website%21+Take+a+look%21&hashtags=bostonuniversity,bucsambassadors" target="_blank" className="twitter"><i className="fa fa-twitter" /></a>
        <a href="mailto:?subject=Check out this new website&body=Hey! BU CS Ambassadors has a new website! Take a look at https://www.bucsambassadors.bu.edu." title="Share by Email" className="mail"><i className="fa fa-envelope" /></a>
      </div>
      <header className="header">
        <a href="index.html" className="logo">
          {/* Graphic as link => Alt attribute indicates path [MWAS] */}
          <img src="/static/images/reg logo no background small.png" alt="/views/index.html" />
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="mentor.html" className="link">Mentorship</a></li>
            <li><a href="ambassadors.html" className="link">Ambassadors</a></li>
            <li><a href="clubs.html" className="link">Clubs</a></li><li><a href="resources.html" className="link">Resources</a></li>
            <li><a href="contactus.html" className="link">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            BU CS <span className="red">Ambassadors</span>
          </h1>
          <h4 className="hero-subtitle">
            Find, network, and meet student mentors from all backgrounds in our <b>globally-minded</b> computer science community.
          </h4>
          <button style={{margin: '60px 15px 0px 0px'}} type="button" className="cta-btn" onclick="location.href='mentor.html'">
            Find a Mentor
          </button>
          <button style={{margin: '60px 0px 0px 15px'}} type="button" className="cta-btn" src="about:blank" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSeYKs7xp7U9zf0kRTpkMnjc_58m8kl1NBB5HRLQMSNXOoCj0A/viewform?embedded=true','width=700, height=520, frameborder=0, marginheight=0 marginwidth=0')">
            Sign up to become a mentee!
          </button>
        </div>
      </section>
      <section className="mission">
        <div className="mission-left">
          <h2>Our Mission</h2>
          <h5>As Ambassadors, our mission is to serve as a platform for a more collaborative, inclusive, and unified computer science community. We achieve this by encouraging and fostering a diverse community of students through peer mentorship, community-building events, and support from the computer science student-led organizations. Ultimately, we want to foster and encourage a diverse community, serving as a social network to qualify the BU CS experience as a whole.</h5>
          <button type="button" className="btn-blktored" onclick="location.href='about.html'">
            Learn More
          </button>
        </div>
        <div className="mission-right">
          {/* Adjust accordingly based on content [MWAS] */}
          <img src="/static/images/home_mission.png" alt="students collaborating on CS" />
        </div>
      </section>
      <section className="testimonials">
        <div className="shapes-layer">
          <div className="greentriangle shape rellax" data-rellax-speed={1}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/greentriangle.png" alt="" />
          </div>
          <div className="purpleline shape rellax" data-rellax-speed={-2}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/purpleline.png" alt="" />
          </div>
          <div className="yellowsqrhole shape rellax" data-rellax-speed={-3}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/yellowemptysqr.png" alt="" />
          </div>
          <div className="redsmallhex shape rellax" data-rellax-speed={3}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/redsmallhex.png" alt="" />
          </div>
          <div className="largegreencircle shape rellax" data-rellax-speed={-4}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/largegreencircle.png" alt="" />
          </div>
          <div className="blueline shape rellax" data-rellax-speed={-3}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/blueline.png" alt="" />
          </div>
          <div className="greencirclehollow shape rellax" data-rellax-speed={2}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/greencirclehollow.png" alt="" />
          </div>
          <div className="purplecircle shape rellax" data-rellax-speed={2}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/purplecircle.png" alt="" />
          </div>
          <div className="yellowline shape rellax" data-rellax-speed={-3}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/yellowline.png" alt="" />
          </div>
          <div className="tinygreencircle shape rellax" data-rellax-speed={4}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/tinygreencircle.png" alt="" />
          </div>
          <div className="bluetri shape rellax" data-rellax-speed={-3}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/bluetri.png" alt="" />
          </div>
          <div className="greenline shape rellax" data-rellax-speed={-2}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/greenline.png" alt="" />
          </div>
          <div className="largeredhex shape rellax" data-rellax-speed={5}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/largeredhex.png" alt="" />
          </div>
          <div className="smallyellowsqr shape rellax" data-rellax-speed={-4}>
            {/* Decorative graphic => Blank alt attribute [MWAS] */}
            <img src="/static/images/smallyellowsqr.png" alt="" />
          </div>
        </div>
        <div className="testimonials-content">
          <div className="testimonials-top">
            <h2>Our community</h2>
          </div>
          <div className="slides">
            <div className="slides-card card1">
              <div className="quote-card">
                <div className="quote">
                  <p>"I felt really intimidated coming to BU without a resume, Being a mentee in the CSA Program not only gave me a mentor that could help mme build one, but gave a workshop that helped prepare me for the career fair on CS Day."</p>
                </div>
              </div>
              <div className="card-profile">
                <div className="card-profile-img">
                  {/* Adjust accordingly based on content [MWAS] */}
                  {/* <img src="/static/images/home_testimonial2.png" alt="stock woman"> */}
                </div>
                <div className="card-profile-info">
                  <div className="name">
                    <h4>Sam</h4>
                  </div>
                  <div className="role">
                    <h5>Mentee, Computer Science '23</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="slides-card card2">
              <div className="quote-card">
                <div className="quote">
                  <p>"My CSA Mentor helped me create a better plan for my coursework that I could balance with my extracurriculars."</p>
                </div>
              </div>
              <div className="card-profile">
                <div className="card-profile-img">
                  {/* Adjust accordingly based on content [MWAS] */}
                  {/* <img src="/static/images/home_testimonial1.png" alt="rhett"> */}
                </div>
                <div className="card-profile-info">
                  <div className="name">
                    <h4>Minghua</h4>
                  </div>
                  <div className="role">
                    <h5>Mentor, Computer Science '22</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="slides-card card3">
              <div className="quote-card">
                <div className="quote">
                  <p>"When I was a freshman I remember feeling so behind when we were expected to figure out how to use the command line. The CSA Program has worked really hard to make sure freshmen are able to build these skills before the first assignments are due."</p>
                </div>
              </div>
              <div className="card-profile">
                <div className="card-profile-img">
                  {/* Adjust accordingly based on content [MWAS] */}
                  {/* <img src="/static/images/home_testimonial3.png" alt="stock man"> */}
                </div>
                <div className="card-profile-info">
                  <div className="name">
                    <h4>Jack</h4>
                  </div>
                  <div className="role">
                    <h5>Mentor, Computer Science '22</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="btn-whttogold" onclick="location.href='ambassadors.html'">
            Learn More
          </button>
        </div>
      </section>
      <section className="clubs">
        <div className="clubs-left">
          <h2>Our Fellow CS Clubs</h2>
          <h4>Check out some of our partnered clubs!</h4>
          <button type="button" className="btn-blktored" onclick="location.href='clubs.html'">
            Learn More
          </button>
        </div>
        <div className="clubs-right">
          {/* <div class="club-card">
              <div class="club-card-top">
                  <div class="icon-back">
                      <span class="iconify" data-inline="false" data-icon="mdi:robot-industrial"></span>
                  </div>
                  <h4><b>RAILS</b></h4>
              </div>
              <div class="club-card-bot">
                  <p><b>The Robotics & Ambient Intelligence Labs is the first student robotics research group at BU.</b></p>
              </div>
          </div> */}
          <div className="club-card">
            <div className="club-card-top">
              <div className="icon-back">
                <span className="iconify" data-inline="false" data-icon="mdi:code-tags" />
              </div>
              <h4><b>DSC</b></h4>
            </div>
            <div className="club-card-bot">
              <p><b>The Developer Student Club is dedicated to empowering students to solve local problems through understanding, using, and eflecting on technology with the support of Google and Google Developers.</b></p>
            </div>
          </div>
          <div className="club-card">
            <div className="club-card-top">
              <div className="icon-back">
                <span className="iconify" data-inline="false" data-icon="mdi:lightbulb-outline" />
              </div>
              <h4><b>BU Spark!</b></h4>
            </div>
            <div className="club-card-bot">
              <p><b>BU Spark! Is a technology incubator and experiential learning lab for computer science and engineering projects.</b></p>
            </div>
          </div>
          {/* <div class="club-card">
              <div class="club-card-top">
                  <div class="icon-back">
                      <span class="iconify" data-inline="false" data-icon="mdi:dog"></span>
                  </div>
                  <h4><b>UPE</b></h4>
              </div>
              <div class="club-card-bot">
                  <p><b>Upsilon Pi Epsilon (UPE) is BU’s only computer science honor society dedicated to promoting excellence in technical and computing disciplines.</b></p>
              </div>
          </div> */}
        </div>
      </section>
      <section className="mailing-list">
        <div className="mailing-list-flexbox rellax" data-rellax-speed={-3}>
          <h2>It's dangerous to do CS alone.</h2>
          <br />
          <h4>Join our mailing list!</h4>
          <form name="mailing-list-form" action="/signup" method="POST" onsubmit="return formValidate()">
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
            <p className="full">
              <input type="email" name="email" id="message" placeholder="Email" cols={30} rows={10} />
            </p>
            <p className="full">
              <button type="submit" id="check" className="mailing-list-btn">Sign Up</button>
            </p>
          </form>
        </div>
      </section>
      <footer>
        <div className="social-icons footer-layer">
          <a href="https://www.facebook.com/csa.bu.397" className="icon">
            <span className="iconify" data-inline="false" data-icon="mdi:facebook" />
          </a>
          <a href="https://twitter.com/BUCSAmbassadors" className="icon">
            <span className="iconify" data-inline="false" data-icon="mdi:twitter" />
          </a>
          <a href="https://www.instagram.com/bucsambassadors/" className="icon">
            <span className="iconify" data-inline="false" data-icon="mdi:instagram" />
          </a>
        </div>
        <div className="footer-information footer-layer">
          <div className="info">
            <a href="https://www.bu.edu/cs/" target="_blank">
            </a><p><a href="https://www.bu.edu/cs/" target="_blank"><b>Boston University</b> Arts &amp; Sciences
                <br />
                Department of Computer Science
              </a>
              <br />
              111 Cummington Mall, Boston, MA 02215
              <br />
              phone: (617)353-8919; email: <a href="mailto:cs@bu.edu">cs@bu.edu</a></p>
          </div>
          <div className="info">
            <a href="/index.html">
            </a><p><a href="/index.html"><b>Boston University</b>
                <br />
                Computer Science Ambassadors
              </a>
              <br />
              111 Cummington Mall, Boston, MA 02215
              <br />
              email: <a href="mailto:bucsambassadors@gmail.com">bucsambassadors@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-links footer-layer">
          <div className="footer-indiv-link">
            <a href="https://www.bu.edu/copyright/" target="_blank">
              <p><b>© 2021 Trustees of Boston University</b></p>
            </a>
          </div>
          <div className="footer-indiv-link">
            <a href="https://www.bu.edu/policies/digital-privacy-statement/" target="_blank">
              <p><b>Privacy Statement</b></p>
            </a>
          </div>
          <div className="footer-indiv-link">
            <a href="https://www.bu.edu/disability/" target="_blank">
              <p><b>Accessibility</b></p>
            </a>
          </div>
        </div>
        <div className="footer-bucsa footer-layer">
          <a href="/index.html">
            <p><b>© 2021 Boston University Computer Science Ambassadors</b></p>
          </a>
        </div>
        <div className="footer-bu footer-layer">
          <a href="https://www.bu.edu/" target="_blank">
            {/* Graphic as link => Alt attribute indicates path [MWAS] */}
            <img src="/static/images/BU-logo.png" alt="https://www.bu.edu/" />
          </a>
        </div>
      </footer>
      {/* config file
  
   */}
      {/* iconify plugin */}
      {/* form check */}
    </div>
  );
}