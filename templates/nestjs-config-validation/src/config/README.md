# Configuration File

In this section, you can define a global configuration that your service will use.

In `configuration.ts` file - change the `CHANGE_ME` to your service name. Mind that when you're injecting the configService into your services, use: 
```javascript
    this.config = await this.configService.get<SERVICE_NAMEInterface>('SERVICE_NAMEConfig');

```

The service config json file is the file `service.config.json`.
<br> **NOTE!** the configuration uses a schema model to validate the json file `service.config.json` the model can be found at the folder `/models`.