import { PluginNamePlugin } from '@hubtoo-plugin-lms/plugins'

export default (context) => {
  const { app } = context
  app.$registry.register('plugin', new PluginNamePlugin(context))
}
