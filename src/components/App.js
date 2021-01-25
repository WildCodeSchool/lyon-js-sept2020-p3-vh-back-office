import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Admin, Resource } from 'react-admin';
import EmailIcon from '@material-ui/icons/Email';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import EventIcon from '@material-ui/icons/Event';
import StarIcon from '@material-ui/icons/Star';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import { messageList, showMessage } from './contact/Contact';
import { userList, showUser, createUser, userEdit } from './user/user';
import { sponsorsList, createSponsor, showSponsors } from './sponsors/Sponsors';
import { wineList, createWine, showWine, wineEdit } from './Wine/Wine';
import { ordersList, showOrder } from './Orders/Orders';
import { EventList, CreateEvent, ShowEvent, EventEdit } from './event/event';
import {
  carouselList,
  createCarousel,
  showCarousel,
} from './Carousel/Carousel';
import { faqList, createFaq, showFaq, faqEdit } from './faq/Faq';
import { reviewsList, showReview } from './Reviews/Reviews';

const App = () => (
  <>
    <Helmet>
      <title>Hypnose & Vins</title>
    </Helmet>
    <Admin
      dataProvider={dataProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
    >
      <Resource
        options={{ label: 'Messages' }}
        name="contact"
        list={messageList}
        show={showMessage}
        icon={EmailIcon}
      />
      <Resource
        options={{ label: 'Users' }}
        name="users"
        list={userList}
        create={createUser}
        show={showUser}
        edit={userEdit}
        icon={PersonIcon}
      />
      <Resource
        options={{ label: 'Events' }}
        name="events"
        list={EventList}
        create={CreateEvent}
        show={ShowEvent}
        edit={EventEdit}
        icon={EventIcon}
      />
      <Resource
        name="sponsors"
        list={sponsorsList}
        create={createSponsor}
        show={showSponsors}
        icon={BusinessCenterIcon}
      />
      <Resource
        options={{ label: 'Wines' }}
        name="products"
        list={wineList}
        create={createWine}
        show={showWine}
        edit={wineEdit}
        icon={LocalBarIcon}
      />
      <Resource
        options={{ label: 'Faq' }}
        name="faq"
        list={faqList}
        create={createFaq}
        show={showFaq}
        edit={faqEdit}
        icon={LiveHelpIcon}
      />
      <Resource
        options={{ label: 'Reviews' }}
        name="reviews"
        list={reviewsList}
        show={showReview}
        icon={StarIcon}
      />
      <Resource
        options={{ label: 'Carousel' }}
        name="carrousel"
        list={carouselList}
        create={createCarousel}
        show={showCarousel}
        icon={PhotoLibraryIcon}
      />
      <Resource
        options={{ label: 'Commandes' }}
        name="order"
        list={ordersList}
        show={showOrder}
        icon={ShoppingBasketIcon}
      />
    </Admin>
  </>
);

export default App;
