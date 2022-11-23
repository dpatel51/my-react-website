import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function MyTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vel sit quisquam atque rerum totam, velit repudiandae. Similique repudiandae aut dolores, mollitia totam saepe architecto doloribus libero. Harum iure sint doloribus, placeat voluptate ipsam dolor, adipisci ea quisquam vel facilis. Officia ut porro fugiat eaque velit temporibus voluptas dolor sit optio impedit atque voluptatibus vitae odit laboriosam facere, ex quae. Reprehenderit totam aspernatur sed quod ipsum soluta maxime optio temporibus beatae hic. Iste rerum sit, voluptas officiis corporis distinctio beatae officia ratione dolores doloribus quis consectetur odio, corrupti esse exercitationem delectus natus! Quaerat praesentium veritatis omnis consequuntur eligendi autem eos.
      </Tab>
      <Tab eventKey="profile" title="Profile">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vel sit quisquam atque rerum totam, velit repudiandae. Similique repudiandae aut dolores, mollitia totam saepe architecto doloribus libero. Harum iure sint doloribus, placeat voluptate ipsam dolor, adipisci ea quisquam vel facilis. Officia ut porro fugiat eaque velit temporibus voluptas dolor sit optio impedit atque voluptatibus vitae odit laboriosam facere, ex quae. Reprehenderit totam aspernatur sed quod ipsum soluta maxime optio temporibus beatae hic. Iste rerum sit, voluptas officiis corporis distinctio beatae officia ratione dolores doloribus quis consectetur odio, corrupti esse exercitationem delectus natus! Quaerat praesentium veritatis omnis consequuntur eligendi autem eos.
      </Tab>
      <Tab eventKey="contact" title="Contact" >
   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vel sit quisquam atque rerum totam, velit repudiandae. Similique repudiandae aut dolores, mollitia totam saepe architecto doloribus libero. Harum iure sint doloribus, placeat voluptate ipsam dolor, adipisci ea quisquam vel facilis. Officia ut porro fugiat eaque velit temporibus voluptas dolor sit optio impedit atque voluptatibus vitae odit laboriosam facere, ex quae. Reprehenderit totam aspernatur sed quod ipsum soluta maxime optio temporibus beatae hic. Iste rerum sit, voluptas officiis corporis distinctio beatae officia ratione dolores doloribus quis consectetur odio, corrupti esse exercitationem delectus natus! Quaerat praesentium veritatis omnis consequuntur eligendi autem eos.
      </Tab>
    </Tabs>
  );
}

export default MyTabs;