package io.papermc.hangar.serviceold.plugindata;

import io.papermc.hangar.db.modelold.ProjectVersionTagsTable;
import io.papermc.hangar.exceptions.HangarException;
import io.papermc.hangar.modelold.Platform;
import io.papermc.hangar.modelold.generated.PlatformDependency;
import io.papermc.hangar.modelold.viewhelpers.VersionDependencies;
import io.papermc.hangar.serviceold.VersionService;
import io.papermc.hangar.serviceold.plugindata.handler.FileTypeHandler;
import org.springframework.lang.Nullable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static io.papermc.hangar.serviceold.plugindata.DataValue.DependencyDataValue;
import static io.papermc.hangar.serviceold.plugindata.DataValue.PlatformDependencyDataValue;
import static io.papermc.hangar.serviceold.plugindata.DataValue.StringDataValue;
import static io.papermc.hangar.serviceold.plugindata.DataValue.StringListDataValue;

public class PluginFileData {
    private final Map<String, DataValue> dataValues = new HashMap<>();

    public PluginFileData(Map<Platform, List<DataValue>> dataValues) {
        dataValues.forEach((platform, values) -> {
            for (DataValue value : values) {
                switch (value.getKey()) {
                    case FileTypeHandler.DEPENDENCIES:
                        if (this.dataValues.containsKey(value.getKey())) {
                            DependencyDataValue dependencyDataValue = (DependencyDataValue) this.dataValues.get(value.getKey());
                            dependencyDataValue.getValue().putAll(((DependencyDataValue) value).getValue());
                        } else {
                            this.dataValues.put(value.getKey(), value);
                        }
                        break;
                    case FileTypeHandler.PLATFORM_DEPENDENCY:
                        if (this.dataValues.containsKey(value.getKey())) {
                            PlatformDependencyDataValue platformDependencyDataValue = (PlatformDependencyDataValue) this.dataValues.get(value.getKey());
                            platformDependencyDataValue.getValue().addAll(((PlatformDependencyDataValue) value).getValue());
                        } else {
                            this.dataValues.put(value.getKey(), value);
                        }
                        break;
                    default:
                        this.dataValues.put(value.getKey(), value);
                }
            }
        });
    }

    @Nullable
    public String getName() {
        DataValue name = dataValues.get("name");
        return name != null ? ((StringDataValue) name).getValue() :  null;
    }

    @Nullable
    public String getDescription() {
        DataValue description = dataValues.get("description");
        return description != null ? ((StringDataValue) description).getValue() :  null;
    }

    @Nullable
    public String getWebsite() {
        DataValue url = dataValues.get("url");
        return url != null ? ((StringDataValue) url).getValue() :  null;
    }

    @Nullable
    public String getVersion() {
        DataValue version = dataValues.get("version");
        return version != null ? ((StringDataValue) version).getValue() :  null;
    }

    @Nullable
    public List<String> getAuthors() {
        DataValue authors = dataValues.get("authors");
        return authors != null ? ((StringListDataValue) authors).getValue() :  null;
    }

    @Nullable
    public VersionDependencies getDependencies() {
        DataValue dependencies = dataValues.get("dependencies");
        if (dependencies == null) {
            return new VersionDependencies(getPlatformDependencies().stream().collect(Collectors.toMap(PlatformDependency::getPlatform, pd -> new ArrayList<>())));
        }
        return ((DependencyDataValue) dependencies).getValue();
    }

    public List<PlatformDependency> getPlatformDependencies() {
        DataValue platformDependencies = dataValues.get(FileTypeHandler.PLATFORM_DEPENDENCY);
        return platformDependencies != null ? ((PlatformDependencyDataValue) platformDependencies).getValue() : null;
    }

    public void validate() {
        if (getName() == null) {
            throw new HangarException("error.plugin.incomplete", "name");
        } else if (getVersion() == null) {
            throw new HangarException("error.plugin.incomplete", "version");
        } else if (getPlatformDependencies() == null || getPlatformDependencies().isEmpty()) {
            throw new HangarException("error.plugin.incomplete", "platform");
        }
    }

    public List<ProjectVersionTagsTable> createTags(long versionId, VersionService versionService) {
        // TODO not sure what is happening here in ore... it seems to only add tags if they contain mixins?
        return new ArrayList<>();
    }
}