import SymbolTextLogo from '../../assets/SymbolTextLogo';
import IntroTeam from '../../components/IntroTeam';
import './style.scss';

const frontEndMembers = [
  {
    id: 1,
    position: '팀장',
    name: '이지윤',
    url: '1yoouoo',
  },
  {
    id: 2,
    name: '정희섭',
    url: 'eriniss',
  },
  {
    id: 3,
    name: '김다정',
    url: 'danakim530',
  },
  {
    id: 4,
    name: '양동준',
    url: 'dongjoonyang',
  },
];
const frontEndUrl = 'https://github.com/Sassy-Project/front-mbti-chat';
const backEndMembers = [
  {
    id: 1,
    position: 'PM',
    name: '조건희',
    url: 'gunhee93',
  },
  {
    id: 2,
    name: '유호빈',
    url: 'youhobin',
  },
  {
    id: 3,
    name: '정지우',
    url: 'dreamjjw',
  },
];
const backEndUrl = 'https://github.com/Sassy-Project/back-mbti-chat';

const Footer = () => {
  return (
    <nav className='Footer'>
      <div className='Footer__items'>
        <div className='Footer__items--logo'>
          <SymbolTextLogo />
        </div>
        <IntroTeam title='Front-end' members={frontEndMembers} url={frontEndUrl} />
        <IntroTeam title='Back-end' members={backEndMembers} url={backEndUrl} />
      </div>
    </nav>
  );
};

export default Footer;
