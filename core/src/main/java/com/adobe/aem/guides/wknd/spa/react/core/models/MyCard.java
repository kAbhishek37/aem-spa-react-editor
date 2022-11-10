package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface MyCard extends ComponentExporter {
  public String getSrc();

  public String getTitle();

  public String getDescription();
}
