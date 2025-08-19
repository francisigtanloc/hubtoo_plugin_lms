from loguru import logger
from baserow.core.registries import Plugin
from django.urls import path, include

from .api import urls as api_urls


class PluginNamePlugin(Plugin):
    type = "hubtoo_plugin_lms"

    def get_api_urls(self):
        return [
            path(
                "hubtoo_plugin_lms/",
                include(api_urls, namespace=self.type),
            ),
        ]
