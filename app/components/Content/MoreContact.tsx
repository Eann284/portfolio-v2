import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Card } from "@/components/ui/card";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"


function MoreContact() {
  const socials = [
    { name: "LinkedIn", logo: "/images/linkedin.png", user: 'Eann Seth Parreno' },
    { name: "GitHub", logo: "/images/github.png", user: 'Eann284' },
  ];

  return (
    <article className="w-100 p-4">
      <h2>Thank you for sending me a message! You can also find me on:</h2>

      <div className="flex flex-col gap-5 mt-1 mx-auto">
        {socials.map((social) => (
          <SocialCard name={social.name} logo={social.logo} username={social.user}/>
        ))}
      </div>
    </article>
  );
}

interface CardProps {
  name: string;
  logo: string;
  username: string;
}

const SocialCard = ({ name, logo, username }: CardProps) => {
  return (
  
    <ItemGroup className="ring-2 ring-green-500 shadow-[0_0_8px_#58cc02,0_0_16px_#58cc02] rounded-lg">
      <Item variant="outline">
      <ItemMedia>
        <Avatar className='size-15'>
          <AvatarImage src={logo} />
        </Avatar>
      </ItemMedia>

      <ItemContent>
        <ItemTitle className="font-bold">{name}</ItemTitle>
        <ItemDescription>{username}</ItemDescription>
      </ItemContent>
    </Item>
    </ItemGroup>



  );
};

export default MoreContact;
