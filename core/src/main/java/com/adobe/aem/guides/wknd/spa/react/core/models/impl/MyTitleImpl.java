package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import com.adobe.aem.guides.wknd.spa.react.core.models.MyTitle;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { MyTitle.class, ComponentExporter.class },
  resourceType = MyTitleImpl.RESOUTCE_TYPE,
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class MyTitleImpl implements MyTitle {

  static final String RESOUTCE_TYPE = "wknd-spa-react/components/mytitle";

  @ValueMapValue
  private String title;

  @Override
  public String getTitle() {
    return null != title ? title : null;
  }

  @Override
  public String getExportedType() {
    return MyTitleImpl.RESOUTCE_TYPE;
  }
}
