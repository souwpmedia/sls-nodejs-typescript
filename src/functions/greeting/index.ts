
import { handlerPath } from '@libs/handlerResolver';

export default {
    handler: `${handlerPath(__dirname)}/handler.greeting`,
    events: [
        {
            http: {
                method: 'get',
                path: 'greeting',
                request: {
                    
                }
            }
        }
    ]
}