import { NoDeltaIntegrationFlow } from '@tunnelhub/sdk/src/classes/flows/noDeltaIntegrationFlow';
import { GenericParameter, IntegrationMessageReturn, Metadata } from '@tunnelhub/sdk';
import { TunnelHubSystem } from '@tunnelhub/sdk/src/types/data';
import { IntegrationModel } from '../types';
import metadata from '../metadata';

export default class Integration extends NoDeltaIntegrationFlow<IntegrationModel> {
  private readonly parameters: { custom: GenericParameter[] };
  private readonly systems: TunnelHubSystem[];

  constructor(event: any, context: any) {
    super(event, context);
    this.systems = event.systems ?? [];
    this.parameters = event.parameters ?? {};
    /**
     * It is mandatory to have the constructor call the super with the event of the main handler.
     * You can get the systems configured in automation and save them in a class attribute for further use.
     */
  }

  /* istanbul ignore next */
  defineMetadata(): Metadata[] {
    return metadata;
  }

  async loadSourceSystemData(payload?: any): Promise<IntegrationModel[]> {
    /**
     * Return the source system data as a plain array of objects
     *
     * This is the method where you will extract your source data
     * If your automation is a webhook, the payload sent will be available in the "payload" parameter.
     *
     * The implementation of this method is mandatory
     */
    return [];
  }

  async sendData(item: IntegrationModel): Promise<IntegrationMessageReturn> {
    /**
     * Send item in the target system and return a message to the monitoring
     */
    return ({
      data: {},
      message: 'Send successfully',
    });
  }
}
