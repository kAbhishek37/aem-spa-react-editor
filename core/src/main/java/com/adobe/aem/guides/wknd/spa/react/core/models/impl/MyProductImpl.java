package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import com.adobe.aem.guides.wknd.spa.react.core.models.MyProduct;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { MyProduct.class, ComponentExporter.class },
  resourceType = MyProductImpl.RESOURCE_TYPE,
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class MyProductImpl implements MyProduct {

  static final String RESOURCE_TYPE = "wknd-spa-react/components/product";

  @ValueMapValue
  private String fileReference;

  @ValueMapValue
  private String price;

  @ValueMapValue
  private String title;

  @ValueMapValue
  private String btntext;

  @ValueMapValue
  private String btnlink;

  @ValueMapValue
  private String dateTillOffer;

  @Override
  public String getSrc() {
    return fileReference;
  }

  @Override
  public String getDateTillOffer() {
    return dateTillOffer;
  }

  @Override
  public String getExportedType() {
    return MyProductImpl.RESOURCE_TYPE;
  }

  @Override
  public String getPrice() {
    return price;
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
  public String getTitle() {
    return title;
  }
}
