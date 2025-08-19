FROM baserow/web-frontend:1.34.5

USER root

COPY ./plugins/hubtoo_plugin_lms/ /baserow/plugins/hubtoo_plugin_lms/
RUN /baserow/plugins/install_plugin.sh --folder /baserow/plugins/hubtoo_plugin_lms

USER $UID:$GID
