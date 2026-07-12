
function MoreContact() {


    const socials = [
        {name: 'LinkedIn', logo: ''},
        {name: 'GitHub', logo:''}
    ]


  return (
     <article className='w-100 border'>
        <h2>You can also find me on:</h2>

        <div className='flex flex-row gap-5 mx-auto'>
        {socials.map((social)=>(
            <SocialCard name={social.name} logo={social.logo}/>
        ))}
        </div>




      </article>
  )
}

interface CardProps {
    name: string;
    logo: string;
}

const SocialCard = ({name, logo}: CardProps) => {
    return (
        <div className='p-4 rounded-xl mx-auto border'>
            
            <img src={logo} alt="" />


            <h1>{name}</h1>
        </div>
    )
}

export default MoreContact