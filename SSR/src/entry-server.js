import { createApp } from './app';

//  在每次导出的时候会返回实例
export default () => {
    const { app } = createApp();
    return app;
}
