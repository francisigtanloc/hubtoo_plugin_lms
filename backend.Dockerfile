FROM baserow/backend:1.34.5

USER root

COPY ./plugins/hubtoo_plugin_lms/ $BASEROW_PLUGIN_DIR/hubtoo_plugin_lms/
RUN /baserow/plugins/install_plugin.sh --folder $BASEROW_PLUGIN_DIR/hubtoo_plugin_lms

USER $UID:$GID
