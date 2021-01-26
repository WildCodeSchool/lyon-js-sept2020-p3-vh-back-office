import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Admin, Resource } from 'react-admin';
import EmailIcon from '@material-ui/icons/Email';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import RoomIcon from '@material-ui/icons/Room';
import EventIcon from '@material-ui/icons/Event';
import StarIcon from '@material-ui/icons/Star';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import frenchMessages from 'ra-language-french';
import Dashboard from './Dashboard';
import authProvider from '../providers/authProvider';
import dataProvider from '../providers/dataProvider';
import { messageList, showMessage } from './Contact';
import { userList, showUser, createUser, userEdit } from './Users';
import {
  addressList,
  addressShow,
  addressEdit,
  addressCreate,
} from './Address';
import {
  sponsorsList,
  createSponsor,
  showSponsors,
  editSponsor,
} from './Sponsors';
import { wineList, createWine, showWine, wineEdit } from './Wines';
import { ordersList, showOrder } from './Orders';
import { EventList, CreateEvent, ShowEvent, EventEdit } from './Events';
import { carouselList, createCarousel, showCarousel } from './Carousel';
import { faqList, createFaq, showFaq, faqEdit } from './Faq';
import { reviewsList, showReview } from './Reviews';

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
        options={{ label: 'Vins' }}
        name="products"
        list={wineList}
        create={createWine}
        show={showWine}
        edit={wineEdit}
        icon={LocalBarIcon}
      />
      <Resource
        options={{ label: 'FAQ' }}
        name="faq"
        list={faqList}
        create={createFaq}
        show={showFaq}
        edit={faqEdit}
        icon={LiveHelpIcon}
      />
      <Resource
        options={{ label: 'Avis clients' }}
        name="reviews"
        list={reviewsList}
        show={showReview}
        icon={StarIcon}
      />
      <Resource
        options={{ label: 'Carrousel' }}
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
      <Resource
        options={{ label: 'Adresses' }}
        name="adress"
        list={addressList}
        show={addressShow}
        create={addressCreate}
        edit={addressEdit}
        icon={RoomIcon}
      />
    </Admin>
  </>
);

export default App;
