import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import { 
  Grid, 
  QuestionCircle,
  Filter,
  ChevronDown,
  PencilSquare
} from 'react-bootstrap-icons';
import userIcon from '../../asset/userIcon.png';
import user1 from '../../asset/user1.jpg';
import user3 from '../../asset/user3.jpg';
import user4 from '../../asset/user4.jpg';
import user2 from '../../asset/user.jpg';

import './index.scss';

const SideBar = () => {
  const users = [
    {
      id:1,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user1
    },
    {
      id:2,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user2
    },
    {
      id:3,
      name: 'Presana',
      msg: 'mesage test',
      userImg: user3
    },
    {
      id:4,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user4
    },
    {
      id:5,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user1
    },
    {
      id:6,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: userIcon
    },
    {
      id:6,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user3
    },
    {
      id:6,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user3
    },
    {
      id:6,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user3
    },
    {
      id:6,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user3
    },
    {
      id:6,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user3
    },
    {
      id:6,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user3
    },
    {
      id:6,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user3
    },
    {
      id:6,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user3
    },
    {
      id:6,
      name: 'Balamurugan',
      msg: 'mesage test',
      userImg: user3
    }
  ];
  const icons = [
    {
      id: 1,
      title: 'Activity',
      icon: 'Bell',
      activeIcon: 'BellFill',
      size: 20,
      path: '/chat'
    },
    {
      id: 2,
      title: 'Chat',
      icon: 'ChatText',
      activeIcon: 'ChatTextFill',
      size: 20,
      path: '/chat'
    },
    {
      id: 3,
      title: 'Calendar',
      icon: 'Calendar3Week',
      activeIcon: 'Calendar3WeekFill',
      size: 20,
      path: '/chat'
    },
    {
      id: 4,
      title: 'Calls',
      icon: 'Telephone',
      activeIcon: 'TelephoneFill',
      size: 20,
      path: '/chat'
    },
    {
      id: 5,
      title: 'Files',
      icon: 'FileEarmark',
      activeIcon: 'FileEarmarkFill',
      size: 20,
      path: '/chat'
    },
    {
      id: 6,
      icon: 'ThreeDots',
      activeIcon: 'ThreeDots',
      size: 20,
    }
  ];
  const [ activeIcon, setActiveIcon ] = useState('')

  const getUserCard = (user) => {
    return (
      <li className='contact'>
        <Col className='d-flex justify-content-center' md={3} sm={3}>
          <img className='user-icon' src={user.userImg} />
        </Col>
        <Col className='ps-1' md={7} sm={9}>
          <div className='name'>{user.name}</div>
          <div className='sub-title'>{user.msg}</div>
        </Col>
        <Col className='d-none d-sm-inline-block' md={2}>
          4/8
        </Col>
      </li>
    )
  }

  const getIcon = (props) => {
    const name = activeIcon === props.title ? (props.activeIcon || 'Telephone') : (props.icon || 'Telephone');
    const Icon =  Icons[name];
    return <Icon size={props.size} />
  }

  const handleNavigate = (icon) => {
    setActiveIcon(icon.title);
  }

  return (
    <div className='side-bar-container'>
      <div className='side-bar d-none d-sm-inline-block'>
        <div  className='icon-containe'>
          {icons.map((sIcon) => {
            return (
              <Button key={sIcon.id} onClick={() => handleNavigate(sIcon)} className='rounded-0 icon-button'>
                {getIcon(sIcon)}
                <div className='icon-text'>{sIcon.title}</div>
              </Button>
            )
          })}
          <div className='line' ></div>
        </div>
        <div className='icon-containe'>
          <Button className='rounded-0 icon-button'>
            <Grid size={20} />
            <div className='icon-text'>Apps</div>
          </Button>
          <Button className='rounded-0 icon-button'>
            <QuestionCircle size={20} />
            <div className='icon-text'>Help</div>
          </Button>
        </div>
      </div>
      <div className='side-panel'>
        <Row className='side-panel-header'>
          <Col xs={9}>
            <span className='title'>Chat</span>
            <ChevronDown className='pointer' />
          </Col>
          <Col className='d-flex justify-content-between' xs={3}>
            <Filter  className='pointer color-gray' size={18} />
            <PencilSquare className='pointer color-gray' size={15} />
          </Col>
        </Row>
        <ul className='contact-container'>
          {users.map((user) => {
            return getUserCard(user)
          })}
        </ul>
      </div>
    </div>
  )
}

export default SideBar;