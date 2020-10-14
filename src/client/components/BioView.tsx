import * as React from 'react';

const BioView: React.FC<IBioViewProps> = (props) => {

    return (
        <>
            <div id="bio" className="row min-vh-100 d-flex justify-content-center align-items-center bg-navBigText">
                <div className="col-md-12">
                    <div className="row text-center">
                        <div className="col-md-4 text-right border border-accent pl-5 pt-5 pb-5 my-auto shadow-lg">
                            <div className="display-4 " >Bio</div>
                        </div>
                        <div className="col-md-8 my-auto">
                            <div className="row">
                                <div className="col-md-12">
                                    <h6 className="text-justify p-3 font-weight-light">I am an avid problem solver. I won’t give up until the problem in front of me is solved. I believe this quality is what makes me an excellent software developer. Not only do I want to find answers, but it’s important to me that I get a full understanding of what I am trying to solve. Along with my dedicated work ethic, I am a hardworking individual who brings passion and insight into everything I do. I have proven experience in leading a team and working with them towards finding the best solutions. I am hungry for building and fine-tuning more applications and learning new technologies along the way.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export interface IBioViewProps { }

export default BioView;