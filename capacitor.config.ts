import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'build',
  bundledWebRuntime: false,
  server : {
    "url" : "http://192.168.1.8:8100"
  }
};

export default config;
