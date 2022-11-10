// package com.adobe.aem.guides.wknd.spa.react.core.models;

// import com.adobe.cq.export.json.ComponentExporter;
// import com.adobe.cq.export.json.ExporterConstants;
// import java.util.Collection;
// import javax.annotation.PostConstruct;
// import org.apache.commons.collections4.CollectionUtils;
// import org.apache.sling.api.SlingHttpServletRequest;
// import org.apache.sling.models.annotations.DefaultInjectionStrategy;
// import org.apache.sling.models.annotations.Exporter;
// import org.apache.sling.models.annotations.Model;
// import org.apache.sling.models.annotations.injectorspecific.ChildResource;
// import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

// @Model(
//   adaptables = SlingHttpServletRequest.class,
//   adapters = ComponentExporter.class,
//   defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
//   resourceType = MyCarousel.RESOURCE_TYPE
// )
// @Exporter(
//   name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
//   extensions = ExporterConstants.SLING_MODEL_EXTENSION
// )
// public class MyCarousel implements ComponentExporter {

//   protected static final String RESOURCE_TYPE =
//     "/app/wknd-spa-react/components/mycarousel";

//   @ValueMapValue(name = "title")
//   private String title;

//   @ValueMapValue(name = "subtitle")
//   private String subtitle;

//   //Multifield Child Resource for social links
//   @ChildResource(name = "multifield")
//   Collection<AccordionBulletPointModel> multifield;

//   @PostConstruct
//   protected void init() {
//     multifield = CollectionUtils.emptyIfNull(this.multifield);
//   }

//   public String getTitle() {
//     return title;
//   }

//   public String getSubtitle() {
//     return subtitle;
//   }

//   public Collection<AccordionBulletPointModel> getMultifield() {
//     return multifield;
//   }

//   @Override
//   public String getExportedType() {
//     return RESOURCE_TYPE;
//   }
// }
