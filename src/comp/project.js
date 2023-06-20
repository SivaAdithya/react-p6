import './proj.css';
import img1 from './img1.png'
import dl from './dl2.png';

export function Project()
{
    return(
        <div class="proj">
            <div class="display-4 mx-2">Projects</div>
            <div class="row mx-4 my-5">
            <div class="col-sm-6">
                <div class="card w-75">
                <div class="card-body">
                    <h5 class="card-title">Deep Learning Projects</h5>
                    <img class="card-img-top img_card" src={dl} alt="Card image cap"></img>
                    <p class="card-text my-2">Click on the button present below to have an overivew on the prominent deep learning projects I have worked on along with a brief explanation about each.</p>
                    <a href="./dl" class="btn btn-primary">Press</a>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card w-75">
                <div class="card-body">
                    <h5 class="card-title">MERN Stack Projects</h5>
                    <img class="card-img-top img_card" src={img1} alt="Card image cap"></img>
                    <p class="card-text my-2">Click on the button present below to have an overivew on the prominent projects related to full stack I have worked on along with a brief explanation about each. </p>
                    <a href="./fullstack" class="btn btn-primary">Press</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )

}