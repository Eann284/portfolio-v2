'use client';
import ProfileCard from '@/components/ProfileCard'
import TiltedCard from '@/components/TiltedCard';

function Profile() {
  const socials = ["LinkedIn", "GitHub", "Email"];
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <section className="flex flex-col gap-2 mb-5">
        <img src="https://imgs.search.brave.com/OGggJJHUGhv3DyPnHznCZYN8cqX39y7m8-Otu_1szd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlhLzQ4/L2Q4LzlhNDhkOGI3/MjlkYjIzODYxZDkz/NzgzMmM5NTkyZjQx/LmpwZw" />
        <h1 className="text-3xl text-center">Eann Seth Parreno</h1>
        <h3 className="text-xl text-center">Web Developer</h3>
      </section>

      <section className="flex flex-col">
        <p className="mb-5">
          Hi! I am Eann, a Web Development enthusiast with a strong interest in
          Front-end Development.
        </p>

        <h2>You can find me on:</h2>

        <ul>
          {socials.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </section> */}

     {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}


  
<ProfileCard
  name="Eann"
  title="Software Developer"
  handle="sethurn_"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/images/avatar.png"
  showUserInfo={false}
  enableTilt={false}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
  behindGlowColor="rgba(88, 204, 2, 0.08)"  // 👈 Green glow (58cc02)
  iconUrl=""
  behindGlowEnabled={true}
  innerGradient="linear-gradient(145deg, rgba(88, 204, 2, 0.1) 0%, rgba(88, 204, 2, 0.03) 100%)"
/>
  

    </div>
  );
}

export default Profile;
