package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface MyCategory extends ComponentExporter {
  public String getSrc();

  public String getTitle();

  public String getBtntext();

  public String getBtnlink();
}
