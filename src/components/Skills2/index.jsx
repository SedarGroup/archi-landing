import React from 'react'
import skillsProgress from '../../common/skillsProgress';
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress()
  }, [])
    return (
      <div className="skills-sec section-padding pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="skills-box full-width">
                <div className="skill-item">
                  <h6>Architecture</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>Design d'intérieur</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="75%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>Modélisation 3D</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h4 className="playfont line-height-50 mb-20">
                Des solutions de conception personnalisées qui s'adaptent à tout espace.               
                 </h4>
                <p className="mb-10">
                  Beyond more stoic this along goodness hey this this wow ipsum
                  manate far impressive manifest farcrud opened inside.
                </p>
                <p>
                  Fustered impressive manifest crud opened inside owing
                  punitively around forewent and after wasteful telling sprang
                  coldly and spoke less clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills2