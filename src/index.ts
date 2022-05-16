import App from './main/App';
import {registerRootComponent} from "expo";
import {Application} from "./infrastructure/di/Application";
import {AppModule} from "./main/app/AppModule";

Application.run(AppModule);

registerRootComponent(App);
