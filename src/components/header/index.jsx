import { Grid3x3GapFill, Search, ThreeDots } from 'react-bootstrap-icons';
import { Col, InputGroup, FormControl, Row } from 'react-bootstrap';
import user from '../../asset/user.jpg';

import './index.scss';

const Header = () => {
  return (
    <Row className="header">
      <Col className='d-flex align-items-center' xs={3}>
        <Grid3x3GapFill color="white" size={20} />
        <div className='text-white ps-5 title'>Microsoft Teams</div>
    </Col>
    <Col xs={6}>
      <InputGroup>
        <InputGroup.Text className='input-bg border-0'><Search /></InputGroup.Text>
        <FormControl className='p-1 border-0 input-bg' id="inlineFormInputGroup" placeholder="Search" />
      </InputGroup>
    </Col>
    <Col className='text-end' xs={3}>
      <ThreeDots color='white' className='me-4'/>
      <img className='user-img' src={user} />
    </Col>
    </Row>
  );
};

export default Header;