package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.via.ResourceSuperType;

import com.adobe.aem.guides.wknd.spa.react.core.models.MyTitle;
import com.adobe.aem.guides.wknd.spa.react.core.models.MyTitleText;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { MyTitleText.class,
        ComponentExporter.class }, resourceType = MyTitleTextImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MyTitleTextImpl implements MyTitleText {

    static final String RESOURCE_TYPE = "wknd-spa-react/components/mytitletext";

    @Self
    @Via(type = ResourceSuperType.class)
    private MyTitle mytitle;
    
    @ValueMapValue
    private String text;

    @Override
    public String getTitle() {

        return mytitle.getTitle();
    }

    @Override
    public String getText() {

        return text;
    }

    @Override
    public String getExportedType() {

        return MyTitleTextImpl.RESOURCE_TYPE;
    }

}
