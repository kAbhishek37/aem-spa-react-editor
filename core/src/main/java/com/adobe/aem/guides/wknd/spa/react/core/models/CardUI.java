package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import java.util.Collection;

public interface CardUI extends ComponentExporter {
  public Collection<CardHelper> getCards();

  public String getCardText();

  public String getCardLink();

  public String getCardHeadline();
}
