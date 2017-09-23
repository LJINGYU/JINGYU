package com.chinook5.task;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimerTask;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * Created by mori on 2017/7/14.
 *
 */
public class ScheduledExecutor {

    private static ScheduledExecutorService executor = Executors.newScheduledThreadPool(100);

    public static void main(String[] args) {
        TimerTask task = new TimerTask() {
            @Override
            public void run() {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                System.out.println("Work start, thread id:" + Thread.currentThread().getName() + " " + sdf.format(new Date()));
            }
        };
        ScheduledExecutor.delaySchedule(task, 0, TimeUnit.SECONDS);
        ScheduledExecutor.delaySchedule(task, 1, TimeUnit.SECONDS);
        ScheduledExecutor.delaySchedule(task, 10, TimeUnit.SECONDS);
        ScheduledExecutor.delaySchedule(task, 3, TimeUnit.SECONDS);
    }

    public static void delaySchedule(TimerTask task, long delay, TimeUnit unit) {
        executor.schedule(task, delay, unit);
    }

}
