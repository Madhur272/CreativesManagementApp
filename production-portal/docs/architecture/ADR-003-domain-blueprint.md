## Employee 
Identity -> EmployeeId

Owns
- Attendance
- Leave
- Salary Records
- Assignments
- Notifications

References
- Department
- Role

Publishes
- EmployeeCreated
- EmployeeActivated
- EmployeeDeactivated

## Client
Purpose -> Represents the organization purchasing services.

Owns
- Brands
- Contracts
- Invoices

Publishes
- ClientCreated
- ClientArchived

Rules
- Name must be unique.
- Cannot be deleted with active Projects.
- Can be archived.

## Brand
Purpose -> Represents a business unit or brand under a client.

Example:

Unilever

   ↓

Dove

   ↓

Summer Campaign

Owns -> Campaigns

Rules
- Exactly one Client.
- Name unique within the Client.

## Campaign
Purpose -> Represents a marketing initiative.

Campaigns organize Projects.

Owns -> Projects

Rules
- May span multiple months.
- May contain many Projects.

## Project (Aggregate Root)
Owns
- Members
- Schedules
- Drive Space
- Work Items
- Deliverables

Publishes
- ProjectCreated
- ProjectCompleted
- ProjectArchived

## Work Definition (Master Data)

Video Edit

↓

Department

↓

Workflow Template

↓

Estimated Duration

↓

Required Skills

↓

Default Priority

↓

SLA

↓

Required Deliverable Type

## Work Item (Aggregate Root)
Owns
- Assignments
- Checklist
- Comments
- Dependencies
- Workflow State
- Time Logs

References
- Project
- Work Definition
- Workflow Template

Publishes
- WorkCreated
- WorkAssigned
- WorkStarted
- WorkBlocked
- WorkCompleted
- WorkApproved

Rules
- Cannot start without an active Assignment.
- Cannot complete with mandatory checklist items outstanding.
- Workflow transitions must be valid.
- Priority changes are audited.