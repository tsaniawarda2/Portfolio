import React from "react";

function Backend() {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Backend developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div className="skill">
                <h3 className="skills__name">Node Js</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div className="skill">
                <h3 className="skills__name">PHP</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div className="skill">
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>

            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div className="skill">
                <h3 className="skills__name">Mongo DB</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Backend;
