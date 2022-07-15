import { NoDeltaIntegrationFlow } from '@4success/tunnelhub-sdk/src/classes/flows/noDeltaIntegrationFlow';
import { GenericParameter, IntegrationMessageReturn, Metadata } from '@4success/tunnelhub-sdk';
import { TunnelHubSystem } from '@4success/tunnelhub-sdk/src/types/data';
import { IntegrationModel } from '../data';

export default class Integration extends NoDeltaIntegrationFlow {
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
    /**
     * Return all columns that will be visible on the monitoring screen.
     * The components order is the display order in the monitoring table.
     *
     * The implementation of this method is mandatory
     */
    return [
      {
        fieldName: 'key_field',
        fieldLabel: 'Key field',
        fieldType: 'TEXT',
      },
      {
        fieldName: 'regular_field',
        fieldLabel: 'Regular field',
        fieldType: 'TEXT',
      },
    ];
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
    return [
      {
        key_field: '1',
        regular_field: 'anyString',
      },
      {
        key_field: '2',
        regular_field: 'anotherString',
      },
    ];
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
