function MoreContact() {
  const socials = [
    { name: "LinkedIn", logo: "/images/linkedin.png" },
    { name: "GitHub", logo: "/images/github.png" },
  ];

  return (
    <article className="w-100 border p-4">
      <h2>You can also find me on:</h2>

      <div className="flex flex-row gap-5 mx-auto">
        {socials.map((social) => (
          <SocialCard name={social.name} logo={social.logo} />
        ))}
      </div>
    </article>
  );
}

interface CardProps {
  name: string;
  logo: string;
}

const SocialCard = ({ name, logo }: CardProps) => {
  return (
    <div className="p-4 rounded-xl mx-auto border">
      <img src={logo} alt="" className="size-30" />
      <h1 className="text-center mt-5">{name}</h1>
    </div>
  );
};

export default MoreContact;
