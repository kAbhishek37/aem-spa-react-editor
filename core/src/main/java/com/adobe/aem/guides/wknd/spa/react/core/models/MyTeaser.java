package com.adobe.aem.guides.wknd.spa.react.core.models;
import com.adobe.cq.export.json.ComponentExporter;


public interface MyTeaser extends ComponentExporter {
    public String getSrc();
    public String getBtnText();
    public String getBtnLink();
}
