package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import com.adobe.aem.guides.wknd.spa.react.core.models.CardHelper;
import com.adobe.aem.guides.wknd.spa.react.core.models.CardUI;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import java.util.Collection;
import javax.annotation.PostConstruct;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { CardUI.class, ComponentExporter.class },
  resourceType = CardUIImpl.RESOURCE_TYPE_CARDUI,
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class CardUIImpl implements CardUI {

  static final String RESOURCE_TYPE_CARDUI = "wknd-spa-react/components/cardui";

  @ChildResource(name = "cardItems")
  Collection<CardHelper> cardItems;

  @ValueMapValue
  private String cardText;

  @ValueMapValue
  private String cardLink;

  @ValueMapValue
  private String cardHeadline;

  @PostConstruct
  protected void init() {
    cardItems = CollectionUtils.emptyIfNull(this.cardItems);
  }

  @Override
  public String getExportedType() {
    return CardUIImpl.RESOURCE_TYPE_CARDUI;
  }

  @Override
  public Collection<CardHelper> getCards() {
    return cardItems;
  }

  @Override
  public String getCardText() {
    return cardText;
  }

  @Override
  public String getCardLink() {
    return cardLink;
  }

  @Override
  public String getCardHeadline() {
    return cardHeadline;
  }
}
