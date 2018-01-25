import React from 'react';
// import styled from 'styled-components';
// import { Container, Image } from 'semantic-ui-react';
// import logo from '../../assets/spotim-logo.jpg';
import Chat from '../Chat';
import UserModal from '../UserModal';

const App = () => (
  <div>
    <Chat />
    <UserModal />
  </div>
);

//
// const Logo = styled.div`
//       img{
//         margin-left: auto;
//         margin-right: auto;
//         margin-top: 15px;
//       }
//
// `;
//
//
// const App = () => (
//   <Container className="spotim-header">
//     <div className="spotim-title">
//       Welcome to the Spot.IM Chat app
//     </div>
//     <div>
//       <Logo>
//         <Image size="tiny" src={logo} />
//       </Logo>
//
//     </div>
//   </Container>
// );

export default App;