import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

import Footer from '../components/Footer'



const SubTitle = styled.h2`
  background-color: var(--primary);
  color: white;
  dispaly: inline-block;
  padding: 5px;
`;


export default function Home(props) {
  console.log(props);
  return (
    <div>
      <header className="headerContainer">
          <img src={props.avatar_url} />
        <Link href="/sobre">
          <a>
            <h1>DevCesar's Blog</h1>
          </a>
        </Link>
      </header>

      <section className="postsContainer__post">
        <SubTitle>Posts</SubTitle>
        <article className="postsContainer__post">
          <a href="/">
            Youtube React Next.js
          </a>
          <p>
            Código Fonte TV - Dev Coutinho
          </p>
          <Link href="https://youtu.be/Ij-B0Yiizyw?t=539">
            <a target="_blank">
              <h1>#AluraJS #NextJS #React</h1>
            </a>
          </Link>
        </article>

        <article className="postsContainer__post">
          <a href="/">
            Integração React Frontend com Django
          </a>
          <p>
            Juntando o Poder do BackEnd Django-Python com o Poder FrontEnd React-JS (Noob)
          </p>
        </article>
      </section>

      <section className="postsContainer__post">
        <SubTitle>Repositórios Favoritos</SubTitle>
        {
          props.repos.map((project) => {
            return (
              <article 
                key={project.repo}
                className="postsContainer__post">
                <a href="/">
                  {project.repo}
                </a>
                <p>
                  {project.description}
                </p>
                <p>
                  {project.language}
                </p>

              </article>
            )
          })
        }
      </section>
      <Footer />
    </div>
  )
}

// Pegar imagem do github em JSON -> api.github.com/users/cesaraugusto88
export async function getStaticProps() {
  const githubResponse = await fetch('https://api.github.com/users/cesaraugusto88')
    .then(res => res.json())

  const repos = await fetch('https://gh-pinned-repos.now.sh/?username=cesaraugusto88')
    .then(res => res.json())

  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      repos,
    }
  }
}