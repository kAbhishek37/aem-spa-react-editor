package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.adobe.aem.guides.wknd.spa.react.core.models.MyTeaser;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(adaptables = SlingHttpServletRequest.class, adapters = { MyTeaser.class,
        ComponentExporter.class }, resourceType = MyTeaserImpl.RESOURCE_TYPE, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MyTeaserImpl implements MyTeaser {

    static final String RESOURCE_TYPE = "wknd-spa-react/components/myteaser";

    @ValueMapValue
    private String fileReference;

    @ValueMapValue
    private String btnText;

    @ValueMapValue
    private String btnLink;
    

    @Override
    public String getSrc() {
        return null!=fileReference?fileReference:null;
    }

    @Override
    public String getBtnText() {
        return null!=btnText?btnText:null;
    }

    @Override
    public String getBtnLink() {
        return null!=btnLink?btnLink:null;
    }

    @Override
    public String getExportedType() {
        return MyTeaserImpl.RESOURCE_TYPE;
    }

}
