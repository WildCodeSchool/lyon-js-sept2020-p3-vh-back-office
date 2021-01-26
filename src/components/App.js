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
import polyglotI18nProvider from 'ra-i18n-polyglot';
import frenchMessages from 'ra-language-french';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import { messageList, showMessage } from './Contact';
import { userList, showUser, createUser, userEdit } from './Users';
import {
  sponsorsList,
  createSponsor,
  showSponsors,
  editSponsor,
} from './Sponsors';
import { wineList, createWine, showWine, wineEdit } from './Wine/Wine';
import { ordersList, showOrder } from './Orders/Orders';
import { EventList, CreateEvent, ShowEvent, EventEdit } from './Events';
import {
  carouselList,
  createCarousel,
  showCarousel,
} from './Carousel/Carousel';
import { faqList, createFaq, showFaq, faqEdit } from './faq/Faq';
import { reviewsList, showReview } from './Reviews/Reviews';

const i18nProvider = polyglotI18nProvider(() => frenchMessages, 'fr');
const App = () => (
  <>
    <Helmet>
      <title>Hypnose & Vins</title>
    </Helmet>
    <Admin
      dataProvider={dataProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
    >
      <Resource
        options={{ label: 'Messages' }}
        name="contact"
        list={messageList}
        show={showMessage}
        icon={EmailIcon}
      />
      <Resource
        options={{ label: 'Utilisateurs' }}
        name="users"
        list={userList}
        create={createUser}
        show={showUser}
        edit={userEdit}
        icon={PersonIcon}
      />
      <Resource
        options={{ label: 'Evénements' }}
        name="events"
        list={EventList}
        create={CreateEvent}
        show={ShowEvent}
        edit={EventEdit}
        icon={EventIcon}
      />
      <Resource
        options={{ label: 'Partenaires' }}
        name="sponsors"
        list={sponsorsList}
        create={createSponsor}
        show={showSponsors}
        edit={editSponsor}
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
