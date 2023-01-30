import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';
import { AccessPropTypes } from './Access.props';

export default function MobilePage({ redirect, component: Component }) {
    const isMobile = useMediaQuery({
        screen: true,
        maxWidth: 767,
    });

    return isMobile ? Component : <Navigate to={redirect} replace />;
}

MobilePage.propTypes = AccessPropTypes;
