import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. Page not found</title>
      </Helmet>

      <header className="page-header user-page__head">
        <Logo />
      </header>

      <div style={{textAlign: 'center'}} className="sign-in user-page__content">
        <h1>404. Page not found</h1>
        <Link style={{color: '#eee5b5', marginTop: '10px', display: 'inline-block'}} to="/">Вернуться на главную</Link>
      </div>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
