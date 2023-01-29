import ReportsItem from './ReportsItem/ReportsItem';
import { List, ReportContainer } from './Reports.styled';
import ArrowButton from './ArrowButton/ArrowButton';
export default function Reports({ statCategories, getCategory }) {
    const onClickHandler = category => {
        getCategory(category);
    };
    return (
        <>
            <ReportContainer>
                <ArrowButton />
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
        </>
    );
}
