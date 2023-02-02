import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';
import { theme } from 'theme';

export default function SkeletonLoader() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints.tablet} - 1px))`,
  });
  const isTablet = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.tablet})`,
  });
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.desktop})`,
  });

  return (
    <>
      {isDesktop && (
        <ContentLoader viewBox="0 0 1034 486">
          <rect x="0" y="12" width="104" height="20" />
          <rect x="136" y="0" rx="16" ry="16" width="578" height="44" />
          <rect x="746" y="0" rx="16" ry="16" width="136" height="44" />
          <rect x="898" y="0" rx="16" ry="16" width="136" height="44" />
          <rect x="0" y="104" rx="16" ry="16" width="746" height="382" />
          <rect x="821" y="104" rx="16" ry="16" width="213" height="283" />
        </ContentLoader>
      )}
      {isTablet && (
        <ContentLoader viewBox="0 0 624 868">
          <rect x="0" y="12" width="104" height="20" />
          <rect x="144" y="0" rx="16" ry="16" width="480" height="44" />
          <rect x="179" y="76" rx="16" ry="16" width="125" height="44" />
          <rect x="319" y="76" rx="16" ry="16" width="125" height="44" />
          <rect x="0" y="168" rx="16" ry="16" width="624" height="382" />
          <rect x="0" y="616" rx="16" ry="16" width="230" height="278" />
        </ContentLoader>
      )}
      {isMobile && (
        <ContentLoader viewBox="0 0 280 144">
          <rect x="0" y="0" width="280" height="30" />
          <rect x="0" y="38" width="280" height="30" />
          <rect x="0" y="76" width="280" height="30" />
          <rect x="0" y="114" width="280" height="30" />
        </ContentLoader>
      )}
    </>
  );
}
