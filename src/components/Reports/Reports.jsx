import MediaQuery from 'react-responsive';
import ReportsItem from './ReportsItem/ReportsItem';
import { List, ReportContainer } from './Reports.styled';
import ArrowButton from './ArrowButton/ArrowButton';
export default function Reports({ statCategories, getCategory, getWages }) {
    const onClickHandler = category => {
        getCategory(category);
    };
    const getState = value => {
        getWages(value);
    };
    return (
        <>
            <MediaQuery maxWidth={767}>
                <ArrowButton getState={getState} />
                {statCategories && (
                    <List>
                        {statCategories.map((category, index) => (
                            <li
                                key={index}
                                onClick={() => onClickHandler(category)}
                            >
                                <ReportsItem category={category} />
                            </li>
                        ))}
                    </List>
                )}
            </MediaQuery>
            <MediaQuery minWidth={768}>
                <ReportContainer>
                    <ArrowButton getState={getState} />
                    {statCategories && (
                        <List>
                            {statCategories.map((category, index) => (
                                <li
                                    key={index}
                                    onClick={() => onClickHandler(category)}
                                >
                                    <ReportsItem category={category} />
                                </li>
                            ))}
                        </List>
                    )}
                </ReportContainer>
            </MediaQuery>
        </>
    );
}
