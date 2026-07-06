import React from 'react'

function Profile() {

  const socials = [
    'LinkedIn',
    'GitHub',
    'Email',
  ]
  return (
    <div className='flex flex-col'>

      <section className='flex flex-col gap-2 mb-5'>
        <img src='https://imgs.search.brave.com/OGggJJHUGhv3DyPnHznCZYN8cqX39y7m8-Otu_1szd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlhLzQ4/L2Q4LzlhNDhkOGI3/MjlkYjIzODYxZDkz/NzgzMmM5NTkyZjQx/LmpwZw'/>
        <h1 className='text-3xl text-center'>Eann Seth Parreno</h1>
        <h3 className='text-xl text-center'>Web Developer</h3>
      </section>

      <section className='flex flex-col'>
        <p className='mb-5'>
          Hi! I am Eann, a Web Development enthusiast with a strong interest in Front-end Development.
        </p>

        <h2>You can find me on:</h2>

        <ul>
          {socials.map((link) => (

          <li key={link}>
            {link}
          </li>
          ))}
        </ul>
      </section>



    </div>
  )
}

export default Profile