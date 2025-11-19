import React from 'react';
import './style.css'; // Import the CSS file we created above

const Programs = () => {
  // Helper style objects for the progress bars to keep JSX clean
  const progressContainerStyle = {
    height: '8px',
    width: '100%',
    backgroundColor: '#e0f0f0',
    borderRadius: '4px',
    margin: '15px 0 8px 0',
    overflow: 'hidden',
  };

  const barColor = '#20b2aa';

  return (
    <div className="programs-page">
      <header>
        <h1>Our Programs</h1>
        <p>
          <i>see the various initiatives of your donations and support</i>
        </p>
      </header>

      <main>
        {/* --- Top Column --- */}
        <div className="topColumn">
          {/* Card 1: Environmental */}
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="25px"
              height="25px"
            >
              <path
                fill="#63E6BE"
                d="M512 32C512 140.1 435.4 230.3 333.6 251.4 325.7 193.3 299.6 141 261.1 100.5 301.2 40 369.9 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"
              />
            </svg>
            <h2>Enviromental Protection</h2>
            <p className="text1">
              Funding for reforestation, ocean, cleanup, and sustainable energy
              projects
            </p>
            <div style={progressContainerStyle}>
              <div
                style={{
                  height: '100%',
                  backgroundColor: barColor,
                  width: '60%',
                }}
              ></div>
            </div>
            <p className="text2">Raised $15,00 of $25,000</p>
          </section>

          {/* Card 2: Education */}
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="25px"
              height="25px"
            >
              <path
                fill="#63E6BE"
                d="M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z"
              />
            </svg>
            <h2>Education & Literacy</h2>
            <p className="text1">
              Support for schools, libraries and education in undeveloped
              communities
            </p>
            <div style={progressContainerStyle}>
              <div
                style={{
                  height: '100%',
                  backgroundColor: barColor,
                  width: '80%',
                }}
              ></div>
            </div>
            <p className="text2">Raised $10,00 of $12,000</p>
          </section>

          {/* Card 3: Public Health */}
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="25px"
              height="25px"
            >
              <path
                fill="#63E6BE"
                d="M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zm80 160c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 40 40 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-40 0 0 40c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-40-40 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l40 0 0-40z"
              />
            </svg>
            <h2>Public Health initiatives</h2>
            <p className="text1">
              Providing medical supplies, mobile clinics and health education.
            </p>
            <div style={progressContainerStyle}>
              <div
                style={{
                  height: '100%',
                  backgroundColor: barColor,
                  width: '60%',
                }}
              ></div>
            </div>
            <button className="learnMore">Learn More</button>
          </section>
        </div>

        {/* --- Bottom Column --- */}
        <div className="bottomColumn">
          {/* Card 4: Food Security */}
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="25px"
              height="25px"
            >
              <path
                fill="#63E6BE"
                d="M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9c0 131.2-108.1 237.1-238.8 237.1-77 0-143.4-49.5-167.5-118.7-35.4 30.8-57.7 76.1-57.7 126.7 0 13.3-10.7 24-24 24S0 469.3 0 456C0 381.1 38.2 315.1 96.1 276.3 131.4 252.7 173.5 240 216 240l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-39.7 0-77.3 8.8-111 24.5 23.3-70 89.2-120.5 167-120.5 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3z"
              />
            </svg>
            <h2>Food Security</h2>
            <p className="text1">Raised $8,000 of of $25,000</p>
            <div style={progressContainerStyle}>
              <div
                style={{
                  height: '100%',
                  backgroundColor: barColor,
                  width: '40%',
                }}
              ></div>
            </div>
            <button className="learnMore">Learn More</button>
          </section>

          {/* Card 5: Community Development */}
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="25px"
              height="25px"
            >
              <path
                fill="#63E6BE"
                d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"
              />
            </svg>
            <h2>Community Development</h2>
            <p className="text1">
              Providing medical supplies, mobile and communication
            </p>
            <div style={progressContainerStyle}>
              <div
                style={{
                  height: '100%',
                  backgroundColor: barColor,
                  width: '40%',
                }}
              ></div>
            </div>
            <p className="text2">Raised $12,00 of $50,000</p>
          </section>

          {/* Card 6: Animal Welfare */}
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="25px"
              height="25px"
            >
              <path
                fill="#63E6BE"
                d="M234.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5 .3-86.2 32.6-96.8 70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3-14.3-70.1 10.2-84.1 59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2-25.8 0-46.7-20.9-46.7-46.7l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3 29.1 51.7 10.2 84.1-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5 46.9 53.9 32.6 96.8-52.1 69.1-84.4 58.5z"
              />
            </svg>
            <h2>Animal Welfare</h2>
            <p className="text1">Raised $3000 of of $10,000</p>
            <div style={progressContainerStyle}>
              <div
                style={{
                  height: '100%',
                  backgroundColor: barColor,
                  width: '20%',
                }}
              ></div>
            </div>
            <button className="learnMore">Learn More</button>
          </section>
        </div>
      </main>

      <footer>
        <button className="footerBtn">Support our Mission</button>
      </footer>
    </div>
  );
};

export default Programs;