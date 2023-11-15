import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";

//Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";
import { ProjectCard, ProjectCompany, ProjectDesc, ProjectName, ProjectTech } from './projectStyles';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCqgQPeKJN8fLA1dQXCaiOr1-Yxof7CNv8",
  authDomain: "tb-2023-152a9.firebaseapp.com",
  projectId: "tb-2023-152a9",
});

export const Projects = () => {
  const [loaded, setLoaded] = useState(false)
  const [projects, setProjects] = useState<{ [key: string]: any }[]>([]);

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

  return(
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

                  <img src={project.image} alt={project.name} />

                </ProjectName>

                {project.company ? (
                      <>
                        <ProjectCompany href={project.companyLink} target="_blank">
                          <span className="txtWhite">Cliente: </span>
                          {project.company}
                        </ProjectCompany>
                      </>
                    ) : (<></>)}

<ProjectTech>
                    {project.tecs.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ProjectTech>

                <ProjectDesc>
                  <p>
                    {project.desc}
                  </p>
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