package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface MyProduct extends ComponentExporter {
  public String getSrc();

  public String getPrice();

  public String getTitle();

  public String getBtntext();

  public String getBtnlink();

  public String getDateTillOffer();
}
