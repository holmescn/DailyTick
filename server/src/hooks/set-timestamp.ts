// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (name: string): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    context.data[name] = new Date();
    return context;
  };
};
