package io.papermc.hangar.tasks;

import io.papermc.hangar.service.internal.JobService;
import io.sentry.spring.jakarta.tracing.SentryTransaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class JobUpdateTask {

    private final JobService service;

    @Autowired
    public JobUpdateTask(final JobService service) {
        this.service = service;
    }

    @SentryTransaction(operation = "task", name = "JobUpdateTask#checkAndProcess")
    @Scheduled(fixedRateString = "#{@hangarConfig.jobs.checkInterval.toMillis()}", initialDelayString = "#{@hangarConfig.jobs.checkInterval.toMillis()}")
    public void checkAndProcess() {
        this.service.checkAndProcess();
    }
}
