# ADR-001: Unified Work Management Engine
**Date**
2026-07-17

---

# Context

The production house currently manages work through WhatsApp, Google Drive, Google Calendar and verbal communication.

Initially the system was planned around independent modules:

- Shoots
- Editing
- Graphic Design
- Ads
- Social Media
- Delivery

Each module would maintain its own task lifecycle.

While simple initially, this approach introduces duplicated logic for:

- Assignment
- Status tracking
- Notifications
- Due dates
- Audit history
- Comments
- Analytics
- Permissions

Future services would require additional modules.

Examples:

- Copywriting
- Voice-over
- Thumbnail Creation
- Motion Graphics
- SEO
- Podcast Editing

This architecture does not scale.

---

# Decision

The application will revolve around a single entity called **Work Item**.

Everything becomes a Work Item.

Examples include:

- Video Shoot
- Video Edit
- Graphic Design
- Client Review
- Ad Campaign
- Instagram Reel
- Thumbnail
- Upload
- Delivery

Every Work Item follows the same lifecycle.

```
Project
        ↓
Work Item
        ↓
Workflow Stage
        ↓
Assignment
        ↓
Deliverable
```

---

# Benefits

## Single Assignment Engine

Every department uses the same assignment logic.

---

## Single Notification System

Telegram

Email

Dashboard

Realtime

All subscribe to Work Item events.

---

## Unified Analytics

Instead of building analytics separately for:

- Editing
- Design
- Shoots

Analytics can aggregate Work Items.

Examples:

- Average completion time
- Employee productivity
- Department workload
- Client turnaround
- SLA compliance

---

## Extensibility

Adding a new service should require:

- New Work Item Type
- Optional Workflow Template

No database redesign.

---

## Event Driven Design

Every significant action emits an event.

Examples

PROJECT_CREATED

WORK_CREATED

WORK_ASSIGNED

WORK_COMPLETED

CLIENT_APPROVED

PAYMENT_RECEIVED

LEAVE_APPROVED

Notifications, Analytics and Integrations consume these events independently.

---

# Consequences

Pros

✓ Highly scalable

✓ Minimal duplicated logic

✓ Easier reporting

✓ Easier permissions

✓ Easier integrations

✓ Easier automation

Cons

• Slightly more abstract

• Requires disciplined workflow modelling

The trade-off is acceptable.

---

# Decision Outcome

Accepted unanimously.

Future architecture decisions should build upon the Work Item Engine rather than introducing feature-specific task systems.