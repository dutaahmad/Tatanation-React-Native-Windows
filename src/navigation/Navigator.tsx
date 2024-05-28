import React, { useState } from 'react';
import { HomeScreen } from '../screens';
import { DetailScreen } from '../screens';
import { ScreenParams } from '../libs/type';

const StackNavigator: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<ScreenParams>({ screen: 'Home' });

    const navigate = (screen: string, params?: { [key: string]: any }) => {
        setCurrentScreen({ screen, params });
    };

    let ScreenComponent: Element;
    switch (currentScreen.screen) {
        case 'Home':
            ScreenComponent = <HomeScreen navigate={navigate} />;
            break;
        case 'Details':
            ScreenComponent = <DetailScreen navigate={navigate} params={currentScreen.params} />;
            break;
        default:
            ScreenComponent = <HomeScreen navigate={navigate} />;
    }
    return (<>{ScreenComponent}</>);
};

export default StackNavigator;