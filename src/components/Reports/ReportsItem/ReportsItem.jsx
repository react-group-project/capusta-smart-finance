import AddIncome from 'components/Icons/AddIncome';
import Alcohol from 'components/Icons/Alcohol';
import Communal from 'components/Icons/Communal';
import Education from 'components/Icons/Education';
import Entertainment from 'components/Icons/Entertainment';
import Health from 'components/Icons/Health';
import Housing from 'components/Icons/Housing';
import Other from 'components/Icons/Other';
import Products from 'components/Icons/Products';
import Salary from 'components/Icons/Salary';
import Sports from 'components/Icons/Sports';
import Technique from 'components/Icons/Technique';
import Transport from 'components/Icons/Transport';

export default function ReportsItem() {
    const categories = {
        Transport: <Transport />,
        Health: <Health />,
        Alcohol: <Alcohol />,
        Entertainment: <Entertainment />,
        Housing: <Housing />,
        Technique: <Technique />,
        Communal: <Communal />,
        Sports: <Sports />,
        Education: <Education />,
        Other: <Other />,
        Salary: <Salary />,
        AddIncome: <AddIncome />,
    };
    return (
        <>
            <div style={{ display: 'flex' }}>
                <AddIncome />
                <Alcohol />
                <Communal />
                <Education />
                <Entertainment />
                <Health />
                <Housing />
                <Other />
                <Products />
                <Salary />
                <Sports />
                <Technique />
                <Transport />
            </div>
        </>
    );
}
