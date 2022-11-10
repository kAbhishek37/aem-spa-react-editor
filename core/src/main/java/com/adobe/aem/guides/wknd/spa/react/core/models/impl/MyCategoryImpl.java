package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import com.adobe.aem.guides.wknd.spa.react.core.models.MyCategory;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { MyCategory.class, ComponentExporter.class },
  resourceType = MyCategoryImpl.RESOURCE_TYPE,
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class MyCategoryImpl implements MyCategory {

  static final String RESOURCE_TYPE = "wknd-spa-react/components/mycategory";

  @ValueMapValue
  private String imageurl;

  @ValueMapValue
  private String title;

  @ValueMapValue
  private String btntext;

  @ValueMapValue
  private String btnlink;

  @Override
  public String getSrc() {
    return imageurl;
  }

  @Override
  public String getTitle() {
    return title;
  }

  @Override
  public String getBtntext() {
    return btntext;
  }

  @Override
  public String getBtnlink() {
    return btnlink;
  }

  @Override
  public String getExportedType() {
    return MyCategoryImpl.RESOURCE_TYPE;
  }
}
