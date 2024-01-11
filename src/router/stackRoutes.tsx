import { createStackNavigator } from '@react-navigation/stack'

import { EnterPage } from '../pages/enterPage'
import { HomePage } from '../pages/homePage'
import { DetailsPage } from '../pages/detailsPage'

const { Screen, Navigator} = createStackNavigator();

export function StackRouter(){
    return(
        <Navigator> 
            <Screen
                name = "enterPage"
                component={EnterPage}
                options={{headerShown:false}}
            />

            <Screen
                name = "homePage"
                component={HomePage}
                options={{headerShown:false}}
            />
            <Screen
                name = "detailsPage"
                component={DetailsPage}
                options={{headerShown:false}}
            />
        </Navigator>
    )
}