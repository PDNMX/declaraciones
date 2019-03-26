import * as firebase from "firebase/app";
import "firebase/auth";
import config from "./config.json";

const app = firebase.initializeApp(config);

export default app;
