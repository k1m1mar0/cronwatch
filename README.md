# CronWatch ⏱️

**Never guess if your cron jobs are running again. CronWatch is a simple, affordable, yet powerful monitoring service for your scheduled tasks, background jobs, and microservices.**

It provides the peace of mind that your critical automations are working as expected. If they don't, you'll be the first to know.

---

## The Problem: "Silent Failures"

You have a critical cron job that backs up your database every night at 3 AM. You set it up and hope for the best. But what happens if:
- The script crashes due to an unexpected error?
- The server reboots at 2:59 AM?
- The job silently hangs and never finishes?

You won't know until it's too late. **CronWatch solves this by turning your jobs from a "black box" into a transparent, monitored process.**

---

## How It Works

It's incredibly simple:

1.  **Create a Check:** In the CronWatch UI, you create a new check (e.g., "Daily DB Backup") and set its schedule (e.g., `every 24 hours`).
2.  **Get a URL:** We generate a unique URL for your check.
3.  **Wrap Your Job:** You add a simple `curl` command to the end of your cron job. This "pings" our service to let us know it finished successfully.

**Before:**
```bash
0 3 * * * /path/to/backup.sh
After:
code
Bash
0 3 * * * /path/to/backup.sh && curl https://your.cronwatch.instance/ping/abc-123```

If we don't receive the ping on time, we immediately alert you via Email, Slack, or Telegram.

---

## Why CronWatch? The "Golden Middle Ground"

We are designed for professional solo developers, freelancers, and small teams who find existing solutions either too basic or too expensive.

| Feature                      | Healthchecks.io (Free Tier) | **CronWatch (Our Offer)** | Cronitor.io (Paid Tier) |
| ---------------------------- | --------------------------- | ------------------------- | ----------------------- |
| **Basic OK/Fail Monitoring** | ✅                          | ✅                        | ✅                      |
| **Simple, Clean UI**         | ✅                          | ✅                        | ❌ (Can be complex)     |
| **Affordable Price**         | ✅ (Free)                   | ✅ **(Simple $5/mo plan)**| ❌ (Starts at $49/mo) |
| **Execution Time Tracking**  | ❌                          | ✅                        | ✅                      |
| **"Run Too Long" Alerts**    | ❌                          | ✅                        | ✅                      |
| **Group Checks by Project**  | ❌                          | ✅                        | ✅                      |

**CronWatch gives you the "pro" features you need without the enterprise complexity and cost.**

---

## Key Features

*   **📈 Simple Analytics:** Track the execution time of every job run. See performance trends on a simple graph.
*   **🧠 Smart Alerts:** Get notified not only when a job fails, but also when it runs longer than your defined threshold.
*   **🗂️ Project Organization:** Group your checks by project or client for a clean and organized dashboard. Perfect for freelancers and agencies.
*   **🔌 Multiple Channels:** Receive alerts via Email, Slack, Telegram, and Webhooks.
*   **🚀 Built for Speed:** A minimal, fast, and no-nonsense user interface.
