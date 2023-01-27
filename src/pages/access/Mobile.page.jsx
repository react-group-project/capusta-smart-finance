import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';
import { AccessPropTypes } from './Access.props';

export default function MobilePage({ redirect, component: Component }) {
  const isMobile = useMediaQuery({
    // TODO: Додати брекпоінт із теми
    //query: `screen && (max-width: ${theme.breackpoints[1] - 1}px)`,
    screen: true,
    maxWidth: 767,
  });

  return isMobile ? Component : <Navigate to={redirect} replace />;
}

MobilePage.propTypes = AccessPropTypes;
