package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface MyLeftProfile extends ComponentExporter {
  public String getSrc();

  public String getTitle();

  public String getDescription();

  public String getBtntext();

  public String getBtnlink();

  public Boolean getRightprofile();
}
