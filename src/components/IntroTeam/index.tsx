import { Link } from 'react-router-dom';
import Github from '../../assets/Github';
import './style.scss';

interface member {
  id: number;
  position?: string;
  name: string;
  url: string;
}

interface IntroTeamProps {
  title: string;
  members: member[];
  url: string;
}

interface MemberProps {
  position: string;
  name: string;
  url: string;
}

const IntroTeam = ({ title, members, url }: IntroTeamProps) => {
  return (
    <section className='IntroTeam'>
      <div className='IntroTeam__top'>
        <b className='IntroTeam__title'>{title}</b>
        <Github url={url} />
      </div>
      <div className='IntroTeam__bottom'>
        {members &&
          members.map((member: any) => {
            return (
              <Member
                key={member.id}
                position={member.position}
                name={member.name}
                url={member.url}
              />
            );
          })}
      </div>
    </section>
  );
};

const Member = ({ position, name, url }: MemberProps) => {
  return (
    <div className='Member'>
      <b className='Member__position'>{position}</b>
      <span className='Member__name'>{name}</span>
      <Link to={`https://github.com/${url}`} style={{ textDecoration: 'none' }} target='_blank'>
        <span className='Member__url'>github.com/{url}</span>
      </Link>
    </div>
  );
};
export default IntroTeam;
