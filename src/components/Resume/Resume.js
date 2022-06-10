import React from 'react';

const Resume = () => {
      
    return (
        <div className='container'>
            <div className="heading">
                    <h4>RESUME</h4>
                </div>
            <a href="https://drive.google.com/uc?export=download&id=1OQuZUZxirHnBiMHDCmweVaHp9SiHH-Qb">
              <button class="home-btn mt-10 mb-5" download>
                Download Resume
              </button>
            </a>
            <iframe
          src="https://drive.google.com/file/d/1OQuZUZxirHnBiMHDCmweVaHp9SiHH-Qb/preview"
          width="80%"
          height="700"
        ></iframe>
        </div>
    );
};

export default Resume;