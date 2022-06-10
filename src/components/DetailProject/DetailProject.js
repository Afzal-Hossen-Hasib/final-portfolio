
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsProject.css'
import data from '../../data.json'

const DetailProject = () => {

    const { id } = useParams();

    const  [projects, setProjects] = useState ('');

    useEffect ( () => {
        const projectData = data.filter ((p) => p.id === id);
        setProjects(projectData[0]);
    }, []);

        
    console.log(projects);

    return (

        
        <div className='all-container '>

<div class="carousel w-full detail-project">
  <div id="item1" class="carousel-item w-full">
    <img src={projects.img} class="w-1/2" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src={projects.imgOne} class="w-1/2" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src={projects.imgTow} class="w-1/2" />
  </div> 
</div> 
<div class="flex justify-center w-1/2 all-button py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
</div>

<div className="all-container content grid">
              <div className="box btn_shadow">

                <div className="category d_flex">
                  <span>{projects.name}</span>
                </div> <br />

                <h5>Overview: {projects.detail}</h5> <br />

                <p>Tech: {projects.tech}</p> <br />

                <a className="mr-5" href={projects.live} target='_blank'>
                <button class="btn btn-sm home-btn">LIVE</button>
                </a>

                <a className="mr-5" href={projects.client} target='_blank'>
                <button class="btn btn-sm home-btn">CLIENT</button>
                </a>

                <a className="mr-5" href={projects.server} target='_blank'>
                <button class="btn btn-sm home-btn">SERVER</button>
                </a>
              </div>

          
        </div>
            
        </div>
    );
};

export default DetailProject;