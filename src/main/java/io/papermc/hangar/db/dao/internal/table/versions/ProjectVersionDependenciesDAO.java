package io.papermc.hangar.db.dao.internal.table.versions;

import io.papermc.hangar.model.common.Platform;
import io.papermc.hangar.model.db.versions.ProjectVersionDependencyTable;
import org.jdbi.v3.core.enums.EnumByOrdinal;
import org.jdbi.v3.sqlobject.config.RegisterConstructorMapper;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.Timestamped;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlBatch;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
@RegisterConstructorMapper(ProjectVersionDependencyTable.class)
public interface ProjectVersionDependenciesDAO {

    @Timestamped
    @GetGeneratedKeys
    @SqlBatch("INSERT INTO project_version_dependencies (created_at, version_id, platform, name, required, project_id, external_url) VALUES (:now, :versionId, :platform, :name, :required, :projectId, :externalUrl)")
    List<ProjectVersionDependencyTable> insertAll(@BindBean Collection<ProjectVersionDependencyTable> projectVersionDependencyTables);

    @SqlBatch("UPDATE project_version_dependencies SET required = :required, project_id = :projectId, external_url = :externalUrl WHERE id = :id")
    void updateAll(@BindBean Collection<ProjectVersionDependencyTable> projectVersionDependencyTables);

    @SqlBatch("DELETE FROM project_version_dependencies WHERE id = :id")
    void deleteAll(@BindBean Collection<ProjectVersionDependencyTable> projectVersionDependencyTables);

    @SqlQuery("SELECT * FROM project_version_dependencies WHERE version_id = :versionId")
    List<ProjectVersionDependencyTable> getForVersion(long versionId);

    @SqlQuery("SELECT * FROM project_version_dependencies WHERE version_id = :versionId AND platform = :platform")
    List<ProjectVersionDependencyTable> getForVersionAndPlatform(long versionId, @EnumByOrdinal Platform platform);
}
