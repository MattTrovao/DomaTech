import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";

import { ReactSVG } from "react-svg"
import Arrow from '../../assets/Icons/Arrow.svg'
import defaultCover from '../../assets/defaultCover.jpg'

import { ProjectData } from '../../@types/project';


//Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";
import { ProjectCard, ProjectCompany, ProjectDesc, ProjectName, ProjectCover, ProjectTech, ProjectLink } from './projectStyles';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCqgQPeKJN8fLA1dQXCaiOr1-Yxof7CNv8",
  authDomain: "tb-2023-152a9.firebaseapp.com",
  projectId: "tb-2023-152a9",
});

export const Projects = () => {
  const [loaded, setLoaded] = useState(false)
  const [projects, setProjects] = useState<ProjectData[]>([]);

  //Firestore
  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const collectionRef = collection(db, "Projects");

    const getProjects = async () => {
      const data = await getDocs(collectionRef);
      const projectData = data.docs[0].data().data;
      setProjects(projectData.reverse());
      setLoaded(true)
    };

    getProjects();
  }, [loaded]);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      navigation={true}
      loop={true}
      modules={[Navigation]}
      className="projectsSwiper"
    >
      {loaded ? (
        <>
          {projects.map((project: any, index) => (
            <SwiperSlide key={index}>
              <ProjectCard>
                <ProjectCover style={{ backgroundImage: `url(${project.image || defaultCover})` }} >

                  <ProjectName>
                    {
                      (() => {
                        const name_split = project.name.split(/[ .]/);
                        const name1 = name_split.slice(0, -1).join(" ");
                        const name2 = name_split[name_split.length - 1];

                        return (
                          <h1>
                            {name1} <span className='txtYellow'>{name2}</span>
                          </h1>
                        );
                      })()
                    }

                    {project.company ? (
                      <>
                        <ProjectCompany href={project.companyLink} target="_blank">
                          <span className="txtWhite">Cliente: </span>
                          {project.company}
                        </ProjectCompany>
                      </>
                    ) : (<></>)}
                  </ProjectName>
                </ProjectCover>



                  <ProjectDesc>
                    <>
                      {project.desc.map((item: string, index: number) => (
                        <p key={index}>{item}</p>
                      ))}
                    </>

                    <p className="caption">TAGS:</p>
                    <ProjectTech>
                      {project.tecs.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ProjectTech>

                    <ProjectLink href={project.link}>
                      Acessar Projeto
                      <ReactSVG src={Arrow} />
                    </ProjectLink>
                  </ProjectDesc>
              </ProjectCard>
            </SwiperSlide>
          ))}
        </>
      ) : (
        <>
          <p>Carregando</p>
        </>
      )}
    </Swiper>
  )
}